import { ServiceItem, PriceListItem, PortfolioItem, InteriorSpace, Master, ReviewItem } from '../types';

export const STUDIO_INFO = {
  name: 'EVA Nail Studio',
  subtitle: 'Soft Contour Atelier • Nha Trang',
  address: '18B Nguyễn Thiện Thuật, Tân Lập, Nha Trang, Khánh Hòa, Vietnam',
  hours: '09:00 – 20:00 (Daily)',
  phone: '+84 90 123 4567',
  whatsappUrl: 'https://wa.me/84901234567',
  mapsUrl: 'https://maps.google.com/?q=18B+Nguyen+Thien+Thuat+Nha+Trang+Vietnam',
  instagram: '@evanailstudio.vn',
  instagramUrl: 'https://instagram.com',
  rating: '5.0',
  reviewCount: '320+',
  headerLogo:
    'https://lh3.googleusercontent.com/aida/AEtjO1WsXxMLzTZXwNTshl5exDTmvhoLvR6jRH815zA_txLhoofyrW7_-8PkUuGt7v3SEjVaGR5cGz5_XQgShex0745hVJzMBevPAgafcL9C46VVKiECo1U3-mcrad9MyQV32OCINZRjVPRCSd7kAbFMgxqlgFCcVElrDYkteZD4EIF7pWxDna-rYSDfDE2rhgotTaWC2jdZglRD2Xj8yEWz8xNR7QcXMx7nIU_rB8pnYYgAOqGLC6mNF-HAF_Rg',
  footerLogo:
    'https://lh3.googleusercontent.com/aida/AEtjO1XcYDUxet55wWKBLhfk_QVELUZY-aRRhE_5Qu2sLjtJwQPQCTY8KpScFW5uNoG-Y5wUaVQx1dqCtX9Ybjip-jUJAoeDfAkmAhY_J2kzRkGIGZBWGNDTC31NNHmNNe38_ZeIafYBXvf7efVoYwYtVAbJF4Z0Fqzj1qxKT0VBad_kp8l3di-A-ITWHQKsLBcjnZHRQP2MU01wtXhV3z3UpEtxRZc603W9aXyRHlv0cFLLZs0Nd4o-sz85DOtT',
  heroInteriorImg:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAfJkhhxg52ung1gbpIleys22nqt6uTNCuPWDlONnotfZMR_mzfxgah6UMqsmySJadqbNE5bfqKMh1TUdDUt_cQ730Y84DRzBFL2UgUGlrPO8Tu1JKoqK9Kro7ZE2aEzhxomNANdBCJt6LIZYUq64c4jSRJ6wgkZTqFvubTL5m3_zvotF95anEQ-WTJk5COkzys8Rxvazj-OsS-LYwNiwWmrhiJOq76KRSdGEzS2VY0rWmO3k-tU-_-c9r5G0BIr4Uo55A',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'russian-manicure',
    titleKey: 'Classic & Russian Manicure',
    category: 'manicure',
    durationMin: 45,
    priceVnd: 250000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCo_qFC1HQ7yCL43hKsmEqdaSiuUmID3S7_2FK164NsBX7_FKuI9PBdQLBIjL85kXGBsqpjmdgL-1DaicC2HL2LF1GOfNZ3e6A9lQnhRP6pPFyc6oBz3q13amFLrZk5p-suRajlQInj1EA8ekEoTqzerTe8bCYWtsK2icJ0vH8ujzs-qnWY28CwbMf7ST3I1IzUilK4bWf6U1UxvJV21zkcIsHtciyhSEOjqeWPz2WVI3lEZhVd9fiVlw',
    tagKey: 'Precision Care',
    descKey:
      'Meticulous dry cuticle diamond e-filing, nail shaping to contour perfection, exfoliating hand scrub, and restorative keratin cream massage.',
    features: [
      'Diamond bit hardware cuticle cleaning',
      'Anatomical nail shaping',
      'Dead skin gentle peeling & scrub',
      'Keratin restoration and organic cuticle oil',
    ],
  },
  {
    id: 'gel-polish-color',
    titleKey: 'Gel Polish & Color Couture',
    category: 'manicure',
    durationMin: 60,
    priceVnd: 380000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDA67Ji8rLzmvkd0KR1fCWiZpcLAPxInvNwzezQnGG9txqCzfuwLxyPHhJD_6kz90tlKT2eOgLjR0jHKv1L_CakucxDuNpZgf5pmv-k1OQiCldZtN1Ya8S6tLqT3KBBjoN4RV2NGh5NxY2Pb2I3ZDTKsSRgUw2cqQYa34aGgj5b1na7z8amr0FZvJM_oXgACx7rOGhSZ6_K7gQVgqcvYOaqS5PkUYEIurCPYH5bCHpy5q8wHnvtH6vHTA',
    isPopular: true,
    tagKey: 'Signature Color',
    descKey:
      'Comprehensive dry manicure paired with premium Japanese/Korean gel formulas. Superior glass-like reflection guaranteed chip-resistant for 3–4 weeks.',
    features: [
      'Full Russian hardware manicure prep',
      'Non-acid Japanese alignment base coat',
      '2 coats of boutique Tokyo/Seoul pigment',
      'High-gloss scratch-resistant mirror top',
      '7-day complimentary touch-up guarantee',
    ],
  },
  {
    id: 'architectural-extensions',
    titleKey: 'Architectural Nail Extensions',
    category: 'extension',
    durationMin: 90,
    priceVnd: 650000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOJdVMudylBVyyDF09vKl6pGFSMygCokXmgxhErr52ZcfIXr95K2mn3QKV87ZrUfn28T4-X-KfulCrO7imymqoDeSrYac1ISlXQ0aAs8Vmow8J3rR-lwDz89-ghhxKhFrh6Tjj2lYI631HsXOHmQ67O4lNh370jtIVShC31go8LfdBFlYHOkFZLO0FB-GDr-JNRuWMXjg7PdkHEvtRhEWVrNN78Zw2lMw8eCDZfw4SVXmeA6A-ZpXuNw',
    tagKey: 'Architecture',
    descKey:
      'Natural looking soft gel tips & polygel reinforcement with perfect apex curve sculpting. Feather-light, feather-strong, and natural feel.',
    features: [
      'Custom form or soft gel tip sizing',
      'Apex architectural balance sculpting',
      'Natural thin sidewalls without bulk',
      'Long-lasting durability for active travel',
    ],
  },
  {
    id: 'spa-pedicure',
    titleKey: 'Signature Spa Pedicure',
    category: 'pedicure',
    durationMin: 60,
    priceVnd: 420000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqBjutstakex0qlHGxbrHxdivmpOb0-irLJERlyy_7OFijX4VpUNdRZFJQ7CBhFSdRFxa5JilcB5Bdp8xnZvGv2pSyIqU8PMEHSic9iB2-EhqO-VSvVH4pqm6PZjEjWVO5QBAiKhA2_JqQswoqrz1HjhIwCWuI5QJ_WdRYOpCGdxPVnfSRsZwWbBly7ka1Lx3suSMoaxcJvaWv8iCs1rJcB8tbdj_-HpZ6xX-REun8FJ5Easf6lnbbGw',
    tagKey: 'Holistic Ritual',
    descKey:
      'Vietnamese lemongrass and pink Himalayan salt soak, organic callus gentle peeling, acupressure leg massage, and warm botanical oil wrap.',
    features: [
      'Lemongrass and warm mineral foot bath',
      'Gentle callus smoothing with disposable disk',
      'E-file precision cuticle grooming',
      '15-min relaxing foot & calf reflexology massage',
      'Deep nourishing warm coconut oil finish',
    ],
  },
  {
    id: 'minimalist-art-glaze',
    titleKey: 'Minimalist Nail Art & Chrome Glaze',
    category: 'art',
    durationMin: 30,
    priceVnd: 150000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC6kweUWasqb8a_L256vtX3wKDcgcntNSne2SPoyZi17EnAWuUi9oKFJn6HTcEVbPbyKn3_5DpRoPOtC0MQVy7PdbRhT8YJ7JRKj2RFy2q_SUPBDyAFlURfKUw1N-jskoj26DE9VZhIBgC5izigeGfc0MLpiP6VJdLiNT2auZY8JRbKjXqrVG2pe6eRReZXBGzTYv51IQI7qGoV5r851whPvJb4ZfL5cNw43910elLI5OLDT2u5yuAiWA',
    tagKey: 'Artistry & Glaze',
    descKey:
      'Hailey Bieber style pearl glazed donut finishes, micro-fine French tips, delicate gold chrome accents, or bespoke organic contour lines drawn by hand.',
    features: [
      'Hailey Bieber pearl glazed chrome finish',
      'Ultra-thin micro french lines',
      'Delicate gold foil & hand-painted curves',
      'High-durability sealant top coat',
    ],
  },
  {
    id: 'combo-relax',
    titleKey: 'Combo: Gel Mani & Spa Pedi',
    category: 'combo',
    durationMin: 105,
    priceVnd: 750000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwpEL0IKZ0UTXqXY2Fvwg-sx6yQPFdyAZKhYPkTf0I-yl0Z53XNiz5lrodIl6U6R4zUbq7VhWB3dVKVbjkfzeShydKmHSV8nWDQZXRcP8FM2_OvfhKWfUIGsDbpP-FkvybAgyH0f73R0yq94YCWeTmplzX_Rkx-sIFFR0X8FcGjRIUzUTWBRXaMgdRM49BF2kQT2AEPEGiqpWPhBi9UZgp8UmTeSAshNM-qegHUxP06lIvaEkq6fEJF0Tipk49OEdyzZc',
    tagKey: 'Full Escape',
    descKey:
      'Complete simultaneous or sequential care: Full Gel Polish Manicure with Russian cuticle work paired with our Signature Spa Pedicure and reflexology massage.',
    features: [
      'Full Gel Polish Manicure with Russian prep',
      'Full Signature Spa Pedicure with herbal soak',
      'Foot & hand double massage',
      'Organic herbal welcome tea & quiet music',
    ],
  },
];

