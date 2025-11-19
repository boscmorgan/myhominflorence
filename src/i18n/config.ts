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
        subtitle: "Rooms & Apartments"
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
        subtitle: "Camere & Appartamenti"
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
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Acerca de",
        rooms: "Habitaciones",
        amenities: "Servicios",
        contact: "Contacto"
      },
      hero: {
        welcome: "Bienvenidos a Florencia",
        subtitle: "Habitaciones & Apartamentos"
      },
      about: {
        title: "Una Manera Diferente de Concebir la Hospitalidad",
        description: "Un lugar donde te sientes como en casa mientras te sumerges en un proyecto cultural pionero, para todas las personas que desean vivir la ciudad de forma auténtica y conectarse con la comunidad local."
      },
      neighborhood: {
        title: "Descubre Nuestro Barrio"
      },
      rooms: {
        title: "Espacios Cómodos y Elegantes",
        description: "Cada habitación está cuidadosamente diseñada con muebles italianos vintage, combinando comodidad y carácter. Nuestros espacios reflejan el auténtico espíritu de Florencia mientras ofrecen comodidades modernas para tu estancia."
      },
      amenities: {
        title: "Elige Tu Habitación",
        wifi: "Wi-Fi",
        luggage: "Consigna de Equipaje",
        checkin: "Check-in Flexible",
        kitchen: "Cocina y Lounge",
        toiletries: "Jabón",
        shower: "Ducha",
        towels: "Toallas",
        hairdryer: "Secador",
        ac: "Aire Acondicionado",
        iron: "Plancha",
        piano: "Piano",
        books: "Libros"
      },
      cta: {
        title: "¿Listo para Vivir Florencia?",
        description: "Reserva tu estancia con nosotros y descubre el corazón auténtico de Florencia. Estamos deseando darte la bienvenida.",
        button: "Reservar Ahora"
      },
      footer: {
        contact: "Contáctanos",
        address: "Via Bergognone, 34",
        city: "50100 — Florencia",
        phone: "+39 055 123 4567",
        email: "info@lorenzoflorence.com",
        tagline: "Lorenzo & Lorenzo está hecho para ti."
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        about: "О нас",
        rooms: "Номера",
        amenities: "Услуги",
        contact: "Контакты"
      },
      hero: {
        welcome: "Добро пожаловать во Флоренцию",
        subtitle: "Номера & Апартаменты"
      },
      about: {
        title: "Другой Взгляд на Гостеприимство",
        description: "Место, где вы чувствуете себя как дома, погружаясь в новаторский культурный проект, для всех, кто хочет испытать город аутентично и соединиться с местным сообществом."
      },
      neighborhood: {
        title: "Откройте для Себя Наш Район"
      },
      rooms: {
        title: "Комфортные и Стильные Пространства",
        description: "Каждый номер тщательно оформлен винтажной итальянской мебелью, сочетая комфорт и характер. Наши пространства отражают подлинный дух Флоренции, предоставляя современные удобства для вашего пребывания."
      },
      amenities: {
        title: "Выберите Свой Номер",
        wifi: "Wi-Fi",
        luggage: "Хранение Багажа",
        checkin: "Гибкая Регистрация",
        kitchen: "Кухня и Лаундж",
        toiletries: "Мыло",
        shower: "Душ",
        towels: "Полотенца",
        hairdryer: "Фен",
        ac: "Кондиционер",
        iron: "Утюг",
        piano: "Пианино",
        books: "Книги"
      },
      cta: {
        title: "Готовы Испытать Флоренцию?",
        description: "Забронируйте проживание с нами и откройте подлинное сердце Флоренции. Мы не можем дождаться, чтобы приветствовать вас.",
        button: "Забронировать Сейчас"
      },
      footer: {
        contact: "Свяжитесь с Нами",
        address: "Via Bergognone, 34",
        city: "50100 — Флоренция",
        phone: "+39 055 123 4567",
        email: "info@lorenzoflorence.com",
        tagline: "Lorenzo & Lorenzo создан для вас."
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: "首页",
        about: "关于我们",
        rooms: "客房",
        amenities: "设施",
        contact: "联系方式"
      },
      hero: {
        welcome: "欢迎来到佛罗伦萨",
        subtitle: "客房 & 公寓"
      },
      about: {
        title: "不同的待客之道",
        description: "一个让您有宾至如归感觉的地方，同时沉浸在开创性的文化项目中，适合所有想要真实体验这座城市并与当地社区联系的人。"
      },
      neighborhood: {
        title: "探索我们的街区"
      },
      rooms: {
        title: "舒适时尚的空间",
        description: "每间客房均采用意大利复古家具精心设计，将舒适与特色相结合。我们的空间反映了佛罗伦萨的真实精神，同时为您的住宿提供现代便利设施。"
      },
      amenities: {
        title: "选择您的房间",
        wifi: "Wi-Fi",
        luggage: "行李寄存",
        checkin: "灵活入住",
        kitchen: "厨房和休息室",
        toiletries: "洗浴用品",
        shower: "淋浴",
        towels: "毛巾",
        hairdryer: "吹风机",
        ac: "空调",
        iron: "熨斗",
        piano: "钢琴",
        books: "图书"
      },
      cta: {
        title: "准备好体验佛罗伦萨了吗？",
        description: "与我们预订您的住宿，探索佛罗伦萨的真实心脏。我们迫不及待地欢迎您。",
        button: "立即预订"
      },
      footer: {
        contact: "联系我们",
        address: "Via Bergognone, 34",
        city: "50100 — 佛罗伦萨",
        phone: "+39 055 123 4567",
        email: "info@lorenzoflorence.com",
        tagline: "Lorenzo & Lorenzo 为您而生。"
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
