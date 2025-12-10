import { useTranslation } from 'react-i18next';
import hostsPhoto from '@/assets/hosts.jpg';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
          {t('about.title')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
          {t('about.description')}
        </p>

        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row items-center gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl border border-border bg-muted/20 p-4 sm:p-6">
          <img
            src={hostsPhoto}
            alt={t('about.hostsAlt')}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border border-border shadow-sm"
          />
          <div className="text-center md:text-left space-y-2">
            <p className="text-sm sm:text-base md:text-lg text-foreground">
              {t('about.snippet')}
            </p>
            <a
              href="#hosts"
              className="inline-flex items-center gap-1 text-teal font-semibold underline underline-offset-4 text-sm sm:text-base"
            >
              {t('about.meetHostsLink')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
