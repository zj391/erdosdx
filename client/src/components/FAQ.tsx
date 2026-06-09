import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'moq-1',
    category: 'Minimum Order Quantity (MOQ)',
    question: 'What is the minimum order quantity (MOQ) for DONGXIAO® products?',
    answer: 'Our MOQ is very flexible and buyer-friendly. For most products, we accept orders as low as 100 pieces per design. For larger orders (1,000+ pieces), we can offer better pricing and customization options. We also welcome smaller trial orders to test our quality before committing to larger volumes.',
  },
  {
    id: 'moq-2',
    category: 'Minimum Order Quantity (MOQ)',
    question: 'Can I order a mix of different products in a single order?',
    answer: 'Yes, absolutely! You can mix different product categories and colors in a single order as long as the total quantity meets our MOQ requirements. This flexibility allows you to diversify your product offerings without placing multiple orders.',
  },
  {
    id: 'moq-3',
    category: 'Minimum Order Quantity (MOQ)',
    question: 'Do you offer volume discounts?',
    answer: 'Yes, we provide tiered pricing based on order volume. Larger orders (500+ pieces) receive better unit prices. We also offer special pricing for long-term partnerships and repeat customers. Please contact our sales team for a customized quote based on your specific requirements.',
  },
  {
    id: 'sampling-1',
    category: 'Sampling & Lead Time',
    question: 'How long does it take to produce samples?',
    answer: 'We offer fast sampling turnaround of 7-10 business days. This allows you to quickly test our quality and make market decisions. Sample production can be expedited for urgent requests. Once you approve the samples, bulk production typically takes 30-45 days depending on order size and complexity.',
  },
  {
    id: 'sampling-2',
    category: 'Sampling & Lead Time',
    question: 'Are samples free or do I need to pay for them?',
    answer: 'We provide free samples for first-time customers to demonstrate our quality. This is our commitment to building trust with international buyers. For subsequent orders, sample costs may apply but are typically deducted from your first bulk order. We also offer expedited sample shipping options.',
  },
  {
    id: 'sampling-3',
    category: 'Sampling & Lead Time',
    question: 'What is the typical production lead time for bulk orders?',
    answer: 'Standard production lead time is 30-45 days after sample approval and payment confirmation. For rush orders, we can accommodate 20-25 day timelines with additional fees. Shipping time varies by destination (typically 15-30 days by sea, 5-10 days by air). We provide regular production updates and tracking information.',
  },
  {
    id: 'payment-1',
    category: 'Payment Methods & Terms',
    question: 'What payment methods do you accept?',
    answer: 'We accept multiple payment methods for your convenience: T/T (Bank Transfer), L/C (Letter of Credit), Western Union, PayPal, and Alibaba Trade Assurance. Bank transfer is our preferred method for large orders. We also work with international payment platforms to ensure secure transactions.',
  },
  {
    id: 'payment-2',
    category: 'Payment Methods & Terms',
    question: 'What are your payment terms?',
    answer: 'Our standard payment terms are 50% deposit upon order confirmation, with the remaining 50% due before shipment. For established customers with good credit history, we can offer more flexible terms such as 30% deposit with 70% due before shipment. We also support Letter of Credit (L/C) for large orders.',
  },
  {
    id: 'payment-3',
    category: 'Payment Methods & Terms',
    question: 'Do you offer credit terms for established customers?',
    answer: 'Yes, we value long-term partnerships. For customers with established trading history and good payment records, we can discuss flexible payment arrangements including extended payment terms (Net 30/60/90 days). Please contact our sales team to discuss your specific requirements and credit terms.',
  },
  {
    id: 'payment-4',
    category: 'Payment Methods & Terms',
    question: 'Is there a currency preference for payments?',
    answer: 'We primarily quote in USD for international orders, but we can also accommodate quotes in EUR, GBP, CNY, and other major currencies. Payment can be made in USD or CNY via bank transfer. Currency conversion rates are based on current market rates at the time of payment.',
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(faqItems.map((item) => item.category)));

  const filteredItems = selectedCategory
    ? faqItems.filter((item) => item.category === selectedCategory)
    : faqItems;

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="text-accent" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products, ordering process, and payment terms. Can't find what you're looking for? Contact our team directly.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-accent text-accent-foreground'
                : 'bg-card border border-border text-foreground hover:border-accent'
            }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border border-border text-foreground hover:border-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors"
            >
              <button
                onClick={() => toggleExpanded(item.id)}
                className="w-full px-6 py-4 flex items-start justify-between hover:bg-muted/50 transition-colors text-left"
              >
                <div className="flex-1">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-accent flex-shrink-0 ml-4 transition-transform ${
                    expandedId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === item.id && (
                <div className="px-6 py-4 border-t border-border bg-muted/30">
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-card rounded-lg border border-border p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our B2B specialists are ready to help you with custom requirements, bulk pricing, and partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8615661853999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-[#C9A227] transition-colors inline-flex items-center justify-center gap-2"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:dongxiaocashmere@erdosdx.com"
              className="px-8 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors inline-flex items-center justify-center"
            >
              Email: dongxiaocashmere@erdosdx.com
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">✓</div>
            <h4 className="font-semibold text-foreground mb-2">23+ Years Experience</h4>
            <p className="text-sm text-muted-foreground">Trusted by global brands since 2002</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">✓</div>
            <h4 className="font-semibold text-foreground mb-2">ISO Certified</h4>
            <p className="text-sm text-muted-foreground">Quality assured with international standards</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">✓</div>
            <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
            <p className="text-sm text-muted-foreground">Responsive team ready to assist</p>
          </div>
        </div>
      </div>
    </section>
  );
}
