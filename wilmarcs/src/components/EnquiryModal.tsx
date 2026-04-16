'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownProps {
  options: { value: string; label: string }[];
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any; 
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rules?: any;
}

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Dropdown = ({ options, placeholder, control, name, rules }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const selected = options.find((opt: { value: string; label: string }) => opt.value === value);

        return (
          <div ref={ref} className="relative">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className={`
                w-full bg-zinc-800/50 border rounded-xl px-3 py-2.5 text-left flex items-center justify-between appearance-none transition-all
                ${error ? 'border-red-500' : 'border-white/10 focus:border-white/30'}
                ${selected ? 'text-white' : 'text-zinc-600'}
              `}
            >
              <span>{selected?.label || placeholder}</span>
              <motion.svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </button>
            {error && <p className="text-red-500 text-xs mt-1 ml-1">{error.message}</p>}
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute z-50 mt-2 w-full bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                >
                  {options.map((opt: { value: string; label: string }) => (
                    <li
                      key={opt.value}
                      onClick={() => {
                        onChange(opt.value);
                        setIsOpen(false);
                      }}
                      className="px-3 py-2 cursor-pointer text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
                    >
                      {opt.label}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        );
      }}
    />
  );
};

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        display: 'flex',
      })
      .fromTo(contentRef.current, 
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' }
      );
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        onClose();
        setSubmitStatus('idle');
      }
    });
    tl.to(contentRef.current, {
      scale: 0.8,
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: 'power2.in'
    })
    .to(overlayRef.current, {
      opacity: 0,
      duration: 0.2
    });
  };

  const onSubmit = async (data: Record<string, string>) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        fullName: data.fullName,
        workEmail: data.workEmail,
        phone: data.phone,
        company: data.company,
        budgetRange: data.budgetRange,
        timeline: data.timeline,
        projectBrief: data.projectBrief,
        referenceLinks: data.referenceLinks || '—',
      };

      const result = await emailjs.send(
        'service_s8ubnxc',
        'template_4l40s3a',
        templateParams,
        '2YEPEtf8IXRpv5o5b'
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => {
          window.location.href = "https://wilmarcs.com/thank-you";
        }, 1500);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const budgetOptions = [
    { value: "₹5–10L", label: "₹5–10L" },
    { value: "₹10–20L", label: "₹10–20L" },
    { value: "₹20L+", label: "₹20L+" },
  ];

  const timelineOptions = [
    { value: "Urgent", label: "Urgent" },
    { value: "Standard", label: "Standard" },
    { value: "Flexible", label: "Flexible" },
  ];

  if (!isOpen && submitStatus === 'idle') return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md w-full h-full overflow-y-auto pt-4 pb-4"
      style={{ opacity: 0, display: isOpen ? 'flex' : 'none' }}
      onClick={(e) => e.target === overlayRef.current && handleClose()}
    >
      <div
        ref={contentRef}
        className="relative w-[95%] max-w-[420px] mx-auto my-auto bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl grain"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 sm:p-7">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 text-center">Get a Quote</h2>
            <p className="text-zinc-500 text-sm text-center">Let's discuss your production vision.</p>
          </div>

          {submitStatus === 'success' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
              <p className="text-zinc-400 mt-2">Redirecting you shortly...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    {...register("fullName", { required: "Full name is required" })}
                    placeholder="Full Name"
                    className={`w-full bg-zinc-800/50 border rounded-xl px-3 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none transition-all ${errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.fullName.message as string}</p>}
                </div>
                <div>
                  <input
                    {...register("phone", { 
                      required: "Phone number is required",
                      pattern: { value: /^\+?[\d\s-]{10,}$/, message: "Invalid phone number" }
                    })}
                    placeholder="Phone Number"
                    className={`w-full bg-zinc-800/50 border rounded-xl px-3 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone.message as string}</p>}
                </div>
              </div>

              <div>
                <input
                  {...register("workEmail", { 
                    required: "Work email is required",
                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email" }
                  })}
                  placeholder="Work Email"
                  className={`w-full bg-zinc-800/50 border rounded-xl px-3 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none transition-all ${errors.workEmail ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                />
                {errors.workEmail && <p className="text-red-500 text-xs mt-1 ml-1">{errors.workEmail.message as string}</p>}
              </div>

              <div>
                <input
                  {...register("company", { required: "Company name is required" })}
                  placeholder="Company"
                  className={`w-full bg-zinc-800/50 border rounded-xl px-3 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none transition-all ${errors.company ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                />
                {errors.company && <p className="text-red-500 text-xs mt-1 ml-1">{errors.company.message as string}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Dropdown
                  options={budgetOptions}
                  placeholder="Budget Range"
                  control={control}
                  name="budgetRange"
                  rules={{ required: "Required" }}
                />
                <Dropdown
                  options={timelineOptions}
                  placeholder="Timeline"
                  control={control}
                  name="timeline"
                  rules={{ required: "Required" }}
                />
              </div>

              <div>
                <textarea
                  {...register("referenceLinks")}
                  placeholder="Reference Links (optional - one per line)"
                  className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-all h-16 resize-none scrollbar-hide"
                />
              </div>

              <div>
                <textarea
                  {...register("projectBrief", { required: "Project brief is required" })}
                  placeholder="Project Brief"
                  className={`w-full bg-zinc-800/50 border rounded-xl px-3 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none transition-all h-24 resize-none ${errors.projectBrief ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                />
                {errors.projectBrief && <p className="text-red-500 text-xs mt-1 ml-1">{errors.projectBrief.message as string}</p>}
              </div>

              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm mt-2 text-center">Failed to send enquiry. Please try again.</p>
              )}

              <div className="flex justify-center pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
