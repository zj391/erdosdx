import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';

interface InquiryFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
  productCategory: string;
  quantity: string;
  specifications: string;
  message: string;
}

export default function InquiryForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<InquiryFormData>({
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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const productCategories = [
    'Cashmere Sweaters',
    'Cashmere Scarves & Shawls',
    'Cashmere Blankets',
    'Cashmere Socks',
    'Cashmere Knee Pads',
    'Cashmere Gloves',
    'Cashmere Waist Protectors',
    'Cashmere Pillows & Accessories',
    'Other',
  ];

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Japan',
    'South Korea',
    'China',
    'India',
    'Australia',
    'Brazil',
    'Mexico',
    'Other',
  ];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = t('inquiry.form.errors.companyNameRequired');
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = t('inquiry.form.errors.contactNameRequired');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('inquiry.form.errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('inquiry.form.errors.emailInvalid');
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t('inquiry.form.errors.phoneRequired');
    }
    if (!formData.country) {
      newErrors.country = t('inquiry.form.errors.countryRequired');
    }
    if (!formData.productCategory) {
      newErrors.productCategory = t('inquiry.form.errors.productCategoryRequired');
    }
    if (!formData.quantity.trim()) {
      newErrors.quantity = t('inquiry.form.errors.quantityRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare email content
      const emailContent = `
New Product Inquiry from DONGXIAO® CASHMERE Website

COMPANY INFORMATION:
Company Name: ${formData.companyName}
Contact Person: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}

PRODUCT INQUIRY:
Product Category: ${formData.productCategory}
Quantity: ${formData.quantity}
Specifications: ${formData.specifications || 'Not specified'}

MESSAGE:
${formData.message}

---
This inquiry was submitted through the DONGXIAO® CASHMERE website inquiry form.
      `;

      // Send email via mailto (for client-side, we'll use WhatsApp as fallback)
      const whatsappMessage = `Hello! I'm interested in your products.\n\nCompany: ${formData.companyName}\nContact: ${formData.contactName}\nProduct: ${formData.productCategory}\nQuantity: ${formData.quantity}\n\nPlease contact me at ${formData.email} or ${formData.phone}`;

      // Try to send via email first (would need backend in production)
      const mailtoLink = `mailto:dongxiaocashmere@erdosdx.com?subject=Product Inquiry from ${encodeURIComponent(formData.companyName)}&body=${encodeURIComponent(emailContent)}`;

      // Open email client
      window.location.href = mailtoLink;

      // Also offer WhatsApp option
      setTimeout(() => {
        const whatsappLink = `https://wa.me/8615661853999?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
      }, 500);

      setSubmitStatus('success');
      setSubmitMessage(t('inquiry.form.successMessage'));

      // Reset form
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

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(t('inquiry.form.errorMessage'));
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-lg border border-border p-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">{t('inquiry.form.title')}</h2>
        <p className="text-muted-foreground mb-8">
          {t('inquiry.form.subtitle')}
        </p>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-green-800">{submitMessage}</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-red-800">{submitMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information Section */}
          <div className="border-b border-border pb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('inquiry.form.companyInfo')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('inquiry.form.companyName')}
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  placeholder={t('inquiry.form.companyNamePlaceholder')}
                />
                {errors.companyName && (
                  <p className="text-red-600 text-sm mt-1">{errors.companyName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('inquiry.form.contactName')}
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  placeholder={t('inquiry.form.contactNamePlaceholder')}
                />
                {errors.contactName && (
                  <p className="text-red-600 text-sm mt-1">{errors.contactName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('inquiry.form.emailAddress')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  placeholder={t('inquiry.form.emailPlaceholder')}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('inquiry.form.phoneNumber')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  placeholder={t('inquiry.form.phonePlaceholder')}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('inquiry.form.country')}
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                >
                  <option value="">{t('inquiry.form.selectCountry')}</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-red-600 text-sm mt-1">{errors.country}</p>
                )}
              </div>
            </div>
          </div>

          {/* Product Inquiry Section */}
          <div className="border-b border-border pb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('inquiry.form.productInquiry')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('inquiry.form.productCategory')}
                </label>
                <select
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                >
                  <option value="">{t('inquiry.form.selectProductCategory')}</option>
                  {productCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.productCategory && (
                  <p className="text-red-600 text-sm mt-1">{errors.productCategory}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('inquiry.form.quantityRequired')}
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  placeholder={t('inquiry.form.quantityPlaceholder')}
                />
                {errors.quantity && (
                  <p className="text-red-600 text-sm mt-1">{errors.quantity}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('inquiry.form.specifications')}
                </label>
                <input
                  type="text"
                  name="specifications"
                  value={formData.specifications}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  placeholder={t('inquiry.form.specificationsPlaceholder')}
                />
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t('inquiry.form.additionalMessage')}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground resize-none"
              placeholder={t('inquiry.form.messagePlaceholder')}
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-[#C9A227] transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                  {t('inquiry.form.submitting')}
                </>
              ) : (
                <>
                  <Send size={20} />
                  {t('inquiry.form.submitInquiry')}
                </>
              )}
            </button>
            <a
              href="https://wa.me/8615661853999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2"
            >
              {t('inquiry.form.whatsApp')}
            </a>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            {t('inquiry.form.requiredFields')}
          </p>
        </form>
      </div>

      {/* Contact Information Card */}
      <div className="mt-8 bg-card rounded-lg border border-border p-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">{t('inquiry.form.otherWays')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">{t('inquiry.form.email')}</p>
            <a href="mailto:dongxiaocashmere@erdosdx.com" className="text-accent hover:text-[#C9A227] font-medium">
              dongxiaocashmere@erdosdx.com
            </a>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">{t('inquiry.form.whatsApp')}</p>
            <a href="https://wa.me/8615661853999" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-[#C9A227] font-medium">
              +86 156 6185 3999
            </a>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">{t('inquiry.form.responseTime')}</p>
            <p className="text-foreground font-medium">{t('inquiry.form.within24hours')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}