import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-teal text-primary-foreground py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('footer.contact')}</h3>
            <div className="space-y-2 text-lg">
              <p>{t('footer.address')}</p>
              <p>{t('footer.city')}</p>
              <p className="mt-4">{t('footer.phone')}</p>
              <p>{t('footer.email')}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-end">
            <p className="text-2xl md:text-3xl font-bold">
              {t('footer.tagline')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
