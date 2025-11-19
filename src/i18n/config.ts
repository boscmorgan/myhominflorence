import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        rooms: "Rooms",
        amenities: "Amenities",
        contact: "Contact"
      },
      hero: {
        welcome: "Welcome to Florence",
        subtitle: "Lorenzo & Lorenzo"
      },
      about: {
        title: "A Different Way to Experience Hospitality",
        description: "A place where you feel at home while immersed in a pioneering cultural project, for all people who want to experience the city authentically and connect with the local community."
      },
      neighborhood: {
        title: "Discover Our Neighborhood"
      },
      rooms: {
        title: "Comfortable & Stylish Spaces",
        description: "Each room is thoughtfully designed with vintage Italian furnishings, combining comfort with character. Our spaces reflect the authentic spirit of Florence while providing modern amenities for your stay."
      },
      amenities: {
        title: "Choose Your Room",
        wifi: "Wi-Fi",
        luggage: "Luggage Storage",
        checkin: "Flexible Check-in",
        kitchen: "Kitchen & Lounge",
        toiletries: "Toiletries",
        shower: "Private Shower",
        towels: "Towels",
        hairdryer: "Hair Dryer",
        ac: "Air Conditioning",
        iron: "Iron",
        piano: "Piano",
        books: "Library"
      },
      cta: {
        title: "Ready to Experience Florence?",
        description: "Book your stay with us and discover the authentic heart of Florence. We can't wait to welcome you.",
        button: "Book Now"
      },
      footer: {
        contact: "Contact Us",
        address: "Via Bergognone, 34",
        city: "50100 — Florence",
        phone: "+39 055 123 4567",
        email: "info@lorenzoflorence.com",
        tagline: "Lorenzo & Lorenzo is made for you."
      }
    }
  },
  it: {
    translation: {
      nav: {
        home: "Home",
        about: "Chi Siamo",
        rooms: "Camere",
        amenities: "Servizi",
        contact: "Contatti"
      },
      hero: {
        welcome: "Benvenuti a Firenze",
        subtitle: "Lorenzo & Lorenzo"
      },
      about: {
        title: "Un Modo Diverso di Concepire l'Ospitalità",
        description: "Un luogo dove sentirsi a casa e immersi al tempo stesso in un progetto culturale pioneristico, per tutte le persone che desiderano vivere la città in modo autentico e connettersi con la comunità locale."
      },
      neighborhood: {
        title: "Scopri il Nostro Quartiere"
      },
      rooms: {
        title: "Spazi Confortevoli & Eleganti",
        description: "Ogni camera è progettata con cura con arredi vintage italiani, combinando comfort e carattere. I nostri spazi riflettono l'autentico spirito di Firenze fornendo al contempo comfort moderni per il vostro soggiorno."
      },
      amenities: {
        title: "Scegli la Tua Stanza",
        wifi: "Wi-Fi",
        luggage: "Deposito Bagagli",
        checkin: "Check-in Flessibile",
        kitchen: "Cucina e Lounge",
        toiletries: "Sapone",
        shower: "Doccia",
        towels: "Asciugamani",
        hairdryer: "Phon",
        ac: "Aria Condizionata",
        iron: "Ferro da Stiro",
        piano: "Pianoforte",
        books: "Libri"
      },
      cta: {
        title: "Pronto a Vivere Firenze?",
        description: "Prenota il tuo soggiorno con noi e scopri il cuore autentico di Firenze. Non vediamo l'ora di darti il benvenuto.",
        button: "Prenota Ora"
      },
      footer: {
        contact: "Contattaci",
        address: "Via Bergognone, 34",
        city: "50100 — Firenze",
        phone: "+39 055 123 4567",
        email: "info@lorenzoflorence.com",
        tagline: "Lorenzo & Lorenzo è fatto per te."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
