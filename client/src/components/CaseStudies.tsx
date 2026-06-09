import { useTranslation } from 'react-i18next';
import { TrendingUp, Users, Zap } from 'lucide-react';

interface CaseStudy {
  id: string;
  brand: string;
  logo: string;
  country: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  testimonial: string;
  contactPerson: string;
  position: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    brand: 'Luxe Nordic',
    logo: '🇸🇪',
    country: 'Sweden',
    industry: 'Premium Fashion Retail',
    challenge:
      'Luxe Nordic needed a reliable supplier for premium cashmere sweaters and scarves to meet growing demand from Scandinavian and European markets. They required consistent quality, fast sampling, and flexible MOQ to test new designs.',
    solution:
      'DONGXIAO® partnered with Luxe Nordic to provide custom cashmere sweaters in multiple gauges (5GG, 7GG, 12GG) with their exclusive color palette. We delivered samples within 10 days and established a production capacity of 50,000 pieces per season. Our ISO 9001 certification and OEKO-TEX® standards aligned perfectly with their premium positioning.',
    results: [
      { metric: 'Sample Turnaround', value: '10 days' },
      { metric: 'Annual Volume', value: '50,000 pieces' },
      { metric: 'Quality Pass Rate', value: '99.5%' },
      { metric: 'Cost Savings', value: '18%' },
    ],
    testimonial:
      'DONGXIAO® has been instrumental in our growth. Their flexibility with MOQ and rapid sampling allowed us to launch 5 new collections in one year. The quality is exceptional, and their team is incredibly responsive. We now source 60% of our cashmere from them.',
    contactPerson: 'Anna Bergström',
    position: 'Purchasing Director',
  },
  {
    id: 'case-2',
    brand: 'Heritage Textiles Co.',
    logo: '🇬🇧',
    country: 'United Kingdom',
    industry: 'Luxury Goods Distribution',
    challenge:
      'Heritage Textiles Co. supplies premium cashmere products to high-end department stores across Europe and North America. They needed a manufacturer capable of handling large orders while maintaining consistent quality and meeting strict delivery schedules.',
    solution:
      'DONGXIAO® became Heritage Textiles Co.\'s primary supplier, handling orders of 100,000+ pieces per shipment. We implemented dedicated production lines for their products, assigned a dedicated account manager, and established a 6-month rolling forecast system. Our 1,200+ tons annual production capacity ensured no supply constraints.',
    results: [
      { metric: 'Order Size', value: '100,000+ pieces' },
      { metric: 'On-Time Delivery', value: '99.8%' },
      { metric: 'Lead Time', value: '35 days' },
      { metric: 'Partnership Duration', value: '5+ years' },
    ],
    testimonial:
      'Working with DONGXIAO® has transformed our supply chain. Their massive production capacity, combined with their commitment to quality, makes them the ideal partner for our scale of operations. We\'ve expanded our product range significantly thanks to their reliability.',
    contactPerson: 'James Richardson',
    position: 'Supply Chain Director',
  },
  {
    id: 'case-3',
    brand: 'Artisan Collective',
    logo: '🇺🇸',
    country: 'United States',
    industry: 'Sustainable Fashion Brand',
    challenge:
      'Artisan Collective is a sustainable fashion brand focused on ethical sourcing and production. They required a supplier with strong environmental credentials, transparent supply chains, and ability to produce small batches of premium cashmere for their direct-to-consumer model.',
    solution:
      'DONGXIAO® met all of Artisan Collective\'s sustainability requirements with ISO 14001 environmental certification, OEKO-TEX® safety standards, and full traceability from Inner Mongolia herders to finished products. We provided custom dyeing options using eco-friendly processes and supported their low-MOQ model (starting at 100 pieces per design).',
    results: [
      { metric: 'Minimum Order', value: '100 pieces' },
      { metric: 'SKU Variety', value: '24 designs/season' },
      { metric: 'Sustainability Score', value: '95/100' },
      { metric: 'Customer Retention', value: '92%' },
    ],
    testimonial:
      'DONGXIAO® shares our commitment to sustainability and ethical practices. Their transparency about sourcing, their environmental certifications, and their willingness to work with small batches made them the perfect partner. Our customers love knowing exactly where their cashmere comes from.',
    contactPerson: 'Sarah Chen',
    position: 'Founder & CEO',
  },
];

export default function CaseStudies() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('caseStudies.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('caseStudies.description')}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Left Side - Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{caseStudy.logo}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">{caseStudy.brand}</h3>
                    <p className="text-muted-foreground">{caseStudy.country}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-accent font-semibold uppercase tracking-wide mb-2">{t('caseStudies.industry')}</p>
                  <p className="text-foreground">{caseStudy.industry}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-bold text-foreground mb-3">{t('caseStudies.theChallenge')}</h4>
                  <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-bold text-foreground mb-3">{t('caseStudies.ourSolution')}</h4>
                  <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
                </div>

                {/* Testimonial */}
                <div className="bg-card rounded-lg border border-border p-6 mb-6">
                  <p className="text-muted-foreground italic mb-4">"{caseStudy.testimonial}"</p>
                  <div>
                    <p className="font-bold text-foreground">{caseStudy.contactPerson}</p>
                    <p className="text-sm text-accent">{caseStudy.position}</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Results */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-card rounded-lg border border-border p-8 sticky top-24">
                  <h4 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
                    <TrendingUp size={28} className="text-accent" />
                    {t('caseStudies.keyResults')}
                  </h4>

                  <div className="space-y-6">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                        <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">{result.metric}</p>
                        <p className="text-3xl font-bold text-accent">{result.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Impact Badge */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <Users size={20} className="text-accent" />
                      <span className="font-semibold text-foreground">{t('caseStudies.longTermPartnership')}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t('caseStudies.longTermPartnershipDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 bg-card rounded-lg border border-border p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">{t('caseStudies.readyToWrite')}</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('caseStudies.readyToWriteDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8615661853999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-[#C9A227] transition-colors inline-flex items-center justify-center gap-2"
            >
              <Zap size={20} />
              {t('caseStudies.startYourProject')}
            </a>
            <a
              href="mailto:dongxiaocashmere@erdosdx.com"
              className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-colors inline-flex items-center justify-center"
            >
              {t('caseStudies.requestFreeConsultation')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}