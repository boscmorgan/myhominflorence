import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const phonesResult = t('footer.phones', { returnObjects: true }) as string[] | string;
  const phoneList = Array.isArray(phonesResult)
    ? phonesResult
    : phonesResult
      ? [phonesResult]
      : [];
  const email = t('footer.email');
  const whatsappLabel = t('footer.whatsapp');
  const propertyIntro = t('footer.propertyCTA.intro');
  const propertyInvite = t('footer.propertyCTA.invite');
  const propertyConnector = t('footer.propertyCTA.connector');
  const propertyApproachLabel = t('footer.propertyCTA.approachLinkLabel');
  const propertyDeckLabel = t('footer.propertyCTA.deckLinkLabel');
  const approachLink = "https://www.canva.com/design/DAGgSS1Ym1k/8SyOyyiFxmPg-D829_psvg/edit?utm_content=DAGgSS1Ym1k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
  const deckLink = "https://www.canva.com/design/DAGgSVBFAc4/kIzpvEqMjxYVO9eT9WygFw/view?utm_content=DAGgSVBFAc4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h05c240ebf0";
  const whatsappLink = "https://wa.me/393890108370";

  const emailHref = `mailto:${email}`;

  return (
    <footer id="contact" className="bg-teal text-primary-foreground py-10 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-8 sm:gap-10 md:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t('footer.contact')}</h3>
            <div className="space-y-2 text-sm sm:text-base md:text-lg">
              <p>{t('footer.address')}</p>
              <p>{t('footer.city')}</p>
              <div className="mt-3 sm:mt-4 space-y-2">
                {phoneList.map((phone) => {
                  const normalizedPhoneHref = `tel:${phone.replace(/[^+\d]/g, '')}`;
                  return (
                    <p key={phone}>
                      <a href={normalizedPhoneHref} className="underline underline-offset-4">
                        {phone}
                      </a>
                    </p>
                  );
                })}
              </div>
              <p>
                <a href={emailHref} className="underline underline-offset-4 break-all sm:break-normal">
                  {email}
                </a>
              </p>
              <p>
                <a href={whatsappLink} className="underline underline-offset-4" target="_blank" rel="noreferrer">
                  {whatsappLabel}
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 md:text-right">
            <p className="text-xs sm:text-sm md:text-base text-primary-foreground/80">
              {t('footer.touristTaxNote')}
            </p>
            <p className="text-xs sm:text-sm text-primary-foreground/90 leading-relaxed pt-2 border-t border-primary-foreground/20 md:border-none md:pt-4">
              <span className="font-semibold block mb-1">{propertyIntro}</span>
              {propertyInvite}{' '}
              <a
                href={approachLink}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 font-semibold"
              >
                {propertyApproachLabel}
              </a>{' '}
              {propertyConnector}{' '}
              <a
                href={deckLink}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 font-semibold"
              >
                {propertyDeckLabel}
              </a>.
            </p>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 border-t border-primary-foreground/20 text-xs sm:text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
          <p className="text-primary-foreground/80">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
