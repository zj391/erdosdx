import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  country: string;
  image: string;
  rating: number;
  textKey: string;
  highlightKey: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Mitchell',
    title: 'Founder & CEO',
    company: 'Luxe Cashmere Co.',
    country: 'United States',
    image: '👩‍💼',
    rating: 5,
    textKey: 'testimonials.testimonial1.text',
    highlightKey: 'testimonials.testimonial1.highlight',
  },
  {
    id: 'testimonial-2',
    name: 'James Richardson',
    title: 'Purchasing Director',
    company: 'European Fashion Retailers Ltd.',
    country: 'United Kingdom',
    image: '👨‍💼',
    rating: 5,
    textKey: 'testimonials.testimonial2.text',
    highlightKey: 'testimonials.testimonial2.highlight',
  },
  {
    id: 'testimonial-3',
    name: 'Maria Schneider',
    title: 'Supply Chain Manager',
    company: 'Nordic Luxury Textiles GmbH',
    country: 'Germany',
    image: '👩‍💼',
    rating: 5,
    textKey: 'testimonials.testimonial3.text',
    highlightKey: 'testimonials.testimonial3.highlight',
  },
];

export default function CustomerTestimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Quote className="text-accent" size={36} />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t('testimonials.title')}</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-lg border border-border p-8 hover:border-accent transition-all hover:shadow-lg flex flex-col"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">
                "{t(testimonial.textKey)}"
              </p>

              {/* Highlight */}
              <div className="bg-accent/10 rounded-lg p-4 mb-6 border border-accent/20">
                <p className="text-sm font-semibold text-accent">{t('testimonials.keyStrength')}</p>
                <p className="text-sm text-foreground">{t(testimonial.highlightKey)}</p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-sm text-accent font-semibold">{testimonial.company}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="bg-card rounded-lg border border-border p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <p className="text-foreground font-semibold mb-1">{t('testimonials.countriesServed')}</p>
              <p className="text-sm text-muted-foreground">{t('testimonials.countriesServedDesc')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-foreground font-semibold mb-1">{t('testimonials.satisfiedClients')}</p>
              <p className="text-sm text-muted-foreground">{t('testimonials.satisfiedClientsDesc')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">99%</div>
              <p className="text-foreground font-semibold mb-1">{t('testimonials.onTimeDelivery')}</p>
              <p className="text-sm text-muted-foreground">{t('testimonials.onTimeDeliveryDesc')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
              <p className="text-foreground font-semibold mb-1">{t('testimonials.averageRating')}</p>
              <p className="text-sm text-muted-foreground">{t('testimonials.averageRatingDesc')}</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-foreground text-background rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">{t('testimonials.joinPartners')}</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {t('testimonials.joinPartnersDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8615661853999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-[#C9A227] transition-colors inline-flex items-center justify-center"
            >
              {t('testimonials.whatsAppUs')}
            </a>
            <a
              href="mailto:dongxiaocashmere@erdosdx.com"
              className="px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors inline-flex items-center justify-center"
            >
              {t('testimonials.emailUs')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
