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
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t('parking.title')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          {t('parking.subtitle')}
        </p>

        <div className="rounded-3xl bg-background border border-border/60 p-6 md:p-10 shadow-lg">
          <div className="grid gap-8 md:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                {t('parking.intro')}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.label}
                      className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/10 p-4"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal">
                        <Icon size={18} strokeWidth={1.6} />
                      </span>
                      <p className="text-sm md:text-base text-foreground">{benefit.label}</p>
                    </div>
                  );
                })}
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
            </div>

            <div className="rounded-2xl border border-border/60 bg-muted/10 p-6 flex flex-col gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {t('parking.tableTitle')}
                </p>
                <dl className="mt-4 space-y-4 text-base">
                  <div className="flex items-center justify-between">
                    <dt className="font-semibold text-foreground">{t('parking.daily')}</dt>
                    <dd className="text-lg font-semibold">{t('parking.dailyPrice')}</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/60 pt-4">
                    <dt className="font-semibold text-foreground">{t('parking.weekly')}</dt>
                    <dd className="text-lg font-semibold">{t('parking.weeklyPrice')}</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl bg-background border border-border/40 p-4 flex items-start gap-3">
                <ShieldCheck className="h-9 w-9 text-teal" strokeWidth={1.6} />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('parking.contact')}
                </p>
              </div>

              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center rounded-2xl bg-teal px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-teal/90"
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
