import { useTranslation } from 'react-i18next';

const ParkingSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t('parking.title')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          {t('parking.subtitle')}
        </p>

        <div className="rounded-3xl bg-background border border-border p-6 md:p-8 space-y-6">
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            {t('parking.intro')}
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 rounded-2xl bg-muted/20 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                {t('parking.tableTitle')}
              </h3>
              <dl className="space-y-3 text-sm md:text-base">
                <div className="flex items-center justify-between">
                  <dt className="font-medium">{t('parking.daily')}</dt>
                  <dd>{t('parking.dailyPrice')}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="font-medium">{t('parking.weekly')}</dt>
                  <dd>{t('parking.weeklyPrice')}</dd>
                </div>
              </dl>
            </div>

            <div className="flex-1 rounded-2xl bg-muted/20 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                {t('parking.bulletsTitle')}
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-foreground">
                <li>{t('parking.items.location')}</li>
                <li>{t('parking.items.pricing')}</li>
                <li>{t('parking.items.booking')}</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted/30 text-xs font-medium">
              {t('parking.nearbyPlaces.michelangelo')}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted/30 text-xs font-medium">
              {t('parking.nearbyPlaces.boboli')}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted/30 text-xs font-medium">
              {t('parking.nearbyPlaces.pitti')}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted/30 text-xs font-medium">
              {t('parking.nearbyPlaces.uffizi')}
            </span>
          </div>

          <p className="text-sm md:text-base text-muted-foreground">
            {t('parking.contact')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParkingSection;