export const PRICE_LIST: PriceListItem[] = [
  { id: 'p1', nameKey: 'Classic Manicure', category: 'manicure', durationMin: 45, priceVnd: 250000 },
  { id: 'p2', nameKey: 'Gel Polish Manicure', category: 'manicure', durationMin: 60, priceVnd: 380000 },
  { id: 'p3', nameKey: 'Express Gentle Gel Removal', category: 'care', durationMin: 20, priceVnd: 90000 },
  { id: 'p4', nameKey: 'EVA Signature Spa Pedicure', category: 'pedicure', durationMin: 60, priceVnd: 420000 },
  { id: 'p5', nameKey: 'Pedicure with Gel Polish', category: 'pedicure', durationMin: 70, priceVnd: 480000 },
  { id: 'p6', nameKey: 'Glazed Donut / Chrome Finish', category: 'art', durationMin: 20, priceVnd: 150000 },
  { id: 'p7', nameKey: 'Full Extension Set (Soft Gel / Poly)', category: 'extension', durationMin: 90, priceVnd: 650000 },
  { id: 'p8', nameKey: 'Extension Infill / Refill', category: 'extension', durationMin: 75, priceVnd: 450000 },
  { id: 'p9', nameKey: 'Micro French / Baby Boomer Ombre', category: 'art', durationMin: 25, priceVnd: 120000 },
  { id: 'p10', nameKey: 'Hand-painted Art (per 2 nails)', category: 'art', durationMin: 20, priceVnd: 80000 },
  { id: 'p11', nameKey: 'IBX Natural Nail Repair Treatment', category: 'care', durationMin: 30, priceVnd: 180000 },
  { id: 'p12', nameKey: 'Full Relax: Gel Mani + Spa Pedi', category: 'manicure', durationMin: 105, priceVnd: 750000 },
];

