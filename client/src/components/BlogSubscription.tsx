import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Check, Gift, Zap } from "lucide-react";
import { toast } from "sonner";
import SubscriptionShareEditor from "./SubscriptionShareEditor";

export default function BlogSubscription() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!email.trim()) {
      toast.error(t("subscription.errors.emailRequired") || "Email is required");
      return;
    }

    if (!validateEmail(email)) {
      toast.error(t("subscription.errors.invalidEmail") || "Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call (since this is a static frontend)
      // In a real application, this would send data to a backend service
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      setIsSubmitted(true);
      setSubmittedEmail(email);
      setEmail("");
      toast.success(t("subscription.success") || "Successfully subscribed to our blog!");

      // Reset form after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    } catch (error) {
      toast.error(t("subscription.errors.submitFailed") || "Failed to subscribe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-28 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 border-y border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Main Content */}
          {!isSubmitted ? (
            <>
              {/* Header with Icon */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-200 rounded-full blur-xl opacity-60 animate-pulse" />
                    <div className="relative p-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full">
                      <Mail className="w-8 h-8 text-amber-700" />
                    </div>
                  </div>
                </div>

                {/* Main Headline */}
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
                  {t("subscription.incentive") || "Subscribe Now & Get Free Latest Industry Report"}
                </h2>

                {/* Subheading */}
                <p className="text-xl text-muted-foreground mb-6">
                  {t("subscription.incentiveDescription") || "Exclusive access to our comprehensive market analysis and trend forecasts"}
                </p>

                {/* Description */}
                <p className="text-lg text-foreground/70 mb-8">
                  {t("subscription.description") || "Get the latest cashmere care tips, styling guides, and industry insights delivered to your inbox"}
                </p>
              </div>

              {/* Bonus Badge */}
              <div className="mb-8 flex justify-center">
                <div className="inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-amber-200 rounded-full shadow-sm">
                  <Gift className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-amber-900">
                    {t("subscription.bonus") || "Free Bonus: Latest Industry Report"}
                  </span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("subscription.placeholder") || "Enter your email address"}
                    className="flex-1 px-5 py-4 bg-white border-2 border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-lg"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white font-bold rounded-lg hover:from-amber-800 hover:to-amber-900 disabled:from-amber-600 disabled:to-amber-600 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {t("subscription.subscribing") || "Subscribing..."}
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        {t("subscription.subscribe") || "Subscribe"}
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy Notice */}
                <p className="text-center text-sm text-muted-foreground">
                  {t("subscription.privacy") || "We respect your privacy. Unsubscribe at any time."}
                </p>
              </form>

              {/* Features/Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg border border-amber-100 text-center">
                  <div className="text-2xl font-bold text-amber-700 mb-1">📊</div>
                  <p className="text-sm font-semibold text-foreground">{t("subscription.benefits.marketAnalysis")}</p>
                  <p className="text-xs text-muted-foreground">{t("subscription.benefits.marketAnalysisDesc")}</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-amber-100 text-center">
                  <div className="text-2xl font-bold text-amber-700 mb-1">📈</div>
                  <p className="text-sm font-semibold text-foreground">{t("subscription.benefits.trendForecasts")}</p>
                  <p className="text-xs text-muted-foreground">{t("subscription.benefits.trendForecastsDesc")}</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-amber-100 text-center">
                  <div className="text-2xl font-bold text-amber-700 mb-1">✉️</div>
                  <p className="text-sm font-semibold text-foreground">{t("subscription.benefits.weeklyUpdates")}</p>
                  <p className="text-xs text-muted-foreground">{t("subscription.benefits.weeklyUpdatesDesc")}</p>
                </div>
              </div>
            </>
          ) : (
            // Success Message
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-200 rounded-full blur-xl opacity-60 animate-pulse" />
                  <div className="relative p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                </div>
              </div>

              <h3 className="text-4xl font-display font-bold text-foreground mb-3">
                {t("subscription.successTitle") || "Subscription Confirmed!"}
              </h3>

              <p className="text-xl text-muted-foreground mb-6">
                {t("subscription.successMessage") || "Thank you for subscribing. You'll receive our latest articles and updates in your inbox. Your free industry report is on the way!"}
              </p>

              {/* Success Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-green-50 border-2 border-green-200 rounded-full mb-8">
                <Gift className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-900">
                  {t("subscription.bonusMessage") || "Check your email for your free industry report!"}
                </span>
              </div>

              {/* Share Editor */}
              <SubscriptionShareEditor 
                defaultMessage={t("subscription.shareMessage") || ""}
                email={submittedEmail}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}