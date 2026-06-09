import { Facebook, Twitter, Linkedin, Share2, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { trackSocialShare } from '@/lib/analytics';

interface SocialShareButtonsProps {
  title?: string;
  description?: string;
  url?: string;
  className?: string;
}

export default function SocialShareButtons({
  title = 'DONGXIAO® CASHMERE - Premium Cashmere B2B Supplier',
  description = 'Discover premium cashmere products from Ordos. ISO certified, 23+ years of excellence. Global B2B supplier.',
  url = typeof window !== 'undefined' ? window.location.href : '',
  className = '',
}: SocialShareButtonsProps) {
  const { t } = useTranslation();
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  };

  const buttons = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: shareLinks.facebook,
      color: 'hover:text-blue-600',
      label: t('socialShare.shareOnFacebook'),
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: shareLinks.twitter,
      color: 'hover:text-blue-400',
      label: t('socialShare.shareOnTwitter'),
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: shareLinks.linkedin,
      color: 'hover:text-blue-700',
      label: t('socialShare.shareOnLinkedIn'),
    },
    {
      name: 'WhatsApp',
      icon: Share2,
      href: shareLinks.whatsapp,
      color: 'hover:text-green-500',
      label: t('socialShare.shareOnWhatsApp'),
    },
    {
      name: 'Email',
      icon: Mail,
      href: shareLinks.email,
      color: 'hover:text-gray-600',
      label: t('socialShare.shareViaEmail'),
    },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="text-sm font-medium text-muted-foreground">{t('socialShare.shareLabel')}</span>
      <div className="flex gap-3">
        {buttons.map((button) => {
          const Icon = button.icon;
          return (
            <a
              key={button.name}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              title={button.label}
              className={`p-2 rounded-lg border border-border bg-background text-foreground transition-colors ${button.color} hover:bg-muted`}
              aria-label={button.label}
              onClick={() => trackSocialShare(button.name.toLowerCase(), title)}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
