import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        rooms: "Rooms",
        location: "Location",
        amenities: "Amenities",
        contact: "Contact",
        language: "Language"
      },
      hero: {
        welcome: "Welcome to Florence",
        mainTitle: "rooms & apartments in San Niccolò, Florence",
        valueProp:
          "Feel at home in our fully furnished rooms & apartments in San Niccolò, just a short walk from Ponte Vecchio – comfortable, affordable stays in a relaxed, youthful atmosphere.",
        ratingBadge: "4.68 rating • 1,700+ reviews",
        selfCheckInBadge: "Self check-in & luggage storage",
        locationBadge: "San Niccolò • Near Ponte Vecchio",
        checkRooms: "Check rooms",
        selfCheckInNote: "Self check-in • Luggage storage included",
        writeUs: "or write us"
      },
      about: {
        title: "About Us",
        description: `Book now and immerse yourself in a different way of visiting Florence – by feeling right at home. Our fully furnished rooms and apartments offer an affordable stay in the historic San Niccolò neighborhood, just a short walk from Ponte Vecchio.
Lorenzo & Lorenzo host with the warmth of longtime friends, creating a simple, youthful atmosphere where guests are welcomed like family, surrounded by cafés, osterie, pizzerie, bakeries, art galleries and local shops that capture the real Florentine spirit.`,
        snippet: "Meet “Il Bello” and “Il Vagge” — two longtime friends who turned their San Niccolò apartment into a welcoming bed & breakfast for modern travelers.",
        meetHostsLink: "Meet Il Bello & Il Vagge",
        hostsAlt: "Lorenzo & Lorenzo hosts"
      },
      neighborhood: {
        title: "Discover Our Neighborhood",
        description:
          "Stay in San Niccolò, a historic neighborhood within Florence’s ancient walls, steps from the Arno and Ponte Vecchio, full of cafés, osterie, art galleries and small local shops. From our primary location you can walk to all the highlights below in just a few minutes.",
        mapLink: "View on map",
        chips: {
          ponteVecchio: "Ponte Vecchio • 10 min walk",
          michelangelo: "Piazzale Michelangelo • 8 min walk",
          boboli: "Giardino di Boboli • 15 min walk",
          uffizi: "Uffizi • 12 min walk"
        }
      },
      rooms: {
        title: "Rooms & Apartments",
        description:
          "Each room and apartment is thoughtfully designed with vintage Italian furnishings, combining comfort with character so you can feel at home while discovering Florence.",
        fromPriceLabel: "From €{{price}} / night",
        photosLabel: "{{count}} photos",
        guestsLabel: "guest",
        guestsLabelPlural: "guests",
        viewOnAirbnb: "View on Airbnb",
        distanceLabel: "Distance from center: {{distance}} km",
        contactHost: "Contact us",
        badges: {
          couples: "Perfect for couples",
          spacious: "Extra spacious & bright",
          terrace: "Private terrace & kitchen"
        }
      },
      amenities: {
        title: "Everything You Need for Your Stay",
        subtitle:
          "Essentials, comfort and little extras that make Lorenzo & Lorenzo feel like home.",
        groups: {
          essentials: "Essentials",
          comfort: "Comfort",
          extras: "Extras"
        },
        wifi: "Wi‑Fi",
        luggage: "Luggage storage",
        checkin: "Flexible check‑in",
        kitchen: "Kitchen & lounge",
        toiletries: "Toiletries",
        shower: "Private shower",
        towels: "Towels",
        hairdryer: "Hair dryer",
        ac: "Air conditioning",
        iron: "Iron",
        piano: "Piano",
        books: "Library & books"
      },
      cta: {
        title: "Ready to Experience Florence?",
        description:
          "Book your stay with us and discover the authentic heart of Florence. We can't wait to welcome you.",
        button: "Book now"
      },
      hosts: {
        title: "Your Hosts",
        subtitle: "Two friends who turned their love for Florence into a home for travelers.",
        names: "Lorenzo & Lorenzo",
        role: "Hosts",
        rating: "4.68 rating • 4,277+ reviews",
        bio: "Locals know them as “Il Bello” and “Il Vagge”: Lorenzo Bellini, with a sun‑worn Tuscan face and big hands that fix everything from elevators to tricky situations, and Lorenzo Vaggelli, the blonde with shy eyes and a wild beard who happily crosses Florence on foot to visit friends. Together they run their San Niccolò bed & breakfast in the same Oltrarno streets where it all began – a little village inside the city, between the Arno and the climb to San Miniato, dotted with cafés, bakeries, galleries and trattorie – welcoming guests with the warmth and humour of true Florentines.",
        born: "Born in the 80s",
        work: "Vacation rental hosts",
        lives: "Based in Florence, Italy"
      },
      parking: {
        title: "Lorenzo & Lorenzo’s Parking",
        subtitle: "Exclusive guest parking just outside the ZTL.",
        intro:
          "To make your stay easier, we offer exclusive, convenient parking options for our guests. Our parking is just outside Florence’s limited traffic zone (ZTL), so you can arrive by car and explore the city on foot.",
        tableTitle: "Tariff",
        daily: "Daily",
        weekly: "Weekly",
        dailyPrice: "€ 20 per day",
        weeklyPrice: "€ 120 per week",
        contact:
          "Planning your visit? Reach out at info@myhomeinflorence.com for parking availability and reservations.",
        bulletsTitle: "Why our parking works well",
        items: {
          location:
            "Strategic location just outside the ZTL, close to the historic center.",
          pricing:
            "Competitive pricing whether you stay a few nights or several days.",
          booking:
            "We recommend booking in advance, especially during peak seasons, to guarantee your spot."
        },
        nearbyTitle: "Close by",
        nearbyPlaces: {
          michelangelo: "Piazzale Michelangelo",
          boboli: "Giardino di Boboli",
          pitti: "Palazzo Pitti",
          uffizi: "Uffizi"
        }
      },
      faq: {
        title: "Good to know",
        subtitle:
          "A few quick answers to the questions guests ask most often.",
        items: {
          lateCheckin: {
            q: "Can I arrive late?",
            a: "Yes. We offer flexible self check-in. Just share your arrival time and we’ll send you all the details."
          },
          luggage: {
            q: "Can I leave my luggage?",
            a: "We can usually store your luggage before check-in or after check-out. Let us know in advance so we can arrange it."
          },
          parking: {
            q: "Do you have parking?",
            a: "Yes. We offer private parking just outside the ZTL with daily and weekly rates. See the Parking section for details."
          },
          touristTax: {
            q: "Is there a tourist tax in Florence?",
            a: "Guests pay a tourist tax of €5.50 per person per night, up to 7 nights, as part of their reservation. It is set by the Municipality of Florence and is separate from our service fees."
          }
        }
      },
      footer: {
        contact: "Contact",
        address: "Via di San Niccolò 63",
        city: "50125 — Florence, Tuscany, Italy",
        phone: "+39 055 123 4567",
        email: "info@myhomeinflorence.com",
        touristTaxNote:
          "Guests who book stays in Florence pay a city tourist tax of €5.50 per person per night (up to 7 nights). For details, visit the Municipality of Florence website.",
        tagline: "Lorenzo & Lorenzo is your home in Florence.",
        copyright: "© 2025 Lorenzo & Lorenzo. All rights reserved."
      }
    }
  },
  it: {
    translation: {
      nav: {
        home: "Home",
        about: "Chi Siamo",
        rooms: "Camere",
        location: "Posizione",
        amenities: "Servizi",
        contact: "Contatti",
        language: "Lingua"
      },
      hero: {
        welcome: "Benvenuti a Firenze",
        ratingBadge: "Valutazione 4,68 • Oltre 1.700 recensioni",
        checkRooms: "Scopri le camere",
        selfCheckInNote: "Self check-in • Deposito bagagli incluso",
        writeUs: "oppure scrivici"
      },
      about: {
        title: "Chi Siamo",
        description: "Un luogo dove sentirsi a casa e immersi al tempo stesso in un progetto culturale pioneristico, per tutte le persone che desiderano vivere la città in modo autentico e connettersi con la comunità locale.",
        snippet: "Incontra “Il Bello” e “Il Vagge”: due amici di lunga data che hanno trasformato il loro appartamento di San Niccolò in un B&B accogliente per ospiti curiosi.",
        meetHostsLink: "Conosci Il Bello & Il Vagge",
        hostsAlt: "Lorenzo & Lorenzo"
      },
      neighborhood: {
        title: "Scopri il Nostro Quartiere",
        description:
          "San Niccolò è un quartiere dentro le mura storiche di Firenze, a pochi passi dall'Arno e da Ponte Vecchio, pieno di caffè, osterie, gallerie e botteghe. Dalla nostra sede principale raggiungi a piedi tutti i luoghi indicati qui sotto in pochi minuti.",
        mapLink: "Apri la mappa"
      },
      rooms: {
        title: "Spazi Confortevoli & Eleganti",
        description: "Ogni camera è progettata con cura con arredi vintage italiani, combinando comfort e carattere. I nostri spazi riflettono l'autentico spirito di Firenze fornendo al contempo comfort moderni per il vostro soggiorno.",
        distanceLabel: "Distanza dal centro: {{distance}} km"
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
        address: "Via di San Niccolò 63",
        city: "50125 — Firenze, Toscana, Italia",
        phone: "+39 055 123 4567",
        email: "info@myhomeinflorence.com",
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
        location: "Ubicación",
        amenities: "Servicios",
        contact: "Contacto",
        language: "Idioma"
      },
      hero: {
        welcome: "Bienvenidos a Florencia",
        ratingBadge: "Valoración 4,68 • Más de 1.700 reseñas",
        checkRooms: "Ver habitaciones",
        selfCheckInNote: "Self check-in • Consigna incluida",
        writeUs: "o escríbenos"
      },
      about: {
        title: "Acerca de Nosotros",
        description: "Un lugar donde te sientes como en casa mientras te sumerges en un proyecto cultural pionero, para todas las personas que desean vivir la ciudad de forma auténtica y conectarse con la comunidad local.",
        snippet: "Conoce a “Il Bello” y “Il Vagge”: dos amigos de toda la vida que convirtieron su apartamento en San Niccolò en un B&B acogedor para viajeros curiosos.",
        meetHostsLink: "Conoce a Il Bello & Il Vagge",
        hostsAlt: "Anfitriones Lorenzo & Lorenzo"
      },
      neighborhood: {
        title: "Descubre Nuestro Barrio",
        description:
          "San Niccolò se encuentra dentro de las murallas históricas de Florencia, a pocos pasos del Arno y del Ponte Vecchio, lleno de cafés, osterie, galerías y tiendas locales. Desde nuestra ubicación principal puedes caminar en minutos a todos los lugares destacados que ves aquí abajo.",
        mapLink: "Ver en el mapa"
      },
      rooms: {
        title: "Espacios Cómodos y Elegantes",
        description: "Cada habitación está cuidadosamente diseñada con muebles italianos vintage, combinando comodidad y carácter. Nuestros espacios reflejan el auténtico espíritu de Florencia mientras ofrecen comodidades modernas para tu estancia.",
        distanceLabel: "Distancia al centro: {{distance}} km"
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
        address: "Via di San Niccolò 63",
        city: "50125 — Florencia, Toscana, Italia",
        phone: "+39 055 123 4567",
        email: "info@myhomeinflorence.com",
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
        location: "Расположение",
        amenities: "Услуги",
        contact: "Контакты",
        language: "Язык"
      },
      hero: {
        welcome: "Добро пожаловать во Флоренцию",
        ratingBadge: "Рейтинг 4,68 • Более 1 700 отзывов",
        checkRooms: "Посмотреть номера",
        selfCheckInNote: "Self check-in • Хранение багажа включено",
        writeUs: "или напишите нам"
      },
      about: {
        title: "О нас",
        description: "Место, где вы чувствуете себя как дома, погружаясь в новаторский культурный проект, для всех, кто хочет испытать город аутентично и соединиться с местным сообществом.",
        snippet: "Познакомьтесь с “Il Bello” и “Il Vagge” — друзьями, превратившими свою квартиру в Сан-Никколо в уютный B&B для путешественников.",
        meetHostsLink: "Познакомиться с Il Bello & Il Vagge",
        hostsAlt: "Хозяева Lorenzo & Lorenzo"
      },
      neighborhood: {
        title: "Откройте для Себя Наш Район",
        description:
          "Сан-Никколо расположен внутри старинных городских стен Флоренции, в нескольких шагах от Арно и Понте-Веккьо, среди кофеен, остерий, галерей и лавочек. Из нашей основной локации вы пешком дойдёте до всех мест, перечисленных ниже, всего за несколько минут.",
        mapLink: "Показать на карте"
      },
      rooms: {
        title: "Комфортные и Стильные Пространства",
        description: "Каждый номер тщательно оформлен винтажной итальянской мебелью, сочетая комфорт и характер. Наши пространства отражают подлинный дух Флоренции, предоставляя современные удобства для вашего пребывания.",
        distanceLabel: "Расстояние от центра: {{distance}} км"
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
        contact: "Свяжитесь с нами",
        address: "Via di San Niccolò 63",
        city: "50125 — Флоренция, Тоскана, Италия",
        phone: "+39 055 123 4567",
        email: "info@myhomeinflorence.com",
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
        location: "位置",
        amenities: "设施",
        contact: "联系方式",
        language: "语言"
      },
      hero: {
        welcome: "欢迎来到佛罗伦萨",
        ratingBadge: "评分 4.68 · 超过 1,700 条评价",
        checkRooms: "查看客房",
        selfCheckInNote: "自助入住 · 含行李寄存",
        writeUs: "或给我们写信"
      },
      about: {
        title: "关于我们",
        description: "一个让您有宾至如归感觉的地方，同时沉浸在开创性的文化项目中，适合所有想要真实体验这座城市并与当地社区联系的人。",
        snippet: "认识“Il Bello”和“Il Vagge”——两位老朋友，把圣尼科洛的公寓变成了温暖的民宿，迎接世界各地的旅人。",
        meetHostsLink: "了解 Il Bello 与 Il Vagge",
        hostsAlt: "Lorenzo & Lorenzo"
      },
      neighborhood: {
        title: "探索我们的街区",
        description:
          "圣尼科洛位于佛罗伦萨古城墙内，距离阿尔诺河和老桥仅几步之遥，周围遍布咖啡馆、小餐馆、画廊和本地小店。从我们的主要位置出发，只需几分钟即可步行到下方列出的所有地标。",
        mapLink: "在地图上查看"
      },
      rooms: {
        title: "舒适时尚的空间",
        description: "每间客房均采用意大利复古家具精心设计，将舒适与特色相结合。我们的空间反映了佛罗伦萨的真实精神，同时为您的住宿提供现代便利设施。",
        distanceLabel: "距市中心：{{distance}} 公里"
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
        address: "Via di San Niccolò 63",
        city: "50125 — 佛罗伦萨, 托斯卡纳, 意大利",
        phone: "+39 055 123 4567",
        email: "info@myhomeinflorence.com",
        tagline: "Lorenzo & Lorenzo 为您而生。"
      }
    }
  }
};

const supportedLanguages = ['en', 'it', 'es', 'ru', 'zh'] as const;

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return 'en';
  }
  const browserLang = window.navigator.language?.split('-')[0] || 'en';
  return supportedLanguages.includes(browserLang as (typeof supportedLanguages)[number])
    ? browserLang
    : 'en';
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
