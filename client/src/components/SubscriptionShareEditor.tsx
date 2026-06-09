import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Share2, Copy, Check, Linkedin, Facebook, Twitter, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface SubscriptionShareEditorProps {
  defaultMessage?: string;
  email?: string;
}

export default function SubscriptionShareEditor({ 
  defaultMessage = "", 
  email = "" 
}: SubscriptionShareEditorProps) {
  const { t } = useTranslation();
  const [shareMessage, setShareMessage] = useState(defaultMessage || t("subscription.shareMessage") || "");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(shareMessage);
    setIsCopied(true);
    toast.success(t("subscription.messageCopied") || "Message copied to clipboard!");
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleShareLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(linkedinUrl, "_blank", "width=600,height=400");
    toast.success(t("socialShare.openingLinkedIn") || "Opening LinkedIn...");
  };

  const handleShareFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
    toast.success(t("socialShare.openingFacebook") || "Opening Facebook...");
  };

  const handleShareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
    toast.success(t("socialShare.openingTwitter") || "Opening Twitter...");
  };

  const handleShareWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage + " " + window.location.href)}`;
    window.open(whatsappUrl, "_blank");
    toast.success(t("socialShare.openingWhatsApp") || "Opening WhatsApp...");
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-lg border border-amber-100">
      {/* Title */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
          <Share2 className="w-5 h-5 text-amber-600" />
          {t("subscription.shareTitle") || "Share Your Success"}
        </h4>
        <p className="text-sm text-muted-foreground">
          {t("subscription.shareDescription") || "Tell your network about this valuable resource"}
        </p>
      </div>

      {/* Message Editor */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-foreground mb-3">
          {t("subscription.customizeShare") || "Customize Your Message"}
        </label>
        <textarea
          value={shareMessage}
          onChange={(e) => setShareMessage(e.target.value)}
          className="w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
          rows={4}
          placeholder={t("subscription.shareMessage") || "Enter your share message"}
        />
        <p className="text-xs text-muted-foreground mt-2">
          {shareMessage.length} / 280 characters
        </p>
      </div>

      {/* Copy Button */}
      <div className="mb-6">
        <button
          onClick={handleCopyMessage}
          className="w-full px-4 py-3 bg-amber-100 text-amber-900 font-semibold rounded-lg hover:bg-amber-200 transition-colors flex items-center justify-center gap-2"
        >
          {isCopied ? (
            <>
              <Check className="w-5 h-5" />
              {t("subscription.messageCopied") || "Copied!"}
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              {t("subscription.copyMessage") || "Copy Message"}
            </>
          )}
        </button>
      </div>

      {/* Social Share Buttons */}
      <div>
        <p className="text-sm font-semibold text-foreground mb-4">
          {t("subscription.shareOn") || "Share on"}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* LinkedIn */}
          <button
            onClick={handleShareLinkedIn}
            className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all flex items-center justify-center gap-2 font-semibold text-blue-700"
          >
            <Linkedin className="w-5 h-5" />
            <span className="hidden sm:inline">{t('socialShare.platformLinkedIn') || 'LinkedIn'}</span>
          </button>

          {/* Facebook */}
          <button
            onClick={handleShareFacebook}
            className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all flex items-center justify-center gap-2 font-semibold text-blue-700"
          >
            <Facebook className="w-5 h-5" />
            <span className="hidden sm:inline">{t('socialShare.platformFacebook') || 'Facebook'}</span>
          </button>

          {/* Twitter */}
          <button
            onClick={handleShareTwitter}
            className="p-3 bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200 rounded-lg hover:from-sky-100 hover:to-sky-200 transition-all flex items-center justify-center gap-2 font-semibold text-sky-700"
          >
            <Twitter className="w-5 h-5" />
            <span className="hidden sm:inline">{t('socialShare.platformTwitter') || 'Twitter'}</span>
          </button>

          {/* WhatsApp */}
          <button
            onClick={handleShareWhatsApp}
            className="p-3 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg hover:from-green-100 hover:to-green-200 transition-all flex items-center justify-center gap-2 font-semibold text-green-700"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">{t('socialShare.platformWhatsApp') || 'WhatsApp'}</span>
          </button>
        </div>
      </div>

      {/* Info Message */}
      <p className="text-xs text-muted-foreground mt-6 p-3 bg-amber-50 rounded-lg">
        💡 {t("subscription.shareDescription") || "Tip: Customize your message to make it more personal and increase engagement with your network."}
      </p>
    </div>
  );
}
