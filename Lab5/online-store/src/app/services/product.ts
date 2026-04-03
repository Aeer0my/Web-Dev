import { Injectable } from '@angular/core';

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
  categoryId: number;
  likes: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  private products: Product[] = [
    {
      id: 1,
      name: "Смартфон Apple iPhone 17 Pro 256Gb NanoSIM+eSIM оранжевый",
      description: "Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.",
      price: 852990,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000",
      categoryId: 1,
      likes: 0
    },
    {
      id: 2,
      name: "Смартфон Apple iPhone 15 128Gb NanoSIM+eSIM черный",
      description: "Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.",
      price: 413952,
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/?c=750000000",
      categoryId: 1,
      likes: 0
    },
    {
      id: 3,
      name: "Смартфон Samsung Galaxy A07 6 ГБ/128 ГБ черный",
      description: "Samsung Galaxy A07 6 ГБ/128 ГБ — это универсальный смартфон для тех, кто ценит производительность и большой объем памяти для хранения ваших данных.",
      price: 78111,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/p0c/pd7/61291243.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/p61/pd7/61291246.jpg?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000",
      categoryId: 1,
      likes: 0
    },
    {
      id: 4,
      name: "Смартфон Apple iPhone 17 Pro Max 256Gb NanoSIM+eSIM серебристый",
      description: "Apple iPhone 17 Pro Max 256Gb — это воплощение инноваций и бескомпромиссного качества в мире смартфонов. Мощный процессор A19 Pro и передовая система камер открывают новые горизонты для творчества и продуктивности.",
      price: 929990,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=gallery-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/p8e/p55/64169949.png?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/p16/p58/64169951.png?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-nanosim-esim-serebristyi-145468150/?c=750000000",
      categoryId: 1,
      likes: 0
    },
    {
      id: 5,
      name: "Смартфон Apple iPhone 13 128Gb NanoSIM+eSIM белый",
      description: "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.",
      price: 459490,
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h8f/hce/64209121476638.jpg?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-nanosim-esim-belyi-102298420/?c=750000000",
      categoryId: 1,
      likes: 0
    },
    {
      id: 6,
      name: "Ноутбук Apple MacBook Air 13 2020 13.3\" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A",
      description: "Маленький чип. Грандиозный прорыв",
      price: 469990,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000",
      categoryId: 2,
      likes: 0
    },
    {
      id: 7,
      name: "Ноутбук Lenovo IdeaPad 3 15.6\" / 8 Гб / SSD 256 Гб / DOS / 15IGL05 / 81WQ00ERRK",
      description: "Ноутбук IdeaPad 3 работает тише и с меньшим выделением тепла за счет использования оптимизированной механической системы распределения потоков воздуха и интеллектуальной вентиляции, предотвращающей смешивание потоков холодного и теплого воздуха.",
      price: 171877,
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/p25/pf7/118813543.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000",
      categoryId: 2,
      likes: 0
    },
    {
      id: 8,
      name: "Ноутбук ThundeRobot 911S Core D 15.6\" / 16 Гб / SSD 512 Гб / Без ОС / JT009K00F",
      description: "Игровой ноутбук Thunderobot 911S Core D JT009K00F — 15.6-дюймовая модель с IPS-матрицей и разрешением 1920х1080 пикселей. Отличается высокой частотой обновления — достигает 144 Гц. Матовое покрытие экрана уменьшает количество бликов, обеспечивая комфортные условия для глаз.",
      price: 499990,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/h91/h27/85301691678750.jpg?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000",
      categoryId: 2,
      likes: 0
    },
    {
      id: 9,
      name: "Ноутбук Oyan Lite X14 14.1\" / 8 Гб / SSD 512 Гб / Win 11 Home / R1526",
      description: "Этот ноутбук создан для стабильной и комфортной работы с офисными приложениями, электронной почтой и веб-серфингом. Оснащен энергоэффективным процессором Intel Celeron-N4000 с базовой частотой 1.1 ГГц и максимальной частотой 2.8 ГГц, а также встроенной графикой Intel UHD Graphics 600, которая идеально подходит для выполнения повседневных задач.",
      price: 131000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pfd/p49/48619238.jpg?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/pfd/p49/48619238.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/pe1/p49/48619239.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/p75/p47/48619240.jpg?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/oyan-lite-x14-14-1-8-gb-ssd-512-gb-win-11-home-r1526-115724796/?c=750000000",
      categoryId: 2,
      likes: 0
    },
    {
      id: 10,
      name: "Ноутбук Castom E157D 15.6\" / 16 Гб / SSD 1000 Гб / Win 11 / 101725124",
      description: "Castom E157D — универсальный ноутбук для работы, учебы и развлечений, сочетающий в себе мощный процессор AMD Ryzen 5, быстрый SSD-накопитель и яркий IPS-экран.",
      price: 249900,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/p04/p7d/63008953.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/pe8/p7c/63008954.jpg?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/castom-e157d-15-6-16-gb-ssd-1000-gb-win-11-101725124-145214483/?c=750000000",
      categoryId: 2,
      likes: 0
    },
    {
      id: 11,
      name: "Наушники Apple AirPods 4 Active Noise Cancellation белый",
      description: "Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни.",
      price: 83999,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/hc8/he6/87309386219550.png?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/p00/p20/108964628.png?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/naushniki-apple-airpods-4-active-noise-cancellation-belyi-124333921/?c=750000000",
      categoryId: 3,
      likes: 0
    },
    {
      id: 12,
      name: "Наушники Apple AirPods Max 2 оранжевый",
      description: "Модель автоматически умеет определять, когда нужно отключить шумоподавление. За счет излучателей большого диаметра наушники выдают громкий звук с хорошим балансом частот. Пространственный звук создается благодаря динамическому отслеживанию положения головы пользователя",
      price: 323032,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p9e/p7a/3533067.png?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/p9e/p7a/3533067.png?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/p66/p7a/3533069.png?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/pfa/p77/3533070.png?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-oranzhevyi-128624151/?c=750000000",
      categoryId: 3,
      likes: 0
    },
    {
      id: 13,
      name: "Наушники HyperX Cloud II черно-красный",
      description: "Погрузитесь в мир игр с\n" +
        "\n" +
        "наушниками HyperX Cloud II\n" +
        "\n" +
        "— идеальным выбором для геймеров, которые ценят\n" +
        "\n" +
        "высокое качество звука\n" +
        "\n" +
        "и\n" +
        "\n" +
        "комфорт",
      price: 21990,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h72/he2/63770832764958.jpg?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/h72/he2/63770832764958.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/h33/hb1/63770833649694.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/h5a/h48/63770834305054.jpg?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/naushniki-hyperx-cloud-ii-cherno-krasnyi-4800107/?c=750000000",
      categoryId: 3,
      likes: 0
    },
    {
      id: 14,
      name: "Наушники Logitech G435 фиолетовый",
      description: "Радиочастотная гарнитура Logitech G435 LIGHTSPEED поддерживает два способа подключения – Bluetooth и радиоканал. Модель имеет закрытое акустическое оформление. ",
      price: 34990,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h01/h96/63864480628766.jpg?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/h01/h96/63864480628766.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/h81/h74/63864481153054.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/hc4/h1f/63864481677342.jpg?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/naushniki-logitech-g435-fioletovyi-107183308/?c=750000000",
      categoryId: 3,
      likes: 0
    },
    {
      id: 15,
      name: "Наушники Logitech G733 LightSpeed голубой",
      description: "Наушники Logitech G733 LightSpeed голубой",
      price: 71990,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h27/hf9/64002970845214.jpg?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/h27/hf9/64002970845214.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/h4d/h49/64002973597726.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/h94/h37/64003009151006.jpg?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/naushniki-logitech-g733-lightspeed-goluboi-102254413/?c=750000000",
      categoryId: 3,
      likes: 0
    },
    {
      id: 16,
      name: "Планшет Xiaomi Redmi Pad 2 11 дюйм 8 Гб/256 Гб фиолетовый",
      description: "Xiaomi Redmi Pad 2 — универсальный планшет с ярким 11-дюймовым экраном и мощным процессором MediaTek Helio G100 Ultra для работы и развлечений.",
      price: 113141,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pcf/pcc/81439394.jpg?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/pcf/pcc/81439394.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/pa2/p51/127238742.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/p00/p4e/127238754.jpg?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-fioletovyi-140639755/?c=750000000",
      categoryId: 4,
      likes: 0
    },
    {
      id: 17,
      name: "Планшет Huawei MatePad SE AGS6-W09 11 дюйм 6 Гб/128 Гб серый",
      description: "Планшет Huawei MatePad SE AGS6-W09 11 дюйм 6 Гб/128 Гб серый",
      price: 79870,
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/h26/hdf/86746842660894.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/hf8/hb7/86746842726430.jpg?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-6-gb-128-gb-seryi-122142537/?c=750000000",
      categoryId: 4,
      likes: 0
    },
    {
      id: 18,
      name: "Планшет Teclast T50 Plus 11 дюйм 6 Гб/256 Гб серый",
      description: "Используйте мощь чипсета Unisoc T620 в сочетании с оперативной памятью объемом до 16 ГБ (расширение 6 ГБ + 10 ГБ) для превосходных возможностей многозадачности. Благодаря высокоскоростному накопителю емкостью 256 ГБ с возможностью расширения до 1 ТБ у вас будет достаточно места для ваших приложений, мультимедиа и файлов, обеспечивая быструю и эффективную работу.\n" +
        "\n",
      price: 89990,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pcf/pad/24180837.jpg?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/pcf/pad/24180837.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/peb/pad/24180838.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/p07/pae/24180839.jpg?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/teclast-t50-plus-11-djuim-6-gb-256-gb-seryi-122603102/?c=750000000",
      categoryId: 4,
      likes: 0
    },
    {
      id: 19,
      name: "Планшет NEYRO TAB KIDS 80 PRO 10 дюйм 8 Гб/128 Гб розовый",
      description: "Детский планшет Neyro Tab Kids 80 Pro с экраном 10 дюймов, 8 Гб ОЗУ, 128 Гб памяти и Wi-Fi/Bluetooth",
      price: 79000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p2e/p22/97456491.png?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/p2e/p22/97456491.png?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/p4a/p22/97456492.png?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/p66/p22/97456493.png?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/neyro-tab-kids-80-pro-10-djuim-8-gb-128-gb-rozovyi-131147941/?c=750000000",
      categoryId: 4,
      likes: 0
    },
    {
      id: 20,
      name: "Планшет G-VILL S10 Ultra Tab 10.1 дюйм 32 Гб/512 Гб серый",
      description: "Планшет S10 Ultra Tab - это ультратонкий и стильный абсолютно новый продукт на рынке Казахстана с диагональю экрана 10.1 дюймов, что обеспечивает комфортное использование при просмотре контента и работе с приложениями.",
      price: 39999,
      rating: 4.4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p77/pdc/31478086.jpeg?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/p77/pdc/31478086.jpeg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/p0e/pd9/31478087.jpeg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/pa4/pd5/31478088.jpeg?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/g-vill-s10-ultra-tab-10-1-djuim-32-gb-512-gb-seryi-136693512/?c=750000000",
      categoryId: 4,
      likes: 0
    },

  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }
}
