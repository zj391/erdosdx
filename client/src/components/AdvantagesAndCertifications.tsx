import { useTranslation } from 'react-i18next';
import { Award, Zap, Users, Leaf, Globe, TrendingUp, Shield } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  description: string;
  icon: string;
  year: string;
  benefit: string;
}

const certifications: Certification[] = [
  {
    id: 'iso9001',
    name: 'ISO 9001',
    description: 'Quality Management System',
    icon: '✓',
    year: '2002',
    benefit: 'Ensures consistent product quality and customer satisfaction',
  },
  {
    id: 'iso14001',
    name: 'ISO 14001',
    description: 'Environmental Management',
    icon: '🌱',
    year: '2005',
    benefit: 'Demonstrates commitment to sustainable and eco-friendly practices',
  },
  {
    id: 'ohsas18001',
    name: 'OHSAS 18001',
    description: 'Occupational Health & Safety',
    icon: '🛡️',
    year: '2008',
    benefit: 'Protects worker safety and maintains healthy working conditions',
  },
  {
    id: 'enms',
    name: 'EnMS',
    description: 'Energy Management System',
    icon: '⚡',
    year: '2010',
    benefit: 'Reduces energy consumption and operational costs',
  },
  {
    id: 'oekotext',
    name: 'OEKO-TEX® STANDARD 100',
    description: 'Textile Safety Standard',
    icon: '👶',
    year: '2012',
    benefit: 'Safe for baby skin - highest textile safety certification',
  },
  {
    id: 'bsci',
    name: 'BSCI',
    description: 'Business Social Compliance Initiative',
    icon: '🤝',
    year: '2015',
    benefit: 'Ensures ethical labor practices and social responsibility',
  },
  {
    id: 'goodcashmere',
    name: 'THE GOOD CASHMERE STANDARD',
    description: 'by AbTF (Association of Bretton Woods)',
    icon: '⭐',
    year: '2018',
    benefit: 'Premium cashmere quality and traceability standard',
  },
];

const advantages = [
  {
    id: 'quality',
    icon: Award,
    title: '23+ Years Excellence',
    description: 'Over two decades of proven expertise in cashmere production and global B2B supply',
  },
  {
    id: 'capacity',
    icon: TrendingUp,
    title: 'Massive Production Capacity',
    description: '1,200+ tons cashmere, 5M knitwear pieces, 2M scarves annually',
  },
  {
    id: 'flexibility',
    icon: Zap,
    title: 'Flexible MOQ',
    description: 'Low minimum order quantities (100 pcs) perfect for startups and small brands',
  },
  {
    id: 'sampling',
    icon: Shield,
    title: 'Fast Sampling',
    description: '7-10 days sampling with free samples for first-time customers',
  },
  {
    id: 'global',
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving 50+ countries with trusted partnerships in Japan, Korea, Europe, USA',
  },
  {
    id: 'sustainability',
    icon: Leaf,
    title: 'Sustainable Practices',
    description: 'ISO 14001 certified with commitment to environmental responsibility',
  },
];

export default function AdvantagesAndCertifications() {
  const { t } = useTranslation();

  return (
    <>
      {/* Advantages Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('advantagesAndCertifications.whyChooseTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('advantagesAndCertifications.whyChooseSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage) => {
              const IconComponent = advantage.icon;
              return (
                <div
                  key={advantage.id}
                  className="bg-card rounded-lg border border-border p-8 hover:border-accent transition-colors group"
                >
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="text-accent" size={28} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{t(`advantagesAndCertifications.advantages.${advantage.id}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`advantagesAndCertifications.advantages.${advantage.id}.description`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="text-accent" size={36} />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t('advantagesAndCertifications.certificationsTitle')}</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('advantagesAndCertifications.certificationsSubtitle')}
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-background rounded-lg border border-border p-6 hover:border-accent transition-all hover:shadow-lg group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cert.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-1">{t(`advantagesAndCertifications.certifications.${cert.id}.name`)}</h3>
                <p className="text-sm text-accent font-semibold mb-3">{t(`advantagesAndCertifications.certifications.${cert.id}.description`)}</p>
                <p className="text-xs text-muted-foreground mb-3">{t('advantagesAndCertifications.certified')} {cert.year}</p>
                <p className="text-sm text-foreground leading-relaxed">{t(`advantagesAndCertifications.certifications.${cert.id}.benefit`)}</p>
              </div>
            ))}
          </div>

          {/* Certification Benefits Summary */}
          <div className="bg-background rounded-lg border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('advantagesAndCertifications.certificationBenefitsTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-accent">✓</span> {t('advantagesAndCertifications.qualityAssurance.title')}
                </h4>
                <p className="text-muted-foreground">
                  {t('advantagesAndCertifications.qualityAssurance.description')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-accent">✓</span> {t('advantagesAndCertifications.safetyCompliance.title')}
                </h4>
                <p className="text-muted-foreground">
                  {t('advantagesAndCertifications.safetyCompliance.description')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-accent">✓</span> {t('advantagesAndCertifications.environmentalResponsibility.title')}
                </h4>
                <p className="text-muted-foreground">
                  {t('advantagesAndCertifications.environmentalResponsibility.description')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-accent">✓</span> {t('advantagesAndCertifications.ethicalPractices.title')}
                </h4>
                <p className="text-muted-foreground">
                  {t('advantagesAndCertifications.ethicalPractices.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">23+</div>
              <p className="text-lg font-semibold text-foreground mb-1">{t('advantagesAndCertifications.yearsInBusiness.value')}</p>
              <p className="text-muted-foreground">{t('advantagesAndCertifications.yearsInBusiness.since')}</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">7</div>
              <p className="text-lg font-semibold text-foreground mb-1">{t('advantagesAndCertifications.industryCertifications.value')}</p>
              <p className="text-muted-foreground">{t('advantagesAndCertifications.industryCertifications.subtitle')}</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <p className="text-lg font-semibold text-foreground mb-1">{t('advantagesAndCertifications.countriesServed.value')}</p>
              <p className="text-muted-foreground">{t('advantagesAndCertifications.countriesServed.subtitle')}</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">1,200+</div>
              <p className="text-lg font-semibold text-foreground mb-1">{t('advantagesAndCertifications.tonsAnnually.value')}</p>
              <p className="text-muted-foreground">{t('advantagesAndCertifications.tonsAnnually.subtitle')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}