import { useTranslation } from 'react-i18next';
import hostsPhoto from '@/assets/hosts.jpg';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t('about.title')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {t('about.description')}
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-6 rounded-3xl border border-border bg-muted/20 p-6">
          <img
            src={hostsPhoto}
            alt={t('about.hostsAlt')}
            className="w-24 h-24 rounded-full object-cover border border-border shadow-sm"
          />
          <div className="text-center md:text-left space-y-2">
            <p className="text-base md:text-lg text-foreground">
              {t('about.snippet')}
            </p>
            <a
              href="#hosts"
              className="inline-flex items-center gap-1 text-teal font-semibold underline underline-offset-4"
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
