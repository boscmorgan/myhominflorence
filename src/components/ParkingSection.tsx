import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CalendarDays, MapPin, ShieldCheck, Wallet2 } from 'lucide-react';

const ParkingSection = () => {
  const { t } = useTranslation();
  const contactEmail = 'lorenzoelorenzo@libero.it';

  const benefits = useMemo(
    () => [
      { icon: MapPin, label: t('parking.items.location') },
      { icon: Wallet2, label: t('parking.items.pricing') },
      { icon: CalendarDays, label: t('parking.items.booking') },
    ],
    [t],
  );

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
          {t('parking.title')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-5 sm:mb-8 max-w-3xl mx-auto">
          {t('parking.subtitle')}
        </p>

        <div className="rounded-2xl sm:rounded-3xl bg-background border border-border/60 p-4 sm:p-6 md:p-10 shadow-lg">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
                {t('parking.intro')}
              </p>

              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.label}
                      className="flex items-start gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-border/60 bg-muted/10 p-3 sm:p-4"
                    >
                      <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-teal/10 text-teal flex-shrink-0">
                        <Icon size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={1.6} />
                      </span>
                      <p className="text-xs sm:text-sm md:text-base text-foreground">{benefit.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-muted/30 text-[0.65rem] sm:text-xs font-medium">
                  {t('parking.nearbyPlaces.michelangelo')}
                </span>
                <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-muted/30 text-[0.65rem] sm:text-xs font-medium">
                  {t('parking.nearbyPlaces.boboli')}
                </span>
                <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-muted/30 text-[0.65rem] sm:text-xs font-medium">
                  {t('parking.nearbyPlaces.pitti')}
                </span>
                <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-muted/30 text-[0.65rem] sm:text-xs font-medium">
                  {t('parking.nearbyPlaces.uffizi')}
                </span>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-border/60 bg-muted/10 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
              <div>
                <p className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {t('parking.tableTitle')}
                </p>
                <dl className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <div className="flex flex-col gap-1 rounded-xl sm:rounded-2xl bg-muted/20 p-3 sm:p-4 sm:flex-row sm:items-center sm:justify-between sm:bg-transparent sm:p-0">
                    <dt className="font-semibold text-foreground">{t('parking.daily')}</dt>
                    <dd className="text-base sm:text-lg font-semibold">{t('parking.dailyPrice')}</dd>
                  </div>
                  <div className="flex flex-col gap-1 border-t border-border/60 pt-3 sm:pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <dt className="font-semibold text-foreground">{t('parking.weekly')}</dt>
                    <dd className="text-base sm:text-lg font-semibold">{t('parking.weeklyPrice')}</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-xl sm:rounded-2xl bg-background border border-border/40 p-3 sm:p-4 flex items-start gap-2.5 sm:gap-3">
                <ShieldCheck className="h-7 w-7 sm:h-9 sm:w-9 text-teal flex-shrink-0" strokeWidth={1.6} />
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {t('parking.contact')}
                </p>
              </div>

              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex w-full items-center justify-center rounded-xl sm:rounded-2xl bg-teal px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition hover:bg-teal/90 active:scale-[0.98]"
              >
                {t('parking.contactCta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkingSection;
