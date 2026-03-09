"use client";

import { useState } from "react";

export default function ContactForm({ hero, contact, }: { hero: { tag: string }; contact: { form: { cta: { submit: string } } }; }) {
    const [genLoading, setGenLoading] = useState(false);
    const [genMsg, setGenMsg] = useState<{type: "ok" | "err"; text: string} | null>(null);
    async function submitGeneral(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setGenMsg(null);
        setGenLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}enquiry`, {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
            setGenMsg({ type: "ok", text: "Sent ✅ We’ll get back you asap." });
            form.reset();
        } catch (err) {
            const message = err instanceof Error ? err.message : "Send failed. Please try again.";
            setGenMsg({ type: "err", text: message });
        } finally {
            setGenLoading(false);
        }
    }

    return (
        <form onSubmit={submitGeneral}>
            {genMsg && (<div className={`px-4 py-3 rounded-lg mt-2 text-sm ${genMsg.type === "ok" ? "text-emerald-600 bg-emerald-100" : "text-red-600 bg-red-100"}`}>{genMsg.text}</div>)}
            <input type="hidden" name="type" value="industry"/>
            <input type="text" name="company1" className="hidden" autoComplete="off" tabIndex={-1} />
            <div className="grid md:grid-cols-2 gap-6">
                <input required placeholder="Full name" name="name" className="py-2 px-4 h-14 w-full bg-transparent border border-gray-800 rounded-lg" />
                <input required type="email" name="email" placeholder="Work email" className="py-2 px-4 h-14 w-full bg-transparent border border-gray-800 rounded-lg" />
                <input required name="company" placeholder="Company" className="py-2 px-4 h-14 w-full bg-transparent border border-gray-800 rounded-lg" />
                <input value={hero.tag} name="industry" readOnly className="py-2 px-4 h-14 w-full bg-transparent border border-gray-800 rounded-lg" />
            </div>
            <textarea placeholder="Project summary" name="summary" className="w-full mt-6 py-3 px-4 h-14 bg-transparent border border-gray-800 rounded-lg min-h-[120px]" />
            <div className="flex flex-wrap sm:gap-6 gap-4 mt-6">
                <button className="cursor-pointer bg-white sm:w-auto w-full text-black px-5 py-3 rounded-lg hover:opacity-90" type="submit">
                    {genLoading ? "Sending..." : contact.form.cta.submit}
                </button>
                <a className="border border-gray-700 px-5 sm:w-auto w-full text-center py-3 rounded-lg" href="tel:+919066249992">Or call +91 90662 49992</a>
            </div>
        </form>
    );
}
