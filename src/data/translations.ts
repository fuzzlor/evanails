import { Language } from '../types';

export interface Translations {
  nav: {
    services: string;
    price: string;
    interior: string;
    portfolio: string;
    about: string;
    contact: string;
    bookNow: string;
    myBookings: string;
    allScreens: string;
    tagline: string;
    concierge: string;
    whatsappConcierge: string;
  };
  hero: {
    tagline: string;
    preheader: string;
    headlinePart1: string;
    headlinePart2: string;
    subtext: string;
    bookAppointment: string;
    exploreServices: string;
    badge10Free: string;
    badgeAutoclave: string;
    badgeOasis: string;
    cardTitle: string;
    cardSub: string;
    hours: string;
  };
  about: {
    eyebrow: string;
    title: string;
    statement: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar1Number: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar2Number: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar3Number: string;
  };
  interior: {
    eyebrow: string;
    title: string;
    subtext: string;
    galleryBadge: string;
    galleryCaption: string;
    podsBadge: string;
    podsTitle: string;
    podsDesc: string;
    polishBadge: string;
    polishTitle: string;
    polishDesc: string;
    viewGallery: string;
    hallTag: string;
    spaces: Record<
      string,
      {
        title: string;
        subtitle: string;
        desc: string;
        badge: string;
      }
    >;
  };
  services: {
    eyebrow: string;
    title: string;
    subtext: string;
    guestFavorite: string;
    startingFrom: string;
    book: string;
    min: string;
    vnd: string;
    viewDetails: string;
    hideDetails: string;
    items: Record<
      string,
      {
        tag: string;
        title: string;
        desc: string;
        features: string[];
      }
    >;
  };
  priceList: {
    eyebrow: string;
    title: string;
    subtext: string;
    vacationTitle: string;
    vacationDesc: string;
    luggageStorage: string;
    inquireGroup: string;
    tableTreatment: string;
    tableDuration: string;
    tablePrice: string;
    tableAction: string;
    filterAll: string;
    filterMani: string;
    filterPedi: string;
    filterExtension: string;
    filterArt: string;
    calculatorTitle: string;
    calculatorDesc: string;
    calcTotal: string;
    calcEstimatedTime: string;
    calcBookPackage: string;
    items?: Record<string, string>;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    subtext: string;
    filterAll: string;
    filterMani: string;
    filterPedi: string;
    filterArt: string;
    filterFrench: string;
    bookThisDesign: string;
    instagramPrompt: string;
    bespokeDesignBooking: string;
    items: Record<
      string,
      {
        title: string;
        tag: string;
        desc: string;
        studioIndex: string;
      }
    >;
  };
  schedule: {
    eyebrow: string;
    title: string;
    subtext: string;
    weekCurrent: string;
    weekNext: string;
    weekAfter: string;
    legendFree: string;
    legendModerate: string;
    legendBusy: string;
    occupancyLabel: string;
    availableSlots: string;
    selectDayPrompt: string;
    slotsFor: string;
    morning: string;
    afternoon: string;
    evening: string;
    slotAvailable: string;
    slotFew: string;
    slotBooked: string;
    bookSelectedSlot: string;
    bookThisDay: string;
    conciergeWaitlist: string;
    daysOfWeek: string[];
  };
  features: {
    eyebrow: string;
    title: string;
    feat1Title: string;
    feat1Desc: string;
    feat1Badge: string;
    feat2Title: string;
    feat2Desc: string;
    feat2Badge: string;
    feat3Title: string;
    feat3Desc: string;
    feat3Badge: string;
    feat4Title: string;
    feat4Desc: string;
    feat4Badge: string;
  };
  reviews: {
    eyebrow: string;
    title: string;
    googleRating: string;
    items: Record<
      string,
      {
        author: string;
        role: string;
        quote: string;
      }
    >;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtext: string;
    addressTitle: string;
    addressValue: string;
    hoursTitle: string;
    hoursValue: string;
    conciergeTitle: string;
    conciergeValue: string;
    whatsappBtn: string;
    mapsBtn: string;
    mapSubtext: string;
    directions: string;
  };
  booking: {
    atelierReservation: string;
    modalTitle: string;
    modalSub: string;
    fullName: string;
    fullNamePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    treatmentLabel: string;
    selectMaster: string;
    anyMaster: string;
    preferredDate: string;
    timeSlot: string;
    specialNotes: string;
    specialNotesPlaceholder: string;
    submitBtn: string;
    submitting: string;
    successMsg: string;
    ticketTitle: string;
    ticketCode: string;
    close: string;
    viewTicket: string;
    cancelBooking: string;
    noBookings: string;
    addToCalendar: string;
    copyWhatsApp: string;
    guestLabel: string;
    statusConfirmed: string;
    refLabel: string;
    periods: {
      morning: string;
      noon: string;
      afternoon: string;
      evening: string;
    };
    customPackage: string;
  };
  footer: {
    description: string;
    studioAtelier: string;
    address: string;
    hours: string;
    getDirections: string;
    concierge: string;
    conciergeSub: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<Language, Translations> = {
  ru: {
    nav: {
      services: 'Услуги',
      price: 'Цены',
      interior: 'Интерьер',
      portfolio: 'Портфолио',
      about: 'О студии',
      contact: 'Контакты',
      bookNow: 'Записаться онлайн',
      myBookings: 'Мои записи',
      allScreens: 'Все экраны',
      tagline: 'Ателье мягких линий',
      concierge: 'Консьерж',
      whatsappConcierge: 'Консьерж в WhatsApp',
    },
    hero: {
      tagline: 'EVA Soft Contour Atelier • Нячанг',
      preheader: 'Оазис мягких архитектурных линий и эстетики ухода за ногтями',
      headlinePart1: 'Красота в каждом',
      headlinePart2: 'изгибе и линии.',
      subtext:
        'Современная ногтевая студия в прибрежном Нячанге, созданная для глубокого расслабления, медицинской 3-этапной стерилизации и безупречного японского гель-покрытия.',
      bookAppointment: 'Записаться онлайн',
      exploreServices: 'Смотреть услуги',
      badge10Free: '10-Free Веган Гели',
      badgeAutoclave: 'Медицинский автоклав',
      badgeOasis: 'Оазис у Чан Фу',
      cardTitle: 'Архитектурный интерьер Soft Contour',
      cardSub: 'Лок Тхо, Нячанг • Набережная Чан Фу',
      hours: 'Ежедневно 09:00 – 20:00',
    },
    about: {
      eyebrow: 'Философия EVA',
      title: 'Пространство для осознанной паузы',
      statement:
        'EVA Nail Studio — современный оазис в Нячанге, где соединяются плавные органические линии, рассеянный солнечный свет и японская точность. Для нас забота о ногтях — это форма искусства, основанная на спокойствии, чистоте и эстетической гармонии.',
      pillar1Title: 'Мастерство высшего класса',
      pillar1Desc:
        'Аппаратный комбинированный и русский маникюр с чистейшей обработкой кутикулы, японские бескислотные базы и укрепление натуральной пластины.',
      pillar1Number: '01 / Совершенство',
      pillar2Title: 'Кристальная чистота и воздух',
      pillar2Desc:
        'Трехэтапная стерилизация в медицинском автоклаве, крафт-пакеты, вскрываемые при вас, одноразовые наборы и бесшумная система вытяжек.',
      pillar2Number: '02 / Чистый воздух',
      pillar3Title: 'Центр Нячанга у моря',
      pillar3Desc:
        'Удобное расположение в туристическом районе всего в 2 минутах от набережной Чан Фу. Идеально для отдыха во время отпуска.',
      pillar3Number: '03 / Морской бриз',
    },
    interior: {
      eyebrow: 'Архитектурный дизайн',
      title: 'Интерьер Soft Contour Atelier',
      subtext:
        'Мягкие гипсовые арки, светлый натуральный дуб, кресла из итальянской кожи и акустический комфорт, снимающий усталость после путешествий.',
      galleryBadge: 'Главный зал и лаунж',
      galleryCaption: 'Светлый дуб, микро-терраццо и мягкие светящиеся изгибы',
      podsBadge: 'Зона педикюра',
      podsTitle: 'Авторские педикюрные поды',
      podsDesc:
        'Индивидуальные керамические чаши, ванночки с минеральной морской солью и эргономичные анатомические кресла.',
      polishBadge: 'Более 400 оттенков',
      polishTitle: 'Галерея японских и корейских гелей',
      polishDesc:
        'Премиальные гипоаллергенные палитры из Токио и Сеула, включая эффект жемчужной глазури, нюдовые и молочные оттенки.',
      viewGallery: 'Открыть галерею интерьера',
      hallTag: '01 / Главный зал',
      spaces: {
        'main-gallery': {
          title: 'Главный зал и лаунж',
          subtitle: 'Светлый дуб, итальянское микро-терраццо и сияющие мягкие изгибы',
          desc: 'Плавная гипсовая архитектура, мягкий прибрежный свет и теплые природные текстуры, создающие атмосферу абсолютного покоя.',
          badge: '01 / Главный зал',
        },
        'foot-spa-pods': {
          title: 'Спа-поды для педикюра',
          subtitle: 'Эргономичные кожаные кресла и рифленые керамические ванны',
          desc: 'Керамические ванны с фильтрованной минеральной водой, травяными морскими солями и регулируемой поддержкой поясницы.',
          badge: '02 / Зона педикюра',
        },
        'curated-gallery': {
          title: 'Галерея премиальных лаков и гелей',
          subtitle: 'Подсвеченные гипсовые арки с 400+ оттенками из Японии и Кореи',
          desc: 'Безопасные бескислотные формулы из Токио и Сеула, включая трендовые нюдовые глазури и жемчужные переливы.',
          badge: '03 / Палитра оттенков',
        },
      },
    },
    services: {
      eyebrow: 'Фирменные ритуалы',
      title: 'Услуги и уходы студии',
      subtext:
        'Каждая процедура сочетает физический комфорт, бережную технику и премиальные безопасные покрытия.',
      guestFavorite: 'Выбор гостей',
      startingFrom: 'Стоимость от',
      book: 'Записаться',
      min: 'мин',
      vnd: 'VND',
      viewDetails: 'Подробнее',
      hideDetails: 'Скрыть детали',
      items: {
        'russian-manicure': {
          tag: 'Точный уход',
          title: 'Классический и русский маникюр',
          desc: 'Деликатная аппаратная обработка кутикулы алмазными фрезами, создание идеального анатомического контура ногтя, мягкий скраб для рук и массаж с кератиновым кремом.',
          features: [
            'Аппаратная обработка кутикулы алмазными фрезами',
            'Создание идеальной анатомической формы ногтей',
            'Мягкий пилинг и спа-скраб для кожи рук',
            'Восстановление кератином и органическое масло для кутикулы',
          ],
        },
        'gel-polish-color': {
          tag: 'Фирменный цвет',
          title: 'Гель-лак и цветной кутюр',
          desc: 'Полный комбинированный маникюр в паре с японскими и корейскими гель-лаками премиум-класса. Стеклянный глянец и безупречная стойкость без сколов 3–4 недели.',
          features: [
            'Полная аппаратная подготовка по русскому стандарту',
            'Бескислотная выравнивающая японская база',
            '2 слоя пигмента из бутиковых лабораторий Токио и Сеула',
            'Ультраглянцевый топ с защитой от царапин',
            'Гарантия бесплатной коррекции 7 дней',
          ],
        },
        'architectural-extensions': {
          tag: 'Архитектура',
          title: 'Архитектурное наращивание ногтей',
          desc: 'Натурально выглядящие гелевые типсы и моделирование полигелем с безупречной аркой апекса. Невесомые, ультрапрочные и естественные по ощущениям.',
          features: [
            'Индивидуальный подбор форм или мягких гелевых типс',
            'Моделирование идеального архитектурного баланса апекса',
            'Тонкие естественные боковые параллели без утолщения',
            'Повышенная прочность для активного отдыха и моря',
          ],
        },
        'spa-pedicure': {
          tag: 'Холистический ритуал',
          title: 'Фирменный спа-педикюр',
          desc: 'Ванночка с вьетнамским лемонграссом и розовой гималайской солью, бережный смарт-пилинг стоп, точечный массаж голеней и теплое обертывание натуральными маслами.',
          features: [
            'Теплая минеральная ванна с лемонграссом',
            'Деликатная смарт-обработка стоп одноразовыми дисками',
            'Аппаратный уход за кутикулой пальцев ног',
            '15-минутный расслабляющий рефлекторный массаж стоп и икр',
            'Глубокое питание теплым кокосовым маслом',
          ],
        },
        'minimalist-art-glaze': {
          tag: 'Арт и глазурь',
          title: 'Минималистичный нейл-арт и хромовая глазурь',
          desc: 'Жемчужная глазурь в стиле Хейли Бибер, микро-френч, деликатные золотые акценты или авторские органические линии, нарисованные вручную.',
          features: [
            'Жемчужный глазированный хром в стиле Hailey Bieber',
            'Ультратонкие микро-линии френча',
            'Деликатная золотая поталь и авторские линии от руки',
            'Стойкое защитное топ-покрытие',
          ],
        },
        'combo-relax': {
          tag: 'Полный релакс',
          title: 'Комбо: Гель-мани + Спа-педи',
          desc: 'Комплексный одновременный или последовательный уход: гель-маникюр с русской обработкой кутикулы в сочетании с фирменным спа-педикюром и массажем.',
          features: [
            'Полный гель-маникюр с русской аппаратной обработкой',
            'Фирменный спа-педикюр с травяной ванночкой',
            'Двойной расслабляющий массаж рук и ног',
            'Органический приветственный чай и спокойная музыка',
          ],
        },
      },
    },
    priceList: {
      eyebrow: 'Прозрачные тарифы',
      title: 'Прайс-лист и калькулятор',
      subtext:
        'Все услуги включают индивидуальный одноразовый набор, травяной приветственный чай и гарантию на покрытие 7 дней.',
      vacationTitle: 'Отдыхаете в Нячанге?',
      vacationDesc:
        'Мы с радостью принимаем запись день-в-день, без записи при наличии мест, а также организуем спа-девичники.',
      luggageStorage: 'Бесплатное хранение чемоданов для туристов',
      inquireGroup: 'Узнать об индивидуальных и групповых спа-сетах',
      tableTreatment: 'Процедура',
      tableDuration: 'Время',
      tablePrice: 'Цена (VND)',
      tableAction: 'Запись',
      filterAll: 'Все услуги',
      filterMani: 'Маникюр',
      filterPedi: 'Педикюр',
      filterExtension: 'Наращивание',
      filterArt: 'Дизайн и снятие',
      calculatorTitle: 'Интерактивный калькулятор сеанса',
      calculatorDesc: 'Выберите нужные опции, чтобы рассчитать общее время и точную стоимость вашего визита:',
      calcTotal: 'Итоговая стоимость:',
      calcEstimatedTime: 'Ориентировочное время:',
      calcBookPackage: 'Записаться на выбранный комплекс',
      items: {
        p1: 'Классический маникюр',
        p2: 'Гель-маникюр',
        p3: 'Деликатное снятие гель-лака',
        p4: 'Фирменный спа-педикюр EVA',
        p5: 'Педикюр с гель-лаком',
        p6: 'Глазурь Glazed Donut / Хром',
        p7: 'Полное наращивание (гелевые типсы / полигель)',
        p8: 'Коррекция наращивания',
        p9: 'Микро-френч / Омбре Бэби-бумер',
        p10: 'Художественная роспись (за 2 ногтя)',
        p11: 'Лечебное восстановление ногтей IBX',
        p12: 'Полный релакс: Гель-мани + Спа-педи',
      },
    },
    portfolio: {
      eyebrow: 'Наши работы',
      title: 'Галерея нейл-арта и формы',
      subtext:
        'Эстетика «тихой роскоши», чистейший срез кутикулы и нежные морские текстуры от ведущих мастеров студии.',
      filterAll: 'Все работы',
      filterMani: 'Маникюр',
      filterPedi: 'Педикюр',
      filterArt: 'Нейл-арт',
      filterFrench: 'Френч и нюд',
      bookThisDesign: 'Хочу такой дизайн',
      instagramPrompt: 'Смотрите более 500+ работ в Instagram @evanailstudio.vn',
      bespokeDesignBooking: 'Индивидуальный дизайн и нейл-арт',
      items: {
        'port-1': {
          title: 'Классический русский френч',
          tag: 'Френч',
          desc: 'Безупречно чистая обработка кутикулы и нежное глазированное сияние',
          studioIndex: '01 / Студия',
        },
        'port-2': {
          title: 'Архитектурный 3D-цветок',
          tag: '3D-лепка',
          desc: 'Объемные скульптурные лепестки и мягкий леопардовый контур',
          studioIndex: '02 / Студия',
        },
        'port-3': {
          title: 'Авторский образ для гостьи',
          tag: 'Образ гостя',
          desc: 'Современный миндальный френч-контур с деликатными деталями',
          studioIndex: '03 / Студия',
        },
        'port-4': {
          title: 'Холистический спа и педикюр-ритуал',
          tag: 'Спа-уход',
          desc: 'Глубокое питание кожи морскими экстрактами в лаунж-креслах',
          studioIndex: '04 / Студия',
        },
        'port-5': {
          title: 'Ботанический педикюр с ручной росписью',
          tag: 'Педикюр',
          desc: 'Изящные растительные мотивы с четким белым контуром',
          studioIndex: '05 / Студия',
        },
        'port-6': {
          title: 'Ювелирный аквамариновый нейл-арт',
          tag: 'Золотой кутюр',
          desc: 'Авторские золотые акценты и рельефные 3D-украшения',
          studioIndex: '06 / Студия',
        },
        'port-7': {
          title: 'Неоновый лайм с объемным цветком',
          tag: 'Неон 3D',
          desc: 'Яркий сезонный образ с полупрозрачным 3D-акцентом',
          studioIndex: '07 / Студия',
        },
      },
    },
    schedule: {
      eyebrow: 'Календарь загрузки',
      title: 'График занятости студии',
      subtext:
        'Оцените плотность записи мастеров на ближайшие 3 недели и выберите максимально свободное и комфортное время для посещения.',
      weekCurrent: 'Текущая неделя',
      weekNext: 'Следующая неделя',
      weekAfter: 'Через 2 недели',
      legendFree: 'Свободно (>5 окон)',
      legendModerate: 'Умеренно (2–4 окна)',
      legendBusy: 'Плотная запись (1 окно / Занято)',
      occupancyLabel: 'Занятость дня',
      availableSlots: 'свободных окон',
      selectDayPrompt: 'Нажмите на любой день недели, чтобы увидеть открытые окна по времени',
      slotsFor: 'Свободные окна на',
      morning: 'Утро (09:00 – 12:00)',
      afternoon: 'День (12:00 – 16:00)',
      evening: 'Вечер (16:00 – 20:30)',
      slotAvailable: 'Свободно',
      slotFew: 'Осталось 1 место',
      slotBooked: 'Занято',
      bookSelectedSlot: 'Записаться на этот слот',
      bookThisDay: 'Записаться на выбранный день',
      conciergeWaitlist:
        'Нужно срочное окно или особое время? Напишите нашему консьержу в WhatsApp — подберем индивидуальное время или включим вас в приоритетный лист ожидания.',
      daysOfWeek: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    },
    features: {
      eyebrow: 'Стандарты EVA',
      title: 'Почему гости выбирают EVA Nail Studio',
      feat1Title: 'Медицинский автоклав',
      feat1Desc:
        '3-ступенчатый регламент стерилизации по международным протоколам. Одноразовые пилочки, бафы и салфетки для каждого гостя.',
      feat1Badge: '100% безопасность',
      feat2Title: '10-Free Веган Формулы',
      feat2Desc:
        'Только безопасные, бескислотные и гипоаллергенные гели из Токио и Сеула. Подходят беременным и для тонких ногтей.',
      feat2Badge: 'Чистые составы',
      feat3Title: 'Эргономичные кресла',
      feat3Desc:
        'Анатомические мягкие кресла с поддержкой поясницы, бесшумная очистка воздуха и расслабляющий плейлист.',
      feat3Badge: 'Глубокий релакс',
      feat4Title: 'Забота на 4 языках',
      feat4Desc:
        'Приветливые администраторы и мастера свободно общаются на русском, английском, вьетнамском и корейском.',
      feat4Badge: 'Легкое общение',
    },
    reviews: {
      eyebrow: 'Отзывы гостей',
      title: 'Любимое место жителей и путешественников',
      googleRating: '5.0 в Google Maps (320+ отзывов)',
      items: {
        'rev-1': {
          author: 'Елена Р.',
          role: 'Digital Nomad, путешественница',
          quote:
            '«Самый эстетичный и спокойный салон в Нячанге. Потрясающий интерьер, а мой гель-маникюр продержался 4 недели без единого скола, несмотря на ежедневное купание в море.»',
        },
        'rev-2': {
          author: 'Линь Нгуен',
          role: 'Жительница Нячанга',
          quote:
            '«Лучший маникюр и педикюр, который я делала в Нячанге! Очень умиротворяющий интерьер с мягкими изгибами, нет запаха химии, а мастера невероятно аккуратны и внимательны к деталям.»',
        },
        'rev-3': {
          author: 'Сара М.',
          role: 'Мельбурн, Австралия',
          quote:
            '«Настоящая находка для путешественников. Медицинские стандарты гигиены, безупречный френч с глазурью и очень искренний сервис. Записаться через WhatsApp было проще простого.»',
        },
      },
    },
    contact: {
      eyebrow: 'Как нас найти',
      title: 'Студия в самом центре Нячанга',
      subtext:
        'Удобно расположена в туристическом квартале Тан Лап, в двух кварталах от набережной Чан Фу. Вокруг уютные кофейни и отели.',
      addressTitle: 'Адрес студии',
      addressValue: '18B Nguyễn Thiện Thuật, Tân Lập, Nha Trang, Khánh Hòa, Vietnam',
      hoursTitle: 'Время работы',
      hoursValue: 'Понедельник – Воскресенье: 09:00 – 20:00 (последний визит в 19:00)',
      conciergeTitle: 'Консьерж-сервис',
      conciergeValue: 'WhatsApp / Горячая линия: +84 (0) 90 123 4567 • Онлайн в Telegram и Instagram',
      whatsappBtn: 'Написать в WhatsApp',
      mapsBtn: 'Открыть в Google Maps',
      mapSubtext: '3 минуты пешком от центральной площади 2/4 и пляжа',
      directions: 'Маршрут',
    },
    booking: {
      atelierReservation: 'Онлайн-бронирование',
      modalTitle: 'Записаться на процедуру',
      modalSub: 'Мы свяжемся с вами в WhatsApp или по телефону в течение 15 минут для подтверждения.',
      fullName: 'Ваше имя',
      fullNamePlaceholder: 'Например: Елена Смирнова',
      contactLabel: 'WhatsApp / Телефон',
      contactPlaceholder: '+84 или ваш международный номер (+7...)',
      treatmentLabel: 'Желаемая процедура',
      selectMaster: 'Предпочитаемый мастер',
      anyMaster: 'Любой свободный мастер',
      preferredDate: 'Дата визита',
      timeSlot: 'Время сеанса',
      specialNotes: 'Пожелания / Снятие старого покрытия',
      specialNotesPlaceholder: 'Нужно снятие, дизайн по фото, парный визит с подругой...',
      submitBtn: 'Забронировать визит',
      submitting: 'Оформляем бронь...',
      successMsg: 'Спасибо! Ваша заявка принята. Консьерж EVA напишет вам в WhatsApp для подтверждения времени.',
      ticketTitle: 'Ваш электронный талон бронирования',
      ticketCode: 'Код записи',
      close: 'Закрыть',
      viewTicket: 'Посмотреть талон',
      cancelBooking: 'Отменить запись',
      noBookings: 'У вас пока нет сохраненных записей',
      addToCalendar: 'В Google Календарь',
      copyWhatsApp: 'Переслать в WhatsApp',
      guestLabel: 'Гость',
      statusConfirmed: 'Подтверждено',
      refLabel: 'Запись',
      periods: {
        morning: 'Утро',
        noon: 'День',
        afternoon: 'День',
        evening: 'Вечер',
      },
      customPackage: 'Индивидуальный комплекс услуг',
    },
    footer: {
      description:
        'Спокойный архитектурный салон, посвященный минималистичному японскому гель-арту, восстанавливающему маникюру и уходу за собой в солнечном Нячанге.',
      studioAtelier: 'Студия в Нячанге',
      address: '18B Nguyễn Thiện Thuật, Tân Lập, Nha Trang, Khánh Hòa, Vietnam',
      hours: 'Ежедневно: 09:00 – 20:00',
      getDirections: 'Проложить маршрут в Google Maps',
      concierge: 'Консьерж студии',
      conciergeSub: 'Для VIP бронирования, групп или консультаций:',
      copyright: '© 2025 EVA Nail Studio. Нячанг, Вьетнам. Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия обслуживания',
    },
  },
  en: {
    nav: {
      services: 'Services',
      price: 'Price',
      interior: 'Interior',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
      bookNow: 'Book appointment',
      myBookings: 'My Bookings',
      allScreens: 'All Screens',
      tagline: 'Soft Contour Atelier',
      concierge: 'Concierge',
      whatsappConcierge: 'WhatsApp Concierge',
    },
    hero: {
      tagline: 'EVA Soft Contour Atelier • Nha Trang',
      preheader: 'Sanctuary of Gentle Curves & Modern Nail Aesthetics',
      headlinePart1: 'Beauty in',
      headlinePart2: 'every curve.',
      subtext:
        'Modern nail studio crafted for mindful calm, hospital-grade sterilization, and immaculate Japanese gel artistry amidst the serene light of coastal Nha Trang.',
      bookAppointment: 'Book appointment',
      exploreServices: 'Explore services',
      badge10Free: '10-Free Vegan Gels',
      badgeAutoclave: 'Medical Autoclave',
      badgeOasis: 'Tran Phu Oasis',
      cardTitle: 'Architectural Soft Contour Interior',
      cardSub: 'Loc Tho, Nha Trang • Tran Phu Beachfront',
      hours: 'Daily 09:00 – 20:00',
    },
    about: {
      eyebrow: 'The EVA Philosophy',
      title: 'A Sanctuary Built for Mindful Pause',
      statement:
        'EVA Nail Studio is a contemporary sanctuary in Nha Trang created as a physical harmony of organic curves, diffused coastal sunlight, and meticulous craftsmanship. We believe nail care is an art form rooted in serenity, hygiene, and timeless natural grace.',
      pillar1Title: 'Professional Care',
      pillar1Desc:
        'Meticulous Russian e-file cuticle detailing, master-level shaping, and gentle non-acid Japanese gel foundations tailored for nail longevity.',
      pillar1Number: '01 / Perfection',
      pillar2Title: 'Clean & Serene Space',
      pillar2Desc:
        'Hospital-grade 3-step autoclave sterilization, single-use client packs, organic tea rituals, and gentle acoustics without toxic salon fumes.',
      pillar2Number: '02 / Pure Air',
      pillar3Title: 'Prime Nha Trang Location',
      pillar3Desc:
        'Nestled inside the vibrant coastal hub moments from Trần Phú beach promenade, providing an intimate oasis during your holiday or day.',
      pillar3Number: '03 / Coastal Ease',
    },
    interior: {
      eyebrow: 'Spatial Design',
      title: 'Architectural Soft Contour Atelier',
      subtext:
        'Custom continuous plaster arches, acoustic warmth, and sculpted light oak wood created to melt travel fatigue into absolute coastal ease.',
      galleryBadge: 'The Main Gallery & Lounge',
      galleryCaption: 'Light oak, Italian micro-terrazzo & radiant ambient curves',
      podsBadge: 'Pedicure Pod Lounge',
      podsTitle: 'Bespoke Foot Spa Pods',
      podsDesc:
        'Individual ceramic basins with filtered spring mineral baths, herbal sea salts, and adjustable lumbar back therapy.',
      polishBadge: 'Over 400+ Gels',
      polishTitle: 'Curated Gel & Polish Gallery',
      polishDesc:
        'Selected non-toxic luxury formulas from Tokyo and Seoul, featuring natural nude glazes and translucent pearl finishes.',
      viewGallery: 'Open Interior Gallery',
      hallTag: '01 / Studio Hall',
      spaces: {
        'main-gallery': {
          title: 'The Main Gallery & Lounge',
          subtitle: 'Light oak, Italian micro-terrazzo & radiant ambient curves',
          desc: 'Continuous curving plaster architecture, diffused coastal illumination, and warm natural textures designed to invoke immediate tranquility.',
          badge: '01 / Studio Hall',
        },
        'foot-spa-pods': {
          title: 'Bespoke Foot Spa Pods',
          subtitle: 'Ergonomic leather armchair & fluted ceramic basins',
          desc: 'Custom ceramic basins with filtered spring mineral baths, herbal sea salts, and adjustable lumbar therapy.',
          badge: '02 / Pedicure Pod',
        },
        'curated-gallery': {
          title: 'Curated Gel & Polish Gallery',
          subtitle: 'Illuminated plaster arches showcasing 400+ Japanese & Korean pigments',
          desc: 'Selected non-toxic luxury formulas from Tokyo and Seoul, featuring natural nude glazes and translucent pearl finishes.',
          badge: '03 / Polish Alcove',
        },
      },
    },
    services: {
      eyebrow: 'Tailored Wellness',
      title: 'Curated Treatments',
      subtext:
        'Every session combines ergonomic physical comfort with immaculate precision and premium, nail-safe pigments.',
      guestFavorite: 'Guest Favorite',
      startingFrom: 'Starting from',
      book: 'Book',
      min: 'min',
      vnd: 'VND',
      viewDetails: 'View Details',
      hideDetails: 'Hide Details',
      items: {
        'russian-manicure': {
          tag: 'Precision Care',
          title: 'Classic & Russian Manicure',
          desc: 'Meticulous dry cuticle diamond e-filing, nail shaping to contour perfection, exfoliating hand scrub, and restorative keratin cream massage.',
          features: [
            'Diamond bit hardware cuticle cleaning',
            'Anatomical nail shaping',
            'Dead skin gentle peeling & scrub',
            'Keratin restoration and organic cuticle oil',
          ],
        },
        'gel-polish-color': {
          tag: 'Signature Color',
          title: 'Gel Polish & Color Couture',
          desc: 'Comprehensive dry manicure paired with premium Japanese/Korean gel formulas. Superior glass-like reflection guaranteed chip-resistant for 3–4 weeks.',
          features: [
            'Full Russian hardware manicure prep',
            'Non-acid Japanese alignment base coat',
            '2 coats of boutique Tokyo/Seoul pigment',
            'High-gloss scratch-resistant mirror top',
            '7-day complimentary touch-up guarantee',
          ],
        },
        'architectural-extensions': {
          tag: 'Architecture',
          title: 'Architectural Nail Extensions',
          desc: 'Natural looking soft gel tips & polygel reinforcement with perfect apex curve sculpting. Feather-light, feather-strong, and natural feel.',
          features: [
            'Custom form or soft gel tip sizing',
            'Apex architectural balance sculpting',
            'Natural thin sidewalls without bulk',
            'Long-lasting durability for active travel',
          ],
        },
        'spa-pedicure': {
          tag: 'Holistic Ritual',
          title: 'Signature Spa Pedicure',
          desc: 'Vietnamese lemongrass and pink Himalayan salt soak, organic callus gentle peeling, acupressure leg massage, and warm botanical oil wrap.',
          features: [
            'Lemongrass and warm mineral foot bath',
            'Gentle callus smoothing with disposable disk',
            'E-file precision cuticle grooming',
            '15-min relaxing foot & calf reflexology massage',
            'Deep nourishing warm coconut oil finish',
          ],
        },
        'minimalist-art-glaze': {
          tag: 'Artistry & Glaze',
          title: 'Minimalist Nail Art & Chrome Glaze',
          desc: 'Hailey Bieber style pearl glazed donut finishes, micro-fine French tips, delicate gold chrome accents, or bespoke organic contour lines drawn by hand.',
          features: [
            'Hailey Bieber pearl glazed chrome finish',
            'Ultra-thin micro french lines',
            'Delicate gold foil & hand-painted curves',
            'High-durability sealant top coat',
          ],
        },
        'combo-relax': {
          tag: 'Full Escape',
          title: 'Combo: Gel Mani & Spa Pedi',
          desc: 'Complete simultaneous or sequential care: Full Gel Polish Manicure with Russian cuticle work paired with our Signature Spa Pedicure and reflexology massage.',
          features: [
            'Full Gel Polish Manicure with Russian prep',
            'Full Signature Spa Pedicure with herbal soak',
            'Foot & hand double massage',
            'Organic herbal welcome tea & quiet music',
          ],
        },
      },
    },
    priceList: {
      eyebrow: 'Transparent Rates',
      title: 'Treatment Menu & Price List',
      subtext:
        'All treatments include premium disposable hygiene sets, herbal organic welcome tea, and a 7-day complimentary touch-up guarantee on all gel applications.',
      vacationTitle: 'Visiting Nha Trang on vacation?',
      vacationDesc:
        'We gladly accommodate same-day appointments, walk-ins based on availability, and group bridal relax sessions.',
      luggageStorage: 'Complimentary luggage storage available',
      inquireGroup: 'Inquire for customized group bookings',
      tableTreatment: 'Treatment',
      tableDuration: 'Duration',
      tablePrice: 'Price (VND)',
      tableAction: 'Action',
      filterAll: 'All Treatments',
      filterMani: 'Manicure',
      filterPedi: 'Pedicure',
      filterExtension: 'Extensions',
      filterArt: 'Art & Removal',
      calculatorTitle: 'Custom Visit Price Calculator',
      calculatorDesc: 'Select multiple treatments to calculate total duration and bundle price:',
      calcTotal: 'Total Investment:',
      calcEstimatedTime: 'Estimated Time:',
      calcBookPackage: 'Book This Tailored Package',
      items: {
        p1: 'Classic Manicure',
        p2: 'Gel Polish Manicure',
        p3: 'Express Gentle Gel Removal',
        p4: 'EVA Signature Spa Pedicure',
        p5: 'Pedicure with Gel Polish',
        p6: 'Glazed Donut / Chrome Finish',
        p7: 'Full Extension Set (Soft Gel / Poly)',
        p8: 'Extension Infill / Refill',
        p9: 'Micro French / Baby Boomer Ombre',
        p10: 'Hand-painted Art (per 2 nails)',
        p11: 'IBX Natural Nail Repair Treatment',
        p12: 'Full Relax: Gel Mani + Spa Pedi',
      },
    },
    portfolio: {
      eyebrow: 'Portfolio & Artistry',
      title: 'Our Recent Work',
      subtext:
        'Quiet luxury, pristine cuticle work, and subtle coastal tones created by our resident artists.',
      filterAll: 'All Works',
      filterMani: 'Manicure',
      filterPedi: 'Pedicure',
      filterArt: 'Nail Art & Design',
      filterFrench: 'French & Glaze',
      bookThisDesign: 'Book This Design',
      instagramPrompt: 'View over 500+ designs on Instagram @evanailstudio.vn',
      bespokeDesignBooking: 'Bespoke Nail Art & Design',
      items: {
        'port-1': {
          title: 'Classic Russian French',
          tag: 'French',
          desc: 'Pristine clean cuticle detailing and soft glazed finish',
          studioIndex: '01 / Studio',
        },
        'port-2': {
          title: 'Architectural 3D Floral',
          tag: '3D Sculpt',
          desc: 'Sculpted petal dimension and gentle contour leopard accent',
          studioIndex: '02 / Studio',
        },
        'port-3': {
          title: 'Bespoke Guest Portrait',
          tag: 'Client Look',
          desc: 'Modern almond French contour with delicate details',
          studioIndex: '03 / Studio',
        },
        'port-4': {
          title: 'Holistic Spa & Pedicure Ritual',
          tag: 'Spa Care',
          desc: 'Deep nourishing coastal care in ergonomic lounge chairs',
          studioIndex: '04 / Studio',
        },
        'port-5': {
          title: 'Hand-painted Floral Pedicure',
          tag: 'Pedicure',
          desc: 'Delicate botanical nail art with crisp white contour tips',
          studioIndex: '05 / Studio',
        },
        'port-6': {
          title: 'Aquamarine Jewelry Nail Art',
          tag: 'Gold Couture',
          desc: 'Bespoke gold accents and sculpted 3D embellishments',
          studioIndex: '06 / Studio',
        },
        'port-7': {
          title: 'Neon Lime Sculpted Bloom',
          tag: 'Neon 3D',
          desc: 'Vibrant seasonal statement with translucent 3D floral accent',
          studioIndex: '07 / Studio',
        },
      },
    },
    schedule: {
      eyebrow: 'Live Availability',
      title: 'Studio Occupancy Schedule',
      subtext:
        'Explore booking density across the upcoming 3 weeks and discover the calmest, most relaxing time slots for your pampering visit.',
      weekCurrent: 'Current Week',
      weekNext: 'Next Week',
      weekAfter: 'In 2 Weeks',
      legendFree: 'Plenty of slots (>5)',
      legendModerate: 'Moderate (2–4 slots)',
      legendBusy: 'Busy (1 slot / Booked)',
      occupancyLabel: 'Daily Occupancy',
      availableSlots: 'open slots',
      selectDayPrompt: 'Tap any day to preview available time slots and instant reservation windows',
      slotsFor: 'Available slots for',
      morning: 'Morning (09:00 – 12:00)',
      afternoon: 'Afternoon (12:00 – 16:00)',
      evening: 'Evening (16:00 – 20:30)',
      slotAvailable: 'Available',
      slotFew: '1 spot left',
      slotBooked: 'Booked',
      bookSelectedSlot: 'Book this slot',
      bookThisDay: 'Book for this day',
      conciergeWaitlist:
        'Need a specific time or urgent last-minute appointment? Contact our WhatsApp concierge for a bespoke slot or priority waitlist.',
      daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    features: {
      eyebrow: 'The Atelier Standard',
      title: 'Why Discerning Guests Choose EVA',
      feat1Title: 'Medical Autoclave',
      feat1Desc:
        '3-stage sterilization protocol conforming to international hygiene standards. Disposable single-use files, buffers, and foot soakers for every guest.',
      feat1Badge: 'Zero Compromise',
      feat2Title: '10-Free Formulas',
      feat2Desc:
        'Exclusively vegan, non-toxic, and non-acidic gels directly imported from boutique laboratories in Tokyo and Seoul. Safe for mothers and sensitive beds.',
      feat2Badge: 'Pure Materials',
      feat3Title: 'Ergonomic Chairs',
      feat3Desc:
        'Custom-molded cream leather chairs with gentle memory cushions, silent air-filtration ventilation, and tranquil ambient binaural playlists.',
      feat3Badge: 'Mindful Relaxation',
      feat4Title: '4-Language Care',
      feat4Desc:
        'Attentive concierge and nail artists fluent in English, Vietnamese (Tiếng Việt), Russian (Русский), and Korean (한국어) for effortless communication.',
      feat4Badge: 'Global Welcome',
    },
    reviews: {
      eyebrow: 'Warm Endorsements',
      title: 'Beloved by Locals & Travelers',
      googleRating: '5.0 on Google Maps (320+ Reviews)',
      items: {
        'rev-1': {
          author: 'Elena R.',
          role: 'Digital Nomad & Traveler',
          quote:
            '“The calmest aesthetic salon in Nha Trang. The interior is stunning and my gel manicure lasted 4 weeks without a single chip despite swimming every day in the sea.”',
        },
        'rev-2': {
          author: 'Linh Nguyen',
          role: 'Nha Trang Resident',
          quote:
            '“The most wonderful mani-pedi experience in Nha Trang! The curved interior is so soothing, zero harsh chemical smell, and the artists are exceptionally meticulous and caring.”',
        },
        'rev-3': {
          author: 'Sarah M.',
          role: 'Melbourne, Australia',
          quote:
            '“A true hidden gem for travelers. High-end hygiene standards, flawless french glaze and warm hospitality. Booking via WhatsApp was effortless.”',
        },
      },
    },
    contact: {
      eyebrow: 'Visit Our Studio',
      title: 'Located in the Heart of Nha Trang',
      subtext:
        'Conveniently situated in Tan Lap tourist quarter, two blocks behind the Tran Phu coastal avenue. Surrounded by artisan coffee houses, tranquil boutique hotels, and sandy coastline.',
      addressTitle: 'Studio Address',
      addressValue: '18B Nguyễn Thiện Thuật, Tân Lập, Nha Trang, Khánh Hòa, Vietnam',
      hoursTitle: 'Opening Hours',
      hoursValue: 'Monday – Sunday: 09:00 – 20:00 (Last check-in at 19:00)',
      conciergeTitle: 'Direct Concierge',
      conciergeValue: 'WhatsApp / Hotline: +84 (0) 90 123 4567 • Zalo & Instagram Active',
      whatsappBtn: 'WhatsApp Chat',
      mapsBtn: 'Open in Google Maps',
      mapSubtext: '3 min stroll from 2/4 Square & Beach',
      directions: 'Directions',
    },
    booking: {
      atelierReservation: 'Private Atelier Reservation',
      modalTitle: 'Book Your Appointment',
      modalSub: 'We will reach out via WhatsApp or phone within 15 minutes to confirm availability.',
      fullName: 'Full Name',
      fullNamePlaceholder: 'e.g. Elena Rostova',
      contactLabel: 'WhatsApp / Phone Number',
      contactPlaceholder: '+84 or your international number',
      treatmentLabel: 'Desired Treatment',
      selectMaster: 'Preferred Artist',
      anyMaster: 'Any Available Specialist',
      preferredDate: 'Preferred Date',
      timeSlot: 'Time Slot',
      specialNotes: 'Special Requests / Old Gel Removal',
      specialNotesPlaceholder: 'Need old gel removal, nail art reference, or quiet session...',
      submitBtn: 'Request Appointment',
      submitting: 'Reserving Slot...',
      successMsg: 'Thank you! EVA Concierge has received your request and will ping your WhatsApp shortly.',
      ticketTitle: 'Your Appointment Confirmation Pass',
      ticketCode: 'Reservation Ref',
      close: 'Close',
      viewTicket: 'View Ticket',
      cancelBooking: 'Cancel Booking',
      noBookings: 'No booked appointments found yet',
      addToCalendar: 'Add to Calendar',
      copyWhatsApp: 'Share on WhatsApp',
      guestLabel: 'Guest',
      statusConfirmed: 'Confirmed',
      refLabel: 'Reservation',
      periods: {
        morning: 'Morning',
        noon: 'Noon',
        afternoon: 'Afternoon',
        evening: 'Evening',
      },
      customPackage: 'Custom Tailored Package',
    },
    footer: {
      description:
        'A serene, architectural sanctuary dedicated to minimalist Japanese gel nail art, restorative manicures, and gentle wellness in coastal Nha Trang.',
      studioAtelier: 'Studio Atelier',
      address: '18B Nguyễn Thiện Thuật, Tân Lập, Nha Trang, Khánh Hòa, Vietnam',
      hours: 'Open Daily: 09:00 – 20:00',
      getDirections: 'Get Directions (Google Maps)',
      concierge: 'Atelier Concierge',
      conciergeSub: 'For VIP private reservations, bridal parties, or consultations:',
      copyright: '© 2025 EVA Nail Studio. Nha Trang, Vietnam. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
  vi: {
    nav: {
      services: 'Dịch vụ',
      price: 'Bảng giá',
      interior: 'Không gian',
      portfolio: 'Bộ sưu tập',
      about: 'Giới thiệu',
      contact: 'Liên hệ',
      bookNow: 'Đặt lịch ngay',
      myBookings: 'Lịch hẹn của tôi',
      allScreens: 'Tất cả trang',
      tagline: 'Không gian tạo mẫu móng',
      concierge: 'Tư vấn',
      whatsappConcierge: 'Tư vấn WhatsApp',
    },
    hero: {
      tagline: 'EVA Soft Contour Atelier • Nha Trang',
      preheader: 'Không gian của những đường cong dịu êm & nghệ thuật làm móng hiện đại',
      headlinePart1: 'Vẻ đẹp trong từng',
      headlinePart2: 'đường cong tinh tế.',
      subtext:
        'Nail studio mang phong cách kiến trúc tối giản tại phố biển Nha Trang, tiêu chuẩn tiệt trùng y tế 3 bước và nghệ thuật sơn gel Nhật Bản bền đẹp.',
      bookAppointment: 'Đặt lịch hẹn',
      exploreServices: 'Khám phá dịch vụ',
      badge10Free: 'Gel Thuần Chay 10-Free',
      badgeAutoclave: 'Nồi hấp tiệt trùng y tế',
      badgeOasis: 'Ốc đảo bên Trần Phú',
      cardTitle: 'Không gian kiến trúc Soft Contour',
      cardSub: 'Lộc Thọ, Nha Trang • Gần bãi biển Trần Phú',
      hours: 'Mỗi ngày 09:00 – 20:00',
    },
    about: {
      eyebrow: 'Triết lý EVA',
      title: 'Khoảng lặng thư thái dành riêng cho bạn',
      statement:
        'EVA Nail Studio được sáng tạo như một sự giao thoa hài hòa giữa kiến trúc vòm mềm mại, ánh nắng biển dịu dàng và tay nghề tỉ mỉ. Chúng tôi tin rằng chăm sóc móng là nghệ thuật khởi nguồn từ sự thư thái, vệ sinh an toàn và vẻ đẹp tự nhiên vượt thời gian.',
      pillar1Title: 'Chăm sóc chuyên nghiệp',
      pillar1Desc:
        'Kỹ thuật nhặt da Russian e-file sạch sâu, tạo form móng chuẩn xác và sơn gel Nhật Bản không chứa axit giúp bảo vệ móng.',
      pillar1Number: '01 / Hoàn hảo',
      pillar2Title: 'Không gian trong lành',
      pillar2Desc:
        'Tiệt trùng 3 bước bằng nồi hấp y khoa, dụng cụ dùng một lần cho mỗi khách, trà thảo mộc tự nhiên và không mùi hoá chất khó chịu.',
      pillar2Number: '02 / Không khí trong lành',
      pillar3Title: 'Vị trí đắc địa Nha Trang',
      pillar3Desc:
        'Tọa lạc ngay trung tâm du lịch phố Tây Tân Lập, chỉ cách đường biển Trần Phú 2 dãy phố, rất thuận tiện cho du khách và người dân địa phương.',
      pillar3Number: '03 / Thư thái miền biển',
    },
    interior: {
      eyebrow: 'Thiết kế không gian',
      title: 'Không gian kiến trúc vòm Soft Contour',
      subtext:
        'Vòm thạch cao uốn lượn, chất liệu gỗ sồi sáng màu và da êm ái xua tan mọi mệt mỏi của chuyến đi.',
      galleryBadge: 'Sảnh chính & Thư viện màu',
      galleryCaption: 'Gỗ sồi ấm áp, đá mài micro-terrazzo và ánh sáng dịu mắt',
      podsBadge: 'Ghế làm móng chân Spa',
      podsTitle: 'Bồn ngâm chân thảo mộc riêng biệt',
      podsDesc:
        'Bồn ngâm gốm sứ với nước khoáng ấm, muối biển hồng Himalaya và ghế massage thư giãn lưng.',
      polishBadge: 'Hơn 400+ màu gel',
      polishTitle: 'Bảng màu gel nhập khẩu cao cấp',
      polishDesc:
        'Tuyển chọn các dòng sơn gel an toàn từ Tokyo và Seoul với hiệu ứng tráng gương ngọc trai Glazed và tông nude trong trẻo.',
      viewGallery: 'Xem ảnh không gian',
      hallTag: '01 / Sảnh Studio',
      spaces: {
        'main-gallery': {
          title: 'Sảnh chính & Khu vực chờ',
          subtitle: 'Gỗ sồi sáng, đá mài micro-terrazzo Ý & đường cong ánh sáng dịu êm',
          desc: 'Kiến trúc thạch cao uốn lượn liên hoàn, ánh sáng biển khuếch tán và vật liệu tự nhiên ấm áp mang lại sự thư thái tức thì.',
          badge: '01 / Sảnh Studio',
        },
        'foot-spa-pods': {
          title: 'Khu vực ngâm chân Spa thư giãn',
          subtitle: 'Ghế da công thái học & bồn gốm sứ thủ công',
          desc: 'Bồn ngâm gốm thiết kế riêng với nước khoáng lọc, muối biển thảo mộc và chế độ nâng đỡ lưng êm ái.',
          badge: '02 / Khu Pedi Pod',
        },
        'curated-gallery': {
          title: 'Bộ sưu tập sơn Gel cao cấp',
          subtitle: 'Vòm thạch cao phát sáng trưng bày hơn 400 sắc thái Nhật & Hàn',
          desc: 'Công thức an toàn không độc hại tuyển chọn từ Tokyo và Seoul, với các tông màu nude tự nhiên và hiệu ứng ngọc trai trong trẻo.',
          badge: '03 / Tủ sơn Gel',
        },
      },
    },
    services: {
      eyebrow: 'Liệu trình chăm sóc',
      title: 'Dịch vụ chọn lọc',
      subtext: 'Mỗi dịch vụ là sự hòa quyện giữa sự thoải mái tối đa và kỹ thuật chuẩn xác.',
      guestFavorite: 'Được yêu thích nhất',
      startingFrom: 'Giá chỉ từ',
      book: 'Đặt ngay',
      min: 'phút',
      vnd: 'VND',
      viewDetails: 'Chi tiết',
      hideDetails: 'Thu gọn',
      items: {
        'russian-manicure': {
          tag: 'Chăm sóc chuẩn xác',
          title: 'Manicure Cổ Điển & Kỹ Thuật Nga',
          desc: 'Xử lý viền da khô tỉ mỉ bằng đầu mài kim cương, tạo phom móng chuẩn xác, tẩy tế bào chết tay và massage phục hồi với kem keratin.',
          features: [
            'Làm sạch da cuticle bằng đầu mài kim cương',
            'Định hình phom móng theo cấu trúc giải phẫu',
            'Tẩy da chết dịu nhẹ và dưỡng ẩm da tay',
            'Phục hồi keratin và thoa tinh dầu hữu cơ',
          ],
        },
        'gel-polish-color': {
          tag: 'Sắc màu đặc trưng',
          title: 'Sơn Gel & Sắc Màu Cao Cấp',
          desc: 'Manicure chuẩn kỹ thuật Nga kết hợp các dòng sơn gel cao cấp từ Nhật Bản và Hàn Quốc. Độ bóng gương vượt trội, giữ bền đẹp từ 3–4 tuần.',
          features: [
            'Quy trình chuẩn bị móng kỹ thuật Nga toàn diện',
            'Lớp base cân bằng không axit của Nhật Bản',
            '2 lớp sơn gel sắc nét từ Tokyo và Seoul',
            'Lớp phủ bóng gương chống trầy xước cao cấp',
            'Bảo hành dặm móng miễn phí trong 7 ngày',
          ],
        },
        'architectural-extensions': {
          tag: 'Kiến trúc móng',
          title: 'Nối Móng Kiến Trúc Nghệ Thuật',
          desc: 'Đắp móng úp mềm tự nhiên kết hợp gia cố polygel với đường cong apex chuẩn xác. Nhẹ tênh, bền chắc và êm ái như móng thật.',
          features: [
            'Đo phom móng hoặc chọn móng úp vừa vặn từng ngón',
            'Điêu khắc tạo đường cong apex cân bằng kiến trúc',
            'Viền móng mỏng tự nhiên, không bị dày cộm',
            'Độ bền cao thích hợp cho du lịch và bơi biển',
          ],
        },
        'spa-pedicure': {
          tag: 'Nghi thức thư thái',
          title: 'Spa Pedicure Chữ Ký',
          desc: 'Ngâm chân sả chanh Việt Nam và muối hồng Himalaya, làm mịn gót chân hữu cơ, massage bấm huyệt chân và ủ tinh dầu thực vật ấm.',
          features: [
            'Bồn ngâm chân khoáng ấm hương sả tự nhiên',
            'Làm mịn da chân bằng đĩa mài dùng 1 lần an toàn',
            'Chăm sóc viền móng chân bằng máy mài chính xác',
            '15 phút massage bấm huyệt thư giãn bàn chân & bắp chân',
            'Ủ dưỡng sâu với dầu dừa ấm nguyên chất',
          ],
        },
        'minimalist-art-glaze': {
          tag: 'Nghệ thuật & Tráng gương',
          title: 'Nail Art Tối Giản & Tráng Gương Chrome',
          desc: 'Hiệu ứng tráng gương ngọc trai phong cách Hailey Bieber, viền micro-French siêu mảnh, ánh kim vàng hoặc họa tiết vẽ tay tối giản.',
          features: [
            'Tráng gương ngọc trai phong cách Hailey Bieber',
            'Đường viền micro-French siêu mảnh tinh tế',
            'Lá vàng cao cấp và nét vẽ thủ công',
            'Lớp phủ bảo vệ siêu bền màu',
          ],
        },
        'combo-relax': {
          tag: 'Trọn gói thư giãn',
          title: 'Combo: Gel Mani & Spa Pedi',
          desc: 'Dịch vụ kết hợp làm cùng lúc 4 tay hoặc tuần tự: Sơn gel manicure kỹ thuật Nga cùng Spa Pedicure và massage thư giãn.',
          features: [
            'Sơn gel manicure hoàn chỉnh với kỹ thuật xử lý da Nga',
            'Spa Pedicure cao cấp với bồn ngâm thảo mộc',
            'Massage thư giãn kết hợp cả tay và chân',
            'Thưởng thức trà thảo mộc tự nhiên và âm nhạc êm dịu',
          ],
        },
      },
    },
    priceList: {
      eyebrow: 'Bảng giá minh bạch',
      title: 'Menu Dịch Vụ & Bảng Giá',
      subtext:
        'Tất cả dịch vụ đã bao gồm bộ kìm dũa tiệt trùng riêng, trà chào đón thảo mộc và bảo hành gel miễn phí trong 7 ngày.',
      vacationTitle: 'Bạn đang du lịch tại Nha Trang?',
      vacationDesc:
        'Chúng tôi luôn sẵn sàng đón khách đặt hẹn trong ngày hoặc khách vãng lai, cũng như tổ chức buổi chăm sóc móng nhóm bạn.',
      luggageStorage: 'Hỗ trợ giữ hành lý miễn phí cho du khách',
      inquireGroup: 'Liên hệ đặt lịch nhóm hoặc sự kiện',
      tableTreatment: 'Dịch vụ',
      tableDuration: 'Thời gian',
      tablePrice: 'Giá (VND)',
      tableAction: 'Đặt chỗ',
      filterAll: 'Tất cả',
      filterMani: 'Làm móng tay',
      filterPedi: 'Làm móng chân',
      filterExtension: 'Nối móng',
      filterArt: 'Vẽ móng & Tháo gel',
      calculatorTitle: 'Tính giá gói liệu trình',
      calculatorDesc: 'Chọn nhiều dịch vụ để xem tổng thời gian và chi phí trọn gói:',
      calcTotal: 'Tổng chi phí:',
      calcEstimatedTime: 'Thời gian ước tính:',
      calcBookPackage: 'Đặt trọn gói đã chọn',
      items: {
        p1: 'Manicure Cổ Điển',
        p2: 'Manicure Sơn Gel',
        p3: 'Tháo Sơn Gel Nhẹ Nhàng',
        p4: 'Spa Pedicure Chữ Ký EVA',
        p5: 'Pedicure Sơn Gel',
        p6: 'Tráng Gương Glazed Donut / Chrome',
        p7: 'Nối Móng Toàn Phần (Móng Úp / Polygel)',
        p8: 'Dặm / Chỉnh Sửa Móng Nối',
        p9: 'Micro French / Baby Boomer Ombre',
        p10: 'Vẽ Nghệ Thuật Thủ Công (2 móng)',
        p11: 'Phục Hồi Móng Tự Nhiên IBX',
        p12: 'Trọn Gói Thư Giãn: Gel Mani + Spa Pedi',
      },
    },
    portfolio: {
      eyebrow: 'Bộ sưu tập móng',
      title: 'Những tác phẩm gần đây',
      subtext: 'Phong cách sang trọng nhẹ nhàng, đường cắt da sạch mịn và màu sắc trong trẻo ven biển.',
      filterAll: 'Tất cả',
      filterMani: 'Tay',
      filterPedi: 'Chân',
      filterArt: 'Vẽ nghệ thuật',
      filterFrench: 'French & Ombre',
      bookThisDesign: 'Làm mẫu này',
      instagramPrompt: 'Xem hơn 500+ mẫu móng đẹp trên Instagram @evanailstudio.vn',
      bespokeDesignBooking: 'Thiết kế móng & Nail Art theo yêu cầu',
      items: {
        'port-1': {
          title: 'French Cổ Điển Kỹ Thuật Nga',
          tag: 'French',
          desc: 'Xử lý viền cuticle sạch tinh tế cùng lớp bóng phủ tráng gương',
          studioIndex: '01 / Studio',
        },
        'port-2': {
          title: 'Hoa Nổi 3D Điêu Khắc Kiến Trúc',
          tag: 'Đắp nổi 3D',
          desc: 'Cánh hoa nổi nghệ thuật kết hợp họa tiết da báo mềm mại',
          studioIndex: '02 / Studio',
        },
        'port-3': {
          title: 'Thiết Kế Riêng Cho Khách Hàng',
          tag: 'Mẫu khách',
          desc: 'Dáng móng hạnh nhân hiện đại kết hợp đường viền French tinh xảo',
          studioIndex: '03 / Studio',
        },
        'port-4': {
          title: 'Liệu Trình Spa Chân & Pedicure',
          tag: 'Chăm sóc Spa',
          desc: 'Dưỡng ẩm sâu hương biển thư giãn trên ghế lười công thái học',
          studioIndex: '04 / Studio',
        },
        'port-5': {
          title: 'Pedicure Vẽ Hoa Thực Vật Thủ Công',
          tag: 'Pedicure',
          desc: 'Họa tiết hoa lá vẽ tay mềm mại viền đầu móng trắng tinh tế',
          studioIndex: '05 / Studio',
        },
        'port-6': {
          title: 'Nail Art Ngọc Lam Phong Cách Trang Sức',
          tag: 'Đính đá cao cấp',
          desc: 'Điểm xuyết ánh kim vàng thủ công và chi tiết 3D nổi bật',
          studioIndex: '06 / Studio',
        },
        'port-7': {
          title: 'Sắc Xanh Lime & Hoa Nổi Trong Suốt',
          tag: 'Neon 3D',
          desc: 'Điểm nhấn mùa hè rực rỡ với hoa 3D trong suốt thời thượng',
          studioIndex: '07 / Studio',
        },
      },
    },
    schedule: {
      eyebrow: 'Lịch biểu trực tiếp',
      title: 'Lịch biểu kín chỗ của studio',
      subtext:
        'Xem mức độ kín lịch của studio trong 3 tuần tới và chủ động chọn khung giờ thảnh thơi, thư giãn trọn vẹn nhất.',
      weekCurrent: 'Tuần này',
      weekNext: 'Tuần tới',
      weekAfter: 'Sau 2 tuần',
      legendFree: 'Nhiều chỗ trống (>5)',
      legendModerate: 'Vừa phải (2–4 chỗ)',
      legendBusy: 'Gần kín chỗ (1 chỗ / Đã đặt)',
      occupancyLabel: 'Mật độ trong ngày',
      availableSlots: 'khung giờ còn trống',
      selectDayPrompt: 'Nhấn vào ngày bất kỳ để xem chi tiết các khung giờ trống và đặt chỗ nhanh',
      slotsFor: 'Các khung giờ trống ngày',
      morning: 'Buổi sáng (09:00 – 12:00)',
      afternoon: 'Buổi chiều (12:00 – 16:00)',
      evening: 'Buổi tối (16:00 – 20:30)',
      slotAvailable: 'Còn chỗ',
      slotFew: 'Còn 1 chỗ duy nhất',
      slotBooked: 'Đã kín lịch',
      bookSelectedSlot: 'Đặt lịch khung giờ này',
      bookThisDay: 'Đặt lịch cho ngày này',
      conciergeWaitlist:
        'Cần đặt giờ đặc biệt hoặc hẹn gấp trong ngày? Vui lòng nhắn tin trực tiếp qua WhatsApp cho quản lý để được hỗ trợ ưu tiên.',
      daysOfWeek: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
    },
    features: {
      eyebrow: 'Tiêu chuẩn EVA',
      title: 'Vì sao khách hàng yêu thích EVA Nail Studio',
      feat1Title: 'Tiệt trùng chuẩn Y Khoa',
      feat1Desc: 'Quy trình 3 bước với nồi hấp tiệt trùng y tế. Kìm, dũa, que gỗ dùng một lần cho từng khách.',
      feat1Badge: 'An toàn tuyệt đối',
      feat2Title: 'Gel 10-Free Lành Tính',
      feat2Desc: 'Sơn gel thuần chay nhập khẩu từ Nhật Bản và Hàn Quốc, dịu nhẹ cho mẹ bầu và móng yếu.',
      feat2Badge: 'Vật liệu tự nhiên',
      feat3Title: 'Ghế ngồi công thái học',
      feat3Desc: 'Ghế da êm ái nâng đỡ cột sống, hệ thống hút bụi lọc khí êm ru và âm nhạc thư giãn.',
      feat3Badge: 'Thư thái tuyệt đối',
      feat4Title: 'Phục vụ 4 ngôn ngữ',
      feat4Desc: 'Đội ngũ giao tiếp lưu loát bằng Tiếng Việt, Tiếng Anh, Tiếng Nga và Tiếng Hàn.',
      feat4Badge: 'Chào đón toàn cầu',
    },
    reviews: {
      eyebrow: 'Đánh giá chân thật',
      title: 'Được yêu mến bởi người dân & du khách',
      googleRating: '5.0 trên Google Maps (320+ lượt đánh giá)',
      items: {
        'rev-1': {
          author: 'Elena R.',
          role: 'Khách du lịch & Digital Nomad',
          quote:
            '“Tiệm nail thẩm mỹ và yên tĩnh nhất tại Nha Trang. Không gian tuyệt đẹp, bộ móng gel của tôi giữ bền suốt 4 tuần không hề sứt mẻ dù ngày nào cũng tắm biển.”',
        },
        'rev-2': {
          author: 'Linh Nguyễn',
          role: 'Cư dân Nha Trang',
          quote:
            '“Trải nghiệm làm móng tuyệt vời nhất tại Nha Trang! Không gian đường cong rất êm dịu, không có mùi hoá chất nồng, chuyên viên vô cùng tỉ mỉ và chu đáo.”',
        },
        'rev-3': {
          author: 'Sarah M.',
          role: 'Melbourne, Úc',
          quote:
            '“Một viên ngọc ẩn thực sự cho du khách. Tiêu chuẩn vệ sinh khử trùng y tế cao, lớp tráng gương kiểu Pháp hoàn hảo và dịch vụ rất nồng hậu. Đặt lịch qua WhatsApp cực kỳ dễ dàng.”',
        },
      },
    },
    contact: {
      eyebrow: 'Địa chỉ studio',
      title: 'Tọa lạc ngay trung tâm Nha Trang',
      subtext:
        'Vị trí thuận tiện tại khu phố Tây Tân Lập, gần tháp Trầm Hương và các quán cà phê xinh xắn.',
      addressTitle: 'Địa chỉ',
      addressValue: '18B Nguyễn Thiện Thuật, Tân Lập, Nha Trang, Khánh Hòa, Việt Nam',
      hoursTitle: 'Giờ mở cửa',
      hoursValue: 'Thứ Hai – Chủ Nhật: 09:00 – 20:00 (Nhận khách trễ nhất 19:00)',
      conciergeTitle: 'Hỗ trợ khách hàng',
      conciergeValue: 'Hotline / WhatsApp: +84 (0) 90 123 4567 • Hỗ trợ Zalo & Instagram',
      whatsappBtn: 'Nhắn qua WhatsApp',
      mapsBtn: 'Chỉ đường Google Maps',
      mapSubtext: 'Chỉ 3 phút đi bộ từ Quảng trường 2/4 và bãi biển',
      directions: 'Chỉ đường',
    },
    booking: {
      atelierReservation: 'Đặt hẹn trước tại EVA',
      modalTitle: 'Đặt Lịch Hẹn Trực Tuyến',
      modalSub: 'Chúng tôi sẽ liên hệ qua điện thoại hoặc WhatsApp trong vòng 15 phút để xác nhận.',
      fullName: 'Họ và tên',
      fullNamePlaceholder: 'Ví dụ: Nguyễn Linh Chi',
      contactLabel: 'Số điện thoại / WhatsApp / Zalo',
      contactPlaceholder: '+84 hoặc số quốc tế của bạn',
      treatmentLabel: 'Dịch vụ mong muốn',
      selectMaster: 'Kỹ thuật viên yêu thích',
      anyMaster: 'Bất kỳ kỹ thuật viên nào',
      preferredDate: 'Ngày hẹn',
      timeSlot: 'Khung giờ',
      specialNotes: 'Ghi chú / Yêu cầu tháo gel cũ',
      specialNotesPlaceholder: 'Cần tháo gel cũ, làm móng đôi, hoặc mẫu nail art riêng...',
      submitBtn: 'Xác nhận đặt lịch',
      submitting: 'Đang gửi yêu cầu...',
      successMsg: 'Cảm ơn bạn! Yêu cầu đặt lịch đã được ghi nhận. Lễ tân sẽ liên hệ sớm qua Zalo/WhatsApp.',
      ticketTitle: 'Phiếu xác nhận lịch hẹn của bạn',
      ticketCode: 'Mã số đặt chỗ',
      close: 'Đóng',
      viewTicket: 'Xem phiếu hẹn',
      cancelBooking: 'Hủy lịch hẹn',
      noBookings: 'Bạn chưa có lịch hẹn nào được lưu',
      addToCalendar: 'Thêm vào Lịch',
      copyWhatsApp: 'Gửi qua WhatsApp',
      guestLabel: 'Khách hàng',
      statusConfirmed: 'Đã xác nhận',
      refLabel: 'Mã đặt chỗ',
      periods: {
        morning: 'Buổi sáng',
        noon: 'Buổi trưa',
        afternoon: 'Buổi chiều',
        evening: 'Buổi tối',
      },
      customPackage: 'Gói dịch vụ theo yêu cầu',
    },
    footer: {
      description:
        'Ốc đảo làm đẹp móng kiến trúc tối giản, chăm sóc móng thư thái và sơn gel nghệ thuật Nhật Bản tại thành phố biển Nha Trang.',
      studioAtelier: 'Địa chỉ Studio',
      address: '18B Nguyễn Thiện Thuật, Tân Lập, Nha Trang, Khánh Hòa, Việt Nam',
      hours: 'Mở cửa hàng ngày: 09:00 – 20:00',
      getDirections: 'Xem đường đi trên Google Maps',
      concierge: 'Hỗ trợ đặt hẹn',
      conciergeSub: 'Dành cho khách VIP, nhóm cưới hoặc tư vấn dịch vụ:',
      copyright: '© 2025 EVA Nail Studio. Nha Trang, Việt Nam. Bản quyền đã được bảo lưu.',
      privacy: 'Chính sách bảo mật',
      terms: 'Điều khoản dịch vụ',
    },
  },
  ko: {
    nav: {
      services: '서비스',
      price: '가격표',
      interior: '인테리어',
      portfolio: '포트폴리오',
      about: '소개',
      contact: '오시는 길',
      bookNow: '예약하기',
      myBookings: '내 예약',
      allScreens: '전체 화면',
      tagline: '소프트 컨투어 아틀리에',
      concierge: '컨시어지',
      whatsappConcierge: 'WhatsApp 컨시어지',
    },
    hero: {
      tagline: 'EVA 소프트 컨투어 아틀리에 • 나트랑',
      preheader: '부드러운 곡선과 모던 네일 미학의 힐링 공간',
      headlinePart1: '모든 곡선에 담긴',
      headlinePart2: '우아한 아름다움.',
      subtext:
        '나트랑 해변가에 위치한 힐링 네일 스튜디오. 3단계 의료용 멸균 시스템과 섬세한 프리미엄 일본식 젤 네일 케어를 경험해보세요.',
      bookAppointment: '온라인 예약',
      exploreServices: '서비스 둘러보기',
      badge10Free: '10-Free 비건 젤',
      badgeAutoclave: '의료용 멸균 오토클레이브',
      badgeOasis: '쩐푸 해변 오아시스',
      cardTitle: '소프트 컨투어 아틀리에 인테리어',
      cardSub: '나트랑 록토 • 쩐푸 해변가 도보 3분',
      hours: '매일 09:00 – 20:00',
    },
    about: {
      eyebrow: 'EVA 철학',
      title: '온전한 쉼을 위한 프리미엄 힐링 공간',
      statement:
        'EVA 네일 스튜디오는 나트랑의 부드러운 해안 채광과 유기적 아치 곡선, 정교한 일본식 장인 기술이 조화를 이루는 안식처입니다. 위생과 휴식, 자연스러운 아름다움을 최우선으로 합니다.',
      pillar1Title: '전문 케어',
      pillar1Desc: '정밀한 러시안 드릴 큐티클 케어와 손톱 손상 없는 무산성 일본 젤 시스템.',
      pillar1Number: '01 / 완벽함',
      pillar2Title: '청결하고 쾌적한 공기',
      pillar2Desc: '병원급 3단계 고압 멸균 소독, 1인 1키트 사용, 무취 공기 정화 시스템.',
      pillar2Number: '02 / 청정 공기',
      pillar3Title: '나트랑 여행자 중심가',
      pillar3Desc: '쩐푸 해변 및 여행자 거리 중심부에 위치하여 여행 중 편리하게 방문할 수 있습니다.',
      pillar3Number: '03 / 해변의 여유',
    },
    interior: {
      eyebrow: '공간 디자인',
      title: '아키텍처럴 소프트 컨투어 스튜디오',
      subtext: '은은한 아치형 벽면과 오크 원목, 편안한 이탈리아 가죽 체어가 여행의 피로를 풀어줍니다.',
      galleryBadge: '메인 갤러리 & 라운지',
      galleryCaption: '라이트 오크와 은은한 간접 조명의 조화',
      podsBadge: '페디큐어 라운지',
      podsTitle: '독립형 프라이빗 풋 스파 포드',
      podsDesc: '미네랄 해초 소금 족욕과 허리 피로를 풀어주는 맞춤형 릴랙스 체어.',
      polishBadge: '400종 이상 젤 보유',
      polishTitle: '도쿄 & 서울 셀렉트 컬러 갤러리',
      polishDesc: '글레이즈드 도넛 펄, 시럽 젤, 차분한 누드 톤의 프리미엄 라인업.',
      viewGallery: '인테리어 갤러리 보기',
      hallTag: '01 / 스튜디오 홀',
      spaces: {
        'main-gallery': {
          title: '메인 갤러리 & 라운지',
          subtitle: '밝은 오크 원목, 이탈리아 마이크로 테라조 & 은은한 곡선 조명',
          desc: '유려한 곡선의 회벽 건축, 부드러운 해안 채광, 따뜻한 자연 질감이 깊은 평온함을 선사합니다.',
          badge: '01 / 스튜디오 홀',
        },
        'foot-spa-pods': {
          title: '프라이빗 풋 스파 포드',
          subtitle: '인체공학적 가죽 체어 & 플루티드 세라믹 베이슨',
          desc: '정수된 미네랄 온천수와 허브 솔트 입욕, 허리 지지대가 마련된 맞춤형 세라믹 스파 체어.',
          badge: '02 / 페디큐어 포드',
        },
        'curated-gallery': {
          title: '큐레이티드 젤 & 폴리시 갤러리',
          subtitle: '400가지 이상의 일본 및 한국 프리미엄 컬러가 전시된 아치형 부스',
          desc: '도쿄와 서울에서 공수한 저자극 무독성 럭셔리 포뮬러와 자연스러운 누드 글레이즈, 펄 피니시 컬렉션.',
          badge: '03 / 폴리시 알코브',
        },
      },
    },
    services: {
      eyebrow: '웰니스 트리트먼트',
      title: '추천 케어 프로그램',
      subtext: '인체공학적 안락함과 섬세한 디테일, 안전한 재료의 조화.',
      guestFavorite: '인기 서비스',
      startingFrom: '시작 가격',
      book: '예약',
      min: '분',
      vnd: '동 (VND)',
      viewDetails: '상세보기',
      hideDetails: '접기',
      items: {
        'russian-manicure': {
          tag: '정밀 케어',
          title: '클래식 & 러시안 매니큐어',
          desc: '다이아몬드 비트를 이용한 섬세한 건식 큐티클 케어, 이상적인 쉐입 교정, 핸드 스크럽 및 케라틴 영양 마사지.',
          features: [
            '다이아몬드 비트 머신 큐티클 클리닝',
            '손톱 밸런스 맞춤 쉐입 교정',
            '저자극 각질 제거 & 핸드 스크럽',
            '케라틴 복원 및 유기농 큐티클 오일 케어',
          ],
        },
        'gel-polish-color': {
          tag: '시그니처 컬러',
          title: '젤 폴리쉬 & 컬러 쿠튀르',
          desc: '프리미엄 일본/한국 젤을 사용한 정밀 건식 매니큐어. 유리알 같은 맑은 광택과 3~4주 지속력 보장.',
          features: [
            '러시안 하드웨어 정밀 케어 풀 코스',
            '무산성 일본 정품 오버레이 베이스',
            '도쿄/서울 직수입 2코트 발색',
            '스크래치 방지 고광택 미러 탑젤',
            '7일간 무상 보증 및 터치업 지원',
          ],
        },
        'architectural-extensions': {
          tag: '아키텍처 연장',
          title: '아키텍처 네일 익스텐션',
          desc: '완벽한 아펙스 곡선을 살린 소프트 젤 팁 & 폴리젤 보강 연장. 가볍고 탄탄하며 자연스러운 착용감.',
          features: [
            '개인별 맞춤 팁 사이징 및 폼 맞춤',
            '아펙스 밸런스 입체 스컬프팅',
            '두껍지 않고 얇고 자연스러운 사이드월',
            '여행 및 물놀이에도 끄떡없는 고강도 유지력',
          ],
        },
        'spa-pedicure': {
          tag: '홀리스틱 리추얼',
          title: '시그니처 스파 패디큐어',
          desc: '베트남 레몬그라스와 핑크 히말라야 솔트 족욕, 저자극 각질 필링, 종아리 지압 마사지 및 보태니컬 오일 랩핑.',
          features: [
            '레몬그라스 따뜻한 미네랄 풋 바스',
            '일회용 디스크를 사용한 위생적인 발 각질 케어',
            '머신 정밀 발톱 큐티클 정리',
            '15분 릴랙싱 발 & 종아리 리플렉솔로지 마사지',
            '따뜻한 코코넛 오일 보습 마무리',
          ],
        },
        'minimalist-art-glaze': {
          tag: '아트 & 글레이즈',
          title: '미니멀 아트 & 크롬 글레이즈',
          desc: '헤일리 비버 스타일 펄 글레이즈 도넛 광택, 마이크로 프렌치, 섬세한 골드 크롬 포인트 또는 핸드페인팅 라인 아트.',
          features: [
            '헤일리 비버 펄 글레이즈드 크롬 피니시',
            '초미세 마이크로 프렌치 라인',
            '섬세한 골드 호일 및 핸드 페인팅 곡선 아트',
            '고내구성 실런트 탑코트',
          ],
        },
        'combo-relax': {
          tag: '올인원 힐링',
          title: '콤보: 젤 매니 & 스파 패디',
          desc: '동시 또는 순차 시술: 러시안 큐티클 케어 젤 매니큐어와 시그니처 스파 패디큐어, 릴랙싱 마사지 풀 패키지.',
          features: [
            '러시안 케어가 포함된 젤 매니큐어 풀 코스',
            '허브 족욕이 포함된 시그니처 스파 패디큐어',
            '손과 발 릴랙싱 듀얼 마사지',
            '유기농 웰컴 허브티 및 힐링 음악',
          ],
        },
      },
    },
    priceList: {
      eyebrow: '투명한 정찰제',
      title: '시술 메뉴 및 요금 안내',
      subtext: '모든 시술에는 일회용 위생 키트, 웰컴 유기농 티, 7일 젤 리터치 보증이 포함됩니다.',
      vacationTitle: '나트랑 여행 중이신가요?',
      vacationDesc: '당일 예약 및 워크인 방문도 환영하며, 무료 짐 보관 서비스를 제공합니다.',
      luggageStorage: '여행객 무료 짐 보관 서비스 제공',
      inquireGroup: '그룹 또는 커플 스파 문의',
      tableTreatment: '시술명',
      tableDuration: '소요시간',
      tablePrice: '가격 (VND)',
      tableAction: '예약',
      filterAll: '전체',
      filterMani: '매니큐어',
      filterPedi: '페디큐어',
      filterExtension: '연장',
      filterArt: '아트 & 쏙오프',
      calculatorTitle: '예상 금액 계산기',
      calculatorDesc: '원하시는 시술을 선택하여 총 소요시간과 가격을 확인해보세요:',
      calcTotal: '총 예상 금액:',
      calcEstimatedTime: '예상 소요 시간:',
      calcBookPackage: '선택한 패키지 예약하기',
      items: {
        p1: '클래식 매니큐어',
        p2: '젤 폴리쉬 매니큐어',
        p3: '저자극 젤 쏙오프',
        p4: 'EVA 시그니처 스파 패디큐어',
        p5: '젤 폴리쉬 패디큐어',
        p6: '글레이즈드 도넛 / 크롬 피니시',
        p7: '풀 익스텐션 연장 (소프트 젤 / 폴리젤)',
        p8: '연장 리필 / 보수',
        p9: '마이크로 프렌치 / 베이비부머 옴브레',
        p10: '핸드페인팅 아트 (2개 손톱 기준)',
        p11: 'IBX 자연 네일 영양 복원 트리트먼트',
        p12: '풀 릴랙스: 젤 매니 + 스파 패디',
      },
    },
    portfolio: {
      eyebrow: '포트폴리오',
      title: '최신 디자인 갤러리',
      subtext: '올드머니 무드의 콰이어트 럭셔리, 깔끔한 큐티클 라인과 투명한 광택.',
      filterAll: '전체',
      filterMani: '손 네일',
      filterPedi: '발 패디',
      filterArt: '네일 아트',
      filterFrench: '프렌치 & 누드',
      bookThisDesign: '이 디자인 예약',
      instagramPrompt: '인스타그램 @evanailstudio.vn 에서 500개 이상의 디자인을 확인하세요',
      bespokeDesignBooking: '맞춤형 네일 아트 & 디자인',
      items: {
        'port-1': {
          title: '클래식 러시안 프렌치',
          tag: '프렌치',
          desc: '완벽하게 정돈된 큐티클 라인과 은은한 글레이즈 광택',
          studioIndex: '01 / 스튜디오',
        },
        'port-2': {
          title: '입체 3D 플로럴 아트',
          tag: '3D 스컬프트',
          desc: '입체적인 꽃잎 텍스처와 섬세한 레오파드 포인트 라인',
          studioIndex: '02 / 스튜디오',
        },
        'port-3': {
          title: '고객 맞춤 아몬드 프렌치',
          tag: '고객 맞춤',
          desc: '세련된 아몬드 쉐입과 정교한 프렌치 라인',
          studioIndex: '03 / 스튜디오',
        },
        'port-4': {
          title: '홀리스틱 스파 & 패디 힐링',
          tag: '스파 케어',
          desc: '인체공학 라운지 체어에서 즐기는 바다 미네랄 보습 케어',
          studioIndex: '04 / 스튜디오',
        },
        'port-5': {
          title: '핸드페인팅 플로럴 패디',
          tag: '패디큐어',
          desc: '섬세한 보태니컬 핸드 드로잉과 깔끔한 화이트 팁',
          studioIndex: '05 / 스튜디오',
        },
        'port-6': {
          title: '아쿠아마린 쥬얼리 네일 아트',
          tag: '골드 쿠튀르',
          desc: '골드 디테일과 고급스러운 입체 쥬얼리 스톤',
          studioIndex: '06 / 스튜디오',
        },
        'port-7': {
          title: '네온 라임 입체 블룸',
          tag: '네온 3D',
          desc: '투명한 3D 입체 플로럴이 돋보이는 생동감 있는 시즌 아트',
          studioIndex: '07 / 스튜디오',
        },
      },
    },
    schedule: {
      eyebrow: '실시간 예약 현황',
      title: '스튜디오 예약 현황 일정',
      subtext:
        '향후 3주간의 살롱 예약 현황을 한눈에 파악하고 가장 여유롭고 조용한 시간대를 직접 선택해 예약하세요.',
      weekCurrent: '이번 주',
      weekNext: '다음 주',
      weekAfter: '2주 후',
      legendFree: '여유로움 (>5타임)',
      legendModerate: '보통 (2–4타임)',
      legendBusy: '마감 임박 (1타임 / 마감)',
      occupancyLabel: '일일 예약률',
      availableSlots: '개 예약 가능',
      selectDayPrompt: '예약 가능 시간대를 확인하려면 요일을 탭하세요',
      slotsFor: '예약 가능 시간대:',
      morning: '오전 (09:00 – 12:00)',
      afternoon: '오후 (12:00 – 16:00)',
      evening: '저녁 (16:00 – 20:30)',
      slotAvailable: '예약 가능',
      slotFew: '1자리 남음',
      slotBooked: '예약 마감',
      bookSelectedSlot: '이 시간대로 예약하기',
      bookThisDay: '선택한 날짜로 예약하기',
      conciergeWaitlist:
        '다른 시간대나 당일 긴급 예약이 필요하신가요? 카카오톡/WhatsApp 컨시어지로 문의주시면 빠른 조율 및 대기 명단 등록을 도와드립니다.',
      daysOfWeek: ['월', '화', '수', '목', '금', '토', '일'],
    },
    features: {
      eyebrow: '아틀리에 기준',
      title: 'EVA를 선택하는 이유',
      feat1Title: '의료용 멸균 시스템',
      feat1Desc: '국제 기준 3단계 멸균 소독. 모든 고객에게 일회용 위생 파일 및 버퍼 제공.',
      feat1Badge: '완벽한 위생',
      feat2Title: '10-Free 안전 성분',
      feat2Desc: '도쿄와 서울 직수입 비건 무산성 젤. 임산부도 안심하고 받을 수 있습니다.',
      feat2Badge: '안전한 원료',
      feat3Title: '인체공학 힐링 체어',
      feat3Desc: '편안한 가죽 메모리폼 체어, 무소음 공기청정 환기 시스템과 힐링 음악.',
      feat3Badge: '편안한 휴식',
      feat4Title: '4개 국어 소통',
      feat4Desc: '한국어, 영어, 러시아어, 베트남어 지원으로 의사소통이 편리합니다.',
      feat4Badge: '외국인 환영',
    },
    reviews: {
      eyebrow: '고객 리뷰',
      title: '현지인과 여행객이 모두 만족한 공간',
      googleRating: '구글 맵 평점 5.0 (리뷰 320개 이상)',
      items: {
        'rev-1': {
          author: 'Elena R.',
          role: '여행자 & 디지털 노마드',
          quote:
            '“나트랑에서 가장 감성적이고 조용한 힐링 살롱이에요. 인테리어도 너무 아름답고, 매일 바다 수영을 했는데도 4주 동안 젤 네일이 끄떡없었어요.”',
        },
        'rev-2': {
          author: 'Linh Nguyen',
          role: '나트랑 현지 거주민',
          quote:
            '“나트랑에서 경험한 네일 & 페디큐어 중 최고였어요! 곡선 인테리어가 마음을 차분하게 해주고 화학 약품 냄새도 전혀 나지 않으며, 아티스트분들이 아주 꼼꼼합니다.”',
        },
        'rev-3': {
          author: 'Sarah M.',
          role: '호주 멜버른',
          quote:
            '“여행자들에게 최고의 발견. 병원 수준의 위생 소독과 완벽한 프렌치 글레이즈, 친절한 서비스까지 만족스러웠습니다. WhatsApp 예약도 정말 간편했어요.”',
        },
      },
    },
    contact: {
      eyebrow: '오시는 길',
      title: '나트랑 중심가 위치',
      subtext: '탄랍 여행자 거리에 위치하며, 쩐푸 해변 및 야시장과 도보 3분 거리입니다.',
      addressTitle: '스튜디오 주소',
      addressValue: '18B Nguyễn Thiện Thuật, Tân Lập, Nha Trang, Khánh Hòa, Vietnam',
      hoursTitle: '영업 시간',
      hoursValue: '월 – 일요일: 09:00 – 20:00 (마지막 입장 19:00)',
      conciergeTitle: '예약 및 고객센터',
      conciergeValue: '카카오톡 / WhatsApp: +84 (0) 90 123 4567 • 인스타그램 예약 가능',
      whatsappBtn: 'WhatsApp 상담',
      mapsBtn: '구글 맵에서 열기',
      mapSubtext: '2/4 광장 및 해변에서 도보 3분',
      directions: '길찾기',
    },
    booking: {
      atelierReservation: '프라이빗 아틀리에 예약',
      modalTitle: '온라인 시술 예약',
      modalSub: '예약 신청 후 15분 이내에 카카오톡 또는 WhatsApp으로 확정 안내를 드립니다.',
      fullName: '예약자 성함',
      fullNamePlaceholder: '예: 김수진 (Elena)',
      contactLabel: '연락처 (카카오톡 ID / 전화번호)',
      contactPlaceholder: '+82 10... 또는 카톡 ID',
      treatmentLabel: '원하시는 시술',
      selectMaster: '선호 아티스트',
      anyMaster: '지정 없음 (빠른 예약)',
      preferredDate: '희망 날짜',
      timeSlot: '희망 시간',
      specialNotes: '요청 사항 / 기존 젤 쏙오프 여부',
      specialNotesPlaceholder: '기존 젤 쏙오프 필요 여부, 원하는 아트 사진 등...',
      submitBtn: '예약 신청하기',
      submitting: '예약 처리 중...',
      successMsg: '감사합니다! 예약 요청이 접수되었습니다. 곧 연락드리겠습니다.',
      ticketTitle: '모바일 예약 확인증',
      ticketCode: '예약 번호',
      close: '닫기',
      viewTicket: '티켓 확인',
      cancelBooking: '예약 취소',
      noBookings: '저장된 예약 내역이 없습니다',
      addToCalendar: '캘린더에 추가',
      copyWhatsApp: 'WhatsApp으로 공유',
      guestLabel: '고객명',
      statusConfirmed: '예약 확정',
      refLabel: '예약 코드',
      periods: {
        morning: '오전',
        noon: '낮',
        afternoon: '오후',
        evening: '저녁',
      },
      customPackage: '맞춤형 패키지 프로그램',
    },
    footer: {
      description:
        '나트랑 해변에서 즐기는 미니멀 일본 젤 아트와 힐링 스파 트리트먼트. 편안한 공간에서 전하는 섬세한 손길.',
      studioAtelier: '스튜디오 위치',
      address: '18B Nguyễn Thiện Thuật, Tân Lập, Nha Trang, Khánh Hòa, Vietnam',
      hours: '매일 09:00 – 20:00',
      getDirections: '구글 맵 길찾기',
      concierge: '예약 컨시어지',
      conciergeSub: 'VIP 프라이빗 예약 및 단체 예약 문의:',
      copyright: '© 2025 EVA Nail Studio. Nha Trang, Vietnam. All rights reserved.',
      privacy: '개인정보 처리방침',
      terms: '이용약관',
    },
  },
};
