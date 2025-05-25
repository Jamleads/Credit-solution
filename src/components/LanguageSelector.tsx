
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage, languages } from '@/contexts/LanguageContext';

export function LanguageSelector() {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <Select
      value={currentLanguage.code}
      onValueChange={(value) => {
        const selectedLanguage = languages.find(lang => lang.code === value);
        if (selectedLanguage) {
          setLanguage(selectedLanguage);
        }
      }}
    >
      <SelectTrigger className="w-32 h-9 text-sm">
        <SelectValue>
          {currentLanguage.flag} {currentLanguage.name}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            {language.flag} {language.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
