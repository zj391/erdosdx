import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function EnhancedInquiryForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    quantity: '',
    specifications: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const productCategories = [
    'Cashmere Sweaters',
    'Cashmere Scarves & Shawls',
    'Cashmere Blankets',
    'Cashmere Socks',
    'Cashmere Accessories',
    'Custom Products',
    'Other',
  ];

  const countries = [
    'United States',
    'United Kingdom',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Canada',
    'Australia',
    'Japan',
    'South Korea',
    'China',
    'Other',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.companyName || !formData.email || !formData.productCategory) {
      toast.error(t('inquiry.enhanced.errors.fillRequired'));
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Create WhatsApp message
      const whatsappMessage = `
Hi DONGXIAO® Team,

I'm interested in your cashmere products.

**Company Details:**
- Company: ${formData.companyName}
- Contact: ${formData.contactName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Country: ${formData.country}

**Product Inquiry:**
- Category: ${formData.productCategory}
- Estimated Quantity: ${formData.quantity}
- Specifications: ${formData.specifications}

**Additional Message:**
${formData.message}

Please provide a quotation and more information about your products.

Thank you!
      `.trim();

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/8615661853999?text=${encodedMessage}`;

      // Show success message
      setSubmitted(true);
      toast.success(t('inquiry.enhanced.successToast'));

      // Redirect to WhatsApp after 2 seconds
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          country: '',
          productCategory: '',
          quantity: '',
          specifications: '',
          message: '',
        });
        setSubmitted(false);
      }, 2000);
    } catch (error) {
      toast.error(t('inquiry.enhanced.errors.submitFailed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-lg border border-border p-8 text-center">
        <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">{t('inquiry.enhanced.thankYouTitle')}</h3>
        <p className="text-muted-foreground mb-4">
          {t('inquiry.enhanced.thankYouMessage')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg border border-border p-8">
      <h3 className="text-2xl font-bold text-foreground mb-6">{t('inquiry.enhanced.title')}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Company Name */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            {t('inquiry.enhanced.companyName')}<span className="text-accent">{t('inquiry.enhanced.requiredField')}</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder={t('inquiry.enhanced.companyNamePlaceholder')}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        {/* Contact Name */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">{t('inquiry.enhanced.contactName')}</label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            placeholder={t('inquiry.enhanced.contactNamePlaceholder')}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            {t('inquiry.enhanced.email')} <span className="text-accent">{t('inquiry.enhanced.requiredField')}</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('inquiry.enhanced.emailPlaceholder')}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">{t('inquiry.enhanced.phone')}</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t('inquiry.enhanced.phonePlaceholder')}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">{t('inquiry.enhanced.country')}</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">{t('inquiry.enhanced.selectCountry')}</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Product Category */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            {t('inquiry.enhanced.productCategory')} <span className="text-accent">{t('inquiry.enhanced.requiredField')}</span>
          </label>
          <select
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            required
          >
            <option value="">{t('inquiry.enhanced.selectCategory')}</option>
            {productCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">{t('inquiry.enhanced.quantity')}</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder={t('inquiry.enhanced.quantityPlaceholder')}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Specifications */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">{t('inquiry.enhanced.specifications')}</label>
          <input
            type="text"
            name="specifications"
            value={formData.specifications}
            onChange={handleChange}
            placeholder={t('inquiry.enhanced.specificationsPlaceholder')}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-foreground mb-2">{t('inquiry.enhanced.additionalMessage')}</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t('inquiry.enhanced.messagePlaceholder')}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
        />
      </div>

      {/* Info Box */}
      <div className="bg-muted rounded-lg p-4 mb-6 flex gap-3">
        <AlertCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
        <div className="text-sm text-muted-foreground">
          <p className="font-semibold text-foreground mb-1">{t('inquiry.enhanced.quickResponseTitle')}</p>
          <p>{t('inquiry.enhanced.quickResponseDesc')}</p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-[#C9A227] transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
              {t('inquiry.enhanced.submitting')}
            </>
          ) : (
            <>
              <MessageCircle size={18} />
              {t('inquiry.enhanced.submitAndChat')}
            </>
          )}
        </button>
        <a
          href="mailto:dongxiaocashmere@erdosdx.com"
          className="px-8 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-border transition-colors inline-flex items-center gap-2"
        >
          <Mail size={18} />
          {t('inquiry.enhanced.emailUs')}
        </a>
      </div>
    </form>
  );
}