export const INTERIOR_SPACES: InteriorSpace[] = [
  {
    id: 'main-gallery',
    titleKey: 'The Main Gallery & Lounge',
    subtitleKey: 'Light oak, Italian micro-terrazzo & radiant ambient curves',
    descriptionKey:
      'Continuous curving plaster architecture, diffused coastal illumination, and warm natural textures designed to invoke immediate tranquility.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUilyglzAwXMPS4IqM1ZIUWFN69Q_EYxAUUtDJ-72FCCMgG_e9EIb5KbBlWeLk19BrwuYOukMuIV_Q6hAz4AXLo9gLVnTOzduap0opv7IXVHZUEA3FdS3CXRHJUE3g38JxgcKVnSJQMhuyMZB0wzW0JB6IxaPZ81M5_3pDtnGWHbvIZ6GZeszKmX29wS37Ow4fAiqPAIiSnWVQUCx_ivDX5M8YWjVvTLl0SsXooXxW_ez_UxyjrAVzhVzg77GSjVqo2dI',
    badgeKey: '01 / Studio Hall',
    aspect: 'large',
  },
  {
    id: 'foot-spa-pods',
    titleKey: 'Bespoke Foot Spa Pods',
    subtitleKey: 'Ergonomic leather armchair & fluted ceramic basins',
    descriptionKey:
      'Custom ceramic basins with filtered spring mineral baths, herbal sea salts, and adjustable lumbar therapy.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDh8BLQka1aI18mUFL4W7CsabXFXB8hQbpbF2aJyeb4Jgp-i-OZ4NKpebWaq_aU4ruEPaCslm5ZuVCmXejr9OBPZ9zycNIs3h2YGVduQhFnF_Ad2Hm6n3yL6NnOq0JsoSSCykTGTWo38TTGvNMbTsj8KjlznFHQOZEUeCfdeQ9KHO0L_8U2_0Oz14SZuH1oSFSFCKPpjtHzORVi28OiWTkzh_BvEwyDtIhFoB7LrHi-cLdez3gAs4ircWLxXrmBaHeBtpo',
    badgeKey: '02 / Pedicure Pod',
    aspect: 'card',
  },
  {
    id: 'curated-gallery',
    titleKey: 'Curated Gel & Polish Gallery',
    subtitleKey: 'Illuminated plaster arches showcasing 400+ Japanese & Korean pigments',
    descriptionKey:
      'Selected non-toxic luxury formulas from Tokyo and Seoul, featuring natural nude glazes and translucent pearl finishes.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA4uo3KxiQSQaafsgneGfF1KARF2-5nzWwXqFW-N3MOuARUGQcs7N0t5HbTzpxhJg_O7lNd8LrA_0CKle4Y7Q-D-oc2WogeNgTqBlTjHZM0gUCkHuU8IkqEQe2PyDyfGaujU2N6gWi2eFEdT0L5nUTfkD138lR-CjUm05j2ToZsKMuGutJvlHFuBGXtU5PA6oBKANrj4xxTVf9DA3cLLoqcaP1u0Qiy8yXiOM-ucfXtC6aIifoV9U_3SVc51p1FAOvPvN0',
    badgeKey: '03 / Polish Alcove',
    aspect: 'card',
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'port-1',
    titleKey: 'Classic Russian French',
    category: 'french',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD1RK3scZL_sP-aNiXGG632pgb5ONm9lDfYIGkR-BHuPDew5R5TdWM-i0hFjr2heO3ZHgb4VeDngXKfQFA6SqOrNPdyoslfgtbGAwqoJp9R_4Iy5j6Bfww--tv0CrWH685n1StuYsWviZyKbJ_T08-p0zkkERENCY34ttKX-3IjaCEmy_b7SbXi0x921_jowgc5w1gXY3-MgX7E_oHWSaItWBenOFfzTJcgeqJBy0Tj13cR1KZZ2AUOTTT4LdrxiuyCKK0',
    descKey: 'Pristine clean cuticle detailing and soft glazed finish',
    tagKey: 'French',
    studioIndex: '01 / Studio',
  },
  {
    id: 'port-2',
    titleKey: 'Architectural 3D Floral',
    category: 'sculpt',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjJoNfxNfDotDS9vvtXb-QZYZgVN_3jmhoXgyW2DrY38llqNZ_xsQz3kLr9sVrm0OhpkQCdiax2I1rT-ZZnRHu3fnzYcuFf5rA7T6mpHaxDflbnPulOZfPnfeJGQNXIl9aOLBfLtta4TKjc4NJBILusH8ve_qcrHSGaIvkfS3zy95xy_JE0h8mwDZPapNpqE1DhGmI3YCB40hOoDJ2Agqa-EdqtFhEWRocxWCGCZJmVhNlf3Pe7fiGORd9MJ91QtoUVTc',
    descKey: 'Sculpted petal dimension and gentle contour leopard accent',
    tagKey: '3D Sculpt',
    studioIndex: '02 / Studio',
  },
  {
    id: 'port-3',
    titleKey: 'Bespoke Guest Portrait',
    category: 'manicure',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBliKZWt11UrsiflbYX1nR1VzUSxHn8sQBxkYqCQptdGeYXHeDCKwb6VlG3jMEDJ2367v-opPD1N744nPycz0DFpRfax6MAt-elE2pbuFbjdffiTkh7qVJ2WvQC6gm1wRYEu9c7-GS3n8vcVcm8QW_lAQoMhsCLgFXnvyX_INIEVVP5fRfDfo-Bj-bZqLr6dTyXyy_BmuOihOvWZMGKJyUeDxMpnh15rQ8sZksa5lw7c1FIZWURCJA6ZnUnCvznhyEsP0w',
    descKey: 'Modern almond French contour with delicate details',
    tagKey: 'Client Look',
    studioIndex: '03 / Studio',
  },
  {
    id: 'port-4',
    titleKey: 'Holistic Spa & Pedicure Ritual',
    category: 'pedicure',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwpEL0IKZ0UTXqXY2Fvwg-sx6yQPFdyAZKhYPkTf0I-yl0Z53XNiz5lrodIl6U6R4zUbq7VhWB3dVKVbjkfzeShydKmHSV8nWDQZXRcP8FM2_OvfhKWfUIGsDbpP-FkvybAgyH0f73R0yq94YCWeTmplzX_Rkx-sIFFR0X8FcGjRIUzUTWBRXaMgdRM49BF2kQT2AEPEGiqpWPhBi9UZgp8UmTeSAshNM-qegHUxP06lIvaEkq6fEJF0Tipk49OEdyzZc',
    descKey: 'Deep nourishing coastal care in ergonomic lounge chairs',
    tagKey: 'Spa Care',
    studioIndex: '04 / Studio',
  },
  {
    id: 'port-5',
    titleKey: 'Hand-painted Floral Pedicure',
    category: 'pedicure',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbakHItEPFiffndIrnApUJT4eFLHo0My1XFy3-F__UiLDh3r62PdMMOUcT5fZcrTDg-4I1sWvSrctisEaCTwDQPv5SQfw2tDLoQobFBUeDvmeOpsQ3KJOqm-GK5-Q-xvDAgX7ECR4UswrK1pZY4CyDc5q3cTqKwVQDmUBvJB1EDIovbkCeybSgL7FJRJajD-eXtDWmpizNRTgdl8BhTnnRuzxKjgiLgXF70vaSTDs9nx0wJiQ9iJY31NFOUHxpPSesVT4',
    descKey: 'Delicate botanical nail art with crisp white contour tips',
    tagKey: 'Pedicure',
    studioIndex: '05 / Studio',
  },
  {
    id: 'port-6',
    titleKey: 'Aquamarine Jewelry Nail Art',
    category: 'art',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-1bucCHFWV1GA0wJXFeKDBbkWUd0HuXV1mdMaawf5m9dmAsNevTgxtX6n2_BD1fei1E_mJlU4Zca4hHSknuaFtmglDvvf_4g5kKvLRxB49Ape6XZDf5w9FsX7BMdfTtGHUgd6KUkvXT2M-yDz5Bbe7ZCNJUXrdesgghJT9228xLey6eeUJGmslXiotS73n36XuZuLoN-_0ZpR695ncHWgH9Ct1U_Zy3TZs8QS1Y-E8vmwkYIDqK7kq0VSJdeeqy-x62Y',
    descKey: 'Bespoke gold accents and sculpted 3D embellishments',
    tagKey: 'Gold Couture',
    studioIndex: '06 / Studio',
  },
  {
    id: 'port-7',
    titleKey: 'Neon Lime Sculpted Bloom',
    category: 'sculpt',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKFhLbAE3X-JDdhULS5LqiBjFuh_KUdB8qUajacy7kFSrsaR_UPHNM8dFzY16gdKSqt0nTNWIdInM_JVuR0EWE_4Syj2xRf8nlSrF9f31lqT9ylCyDsGVHcCa0eNBfwdoXAteDkiZ2vK8jms9o9Ignf8nC0uObUvq5glII2ahyWdAR_xyr_3gk69-fFTewjMVuqzgGDBfyJDgcDINpY5olylYPLbWA1omE7PxDQ0dNydZ9esXMN1cqYIEfjcBOs_d7beI',
    descKey: 'Vibrant seasonal statement with translucent 3D floral accent',
    tagKey: 'Neon 3D',
    studioIndex: '07 / Studio',
  },
];

