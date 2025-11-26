import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const phone = t('footer.phone');
  const email = t('footer.email');

  const normalizedPhoneHref = `tel:${phone.replace(/[^+\d]/g, '')}`;
  const emailHref = `mailto:${email}`;

  return (
    <footer id="contact" className="bg-teal text-primary-foreground py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('footer.contact')}</h3>
            <div className="space-y-2 text-lg">
              <p>{t('footer.address')}</p>
              <p>{t('footer.city')}</p>
              <p className="mt-4">
                <a href={normalizedPhoneHref} className="underline underline-offset-4">
                  {phone}
                </a>
              </p>
              <p>
                <a href={emailHref} className="underline underline-offset-4">
                  {email}
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4 md:text-right">
            <p className="text-sm md:text-base text-primary-foreground/80">
              {t('footer.touristTaxNote')}
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-primary-foreground/80">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
