import { useTranslation } from 'react-i18next';
import hostsPhoto from '@/assets/hosts.jpg';

const HostsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="hosts" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
          {t('hosts.title')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-6 sm:mb-10 max-w-3xl mx-auto">
          {t('hosts.subtitle')}
        </p>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-start">
          <div className="space-y-3 sm:space-y-4 order-2 md:order-1">
            <h3 className="text-lg sm:text-xl font-semibold">
              {t('hosts.names')}
            </h3>
            <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-muted-foreground">
              {t('hosts.role')}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
              {t('hosts.bio')}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 md:text-right order-1 md:order-2">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-border shadow-sm">
              <img
                src={hostsPhoto}
                alt={t('about.hostsAlt')}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-teal">
              {t('hosts.rating')}
            </p>
            <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
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