export const MASTERS: Master[] = [
  {
    id: 'master-linh',
    name: 'Linh Nguyen',
    roleKey: 'Senior Art Director',
    experience: '7 years experience',
    specialties: ['Russian Manicure', 'Japanese Gel', 'Hailey Glaze'],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5.0,
  },
  {
    id: 'master-anna',
    name: 'Anna Smirnova',
    roleKey: 'International Master Artist',
    experience: '6 years experience',
    specialties: ['Russian E-File', 'Apex Architecture', 'French Contour'],
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    rating: 5.0,
  },
  {
    id: 'master-vy',
    name: 'Mai Vy',
    roleKey: 'Holistic Spa & Pedicure Lead',
    experience: '5 years experience',
    specialties: ['Spa Pedicure', 'Reflexology Massage', 'Botanical Soak'],
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    rating: 4.9,
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Elena R.',
    roleKey: 'Digital Nomad & Traveler',
    avatarBg: '#f4e0c2',
    initials: 'ER',
    stars: 5,
    quoteKey:
      '“The calmest aesthetic salon in Nha Trang. The interior is stunning and my gel manicure lasted 4 weeks without a single chip despite swimming every day in the sea.”',
  },
  {
    id: 'rev-2',
    author: 'Linh Nguyễn',
    roleKey: 'Nha Trang Resident',
    avatarBg: '#ffd9e0',
    initials: 'LN',
    stars: 5,
    quoteKey:
      '“Mani-pedi tuyệt vời nhất từng trải nghiệm tại Nha Trang! Không gian đường cong rất êm dịu, không có mùi hoá chất nồng, nhân viên rất tỉ mỉ và chu đáo.”',
  },
  {
    id: 'rev-3',
    author: 'Sarah M.',
    roleKey: 'Melbourne, Australia',
    avatarBg: '#e1e5c7',
    initials: 'SM',
    stars: 5,
    quoteKey:
      '“A true hidden gem for travelers. High-end hygiene standards, flawless french glaze and warm hospitality. Booking via WhatsApp was effortless.”',
  },
];
