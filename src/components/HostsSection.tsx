import { useTranslation } from 'react-i18next';

const HostsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="hosts" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          {t('hosts.title')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
          {t('hosts.subtitle')}
        </p>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              {t('hosts.names')}
            </h3>
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              {t('hosts.role')}
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              {t('hosts.bio')}
            </p>
          </div>

          <div className="space-y-4 md:text-right">
            <p className="text-sm font-semibold text-teal">
              {t('hosts.rating')}
            </p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>{t('hosts.born')}</p>
              <p>{t('hosts.work')}</p>
              <p>{t('hosts.lives')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostsSection;
