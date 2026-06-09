import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
    localStorage.setItem('preferredLanguage', languageCode);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background text-foreground hover:bg-muted transition-colors"
        title="Change language"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{currentLanguage.flag}</span>
        <span className="text-sm hidden sm:inline">{currentLanguage.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 p-2 grid grid-cols-2 gap-1 w-64">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`px-3 py-2 flex flex-col items-center gap-1 rounded-md hover:bg-muted transition-colors ${
                i18n.language === lang.code ? 'bg-muted border border-accent' : 'border border-transparent'
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="text-xs font-medium text-center">{lang.name}</span>
              {i18n.language === lang.code && <span className="text-accent text-xs font-bold">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
