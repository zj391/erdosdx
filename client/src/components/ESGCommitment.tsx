import { useTranslation } from 'react-i18next';
import { Leaf, Heart, Zap, Globe, Droplet, Users } from 'lucide-react';

export default function ESGCommitment() {
  const { t } = useTranslation();

  const esgPillars = [
    {
      icon: Leaf,
      title: t('esgCommitment.environmental'),
      description: t('esgCommitment.environmentalDesc'),
      details: [
        t('esgCommitment.environmentalDetails.circularWater'),
        t('esgCommitment.environmentalDetails.plantDyes'),
        t('esgCommitment.environmentalDetails.carbonNeutral'),
        t('esgCommitment.environmentalDetails.renewableEnergy'),
      ],
    },
    {
      icon: Heart,
      title: t('esgCommitment.social'),
      description: t('esgCommitment.socialDesc'),
      details: [
        t('esgCommitment.socialDetails.fairWages'),
        t('esgCommitment.socialDetails.bsci'),
        t('esgCommitment.socialDetails.wellness'),
        t('esgCommitment.socialDetails.community'),
      ],
    },
    {
      icon: Zap,
      title: t('esgCommitment.governance'),
      description: t('esgCommitment.governanceDesc'),
      details: [
        t('esgCommitment.governanceDetails.iso9001'),
        t('esgCommitment.governanceDetails.traceability'),
        t('esgCommitment.governanceDetails.audits'),
        t('esgCommitment.governanceDetails.ethical'),
      ],
    },
  ];

  const sustainabilityMetrics = [
    {
      icon: Droplet,
      metric: '40%',
      label: t('esgCommitment.waterReduction'),
      description: t('esgCommitment.waterReductionDesc'),
    },
    {
      icon: Leaf,
      metric: '100%',
      label: t('esgCommitment.ethicalSourcing'),
      description: t('esgCommitment.ethicalSourcingDesc'),
    },
    {
      icon: Users,
      metric: '500+',
      label: t('esgCommitment.fairTradeJobs'),
      description: t('esgCommitment.fairTradeJobsDesc'),
    },
    {
      icon: Globe,
      metric: '7',
      label: t('esgCommitment.certifications'),
      description: t('esgCommitment.certificationsDesc'),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-accent text-sm uppercase tracking-widest font-semibold mb-4">{t('esgCommitment.tagline')}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('esgCommitment.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('esgCommitment.description')}
          </p>
        </div>

        {/* ESG Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {esgPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-card rounded-lg border border-border p-8 hover:border-accent transition-colors">
                <Icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground mb-6">{pillar.description}</p>
                <ul className="space-y-3">
                  {pillar.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-foreground text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Sustainability Metrics */}
        <div className="bg-card rounded-lg border border-border p-12 mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{t('esgCommitment.impactByNumbers')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-accent mb-2">{item.metric}</div>
                  <div className="font-semibold text-foreground mb-1">{item.label}</div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications & Standards */}
        <div className="bg-muted rounded-lg p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{t('esgCommitment.certifiedVerified')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t('esgCommitment.goodCashmereStandard')}</h4>
                <p className="text-sm text-muted-foreground">{t('esgCommitment.goodCashmereStandardDesc')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t('esgCommitment.oekoTex')}</h4>
                <p className="text-sm text-muted-foreground">{t('esgCommitment.oekoTexDesc')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t('esgCommitment.bsci')}</h4>
                <p className="text-sm text-muted-foreground">{t('esgCommitment.bsciDesc')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t('esgCommitment.iso14001')}</h4>
                <p className="text-sm text-muted-foreground">{t('esgCommitment.iso14001Desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('esgCommitment.joinUs')}
          </p>
          <a
            href="https://wa.me/8615661853999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-[#C9A227] transition-colors"
          >
            {t('esgCommitment.learnMore')}
          </a>
        </div>
      </div>
    </section>
  );
}