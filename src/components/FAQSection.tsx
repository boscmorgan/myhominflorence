import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      key: 'lateCheckin',
      question: t('faq.items.lateCheckin.q'),
      answer: t('faq.items.lateCheckin.a')
    },
    {
      key: 'luggage',
      question: t('faq.items.luggage.q'),
      answer: t('faq.items.luggage.a')
    },
    {
      key: 'parking',
      question: t('faq.items.parking.q'),
      answer: t('faq.items.parking.a')
    },
    {
      key: 'touristTax',
      question: t('faq.items.touristTax.q'),
      answer: t('faq.items.touristTax.a')
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          {t('faq.title')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
          {t('faq.subtitle')}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.key} className="rounded-3xl border border-border bg-background/80 p-6 shadow-sm">
              <h3 className="text-base font-semibold mb-3">{faq.question}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

