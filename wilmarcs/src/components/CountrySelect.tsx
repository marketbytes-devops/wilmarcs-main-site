'use client';
import { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { CSSObjectWithLabel } from 'react-select';
import 'flag-icons/css/flag-icons.min.css';
import { countries } from '@/utils/countryCodes';

export default function CountrySelect() {
  type CountryOption = {
    value: string;
    label: React.ReactNode;
  };
  const options: CountryOption[] = countries.map((c) => ({
    value: c.dialCode,
    label: (
      <div className="flex items-center gap-2 country-item">
        <span className={`fi fi-${c.code}`} data-code={c.dialCode} />
        <span className="country-code text-white">{c.dialCode}</span>
      </div>
    ),
  }));
  const [selectedOption, setSelectedOption] = useState<CountryOption | null>(options[97]);
  const customStyles: StylesConfig<CountryOption, false> = {
    option: (
      provided: CSSObjectWithLabel,
      state: {
        isSelected: boolean;
        isFocused: boolean;
      }
    ) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#1f2937' : (state.isFocused ? '#374151' : 'black'),
      cursor: 'pointer',
    }),
    menu: (provided: CSSObjectWithLabel) => ({
      ...provided,
      zIndex: 9999,
    }),
  };
  return (
    <div className="flex w-full">
      <Select options={options} styles={customStyles} onChange={(option) => setSelectedOption(option)} defaultValue={selectedOption} className="w-full" instanceId="country-select" />
      <span className="country-code h-[50px] flex items-center pt-0.5 justify-center px-2">{selectedOption?.value}</span>
    </div>
  );
}
