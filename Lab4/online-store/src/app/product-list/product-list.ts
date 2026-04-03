import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';

// Определи интерфейс Product
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: "Смартфон Apple iPhone 17 Pro Max 256Gb NanoSIM+eSIM оранжевый",
      description: "Apple iPhone 17 Pro Max 256Gb — это воплощение инноваций и стиля, предлагающее безупречную производительность и непревзойденные возможности для тех, кто всегда в движении.\n" +
        "\n",
      price: 915940,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/ped/p29/64476207.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p41/p88/64170091.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p79/p88/64170093.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p95/p88/64170094.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p49/p27/64476210.jpg?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-nanosim-esim-oranzhevyi-145468241/?c=750000000"
    },
    {
      id: 2,
      name: "Ноутбук Apple MacBook Pro 14 2024 14.2\" / 16 Гб / SSD 512 Гб / macOS / MW2W3",
      description: "Представляем Apple MacBook Pro 14 2024 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и инновационные технологии. Этот ноутбук станет идеальным помощником для профессионалов и творческих людей.\n" +
        "\n",
      price: 992842,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p21/pf2/62460020.jpeg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p21/pf2/62460020.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pb7/pee/62460021.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p4d/peb/62460022.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pe4/pe7/62460023.jpeg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-16-gb-ssd-512-gb-macos-mw2w3-134209187/?c=750000000"
    },
    {
      id: 3,
      name: "Видеокарта GIGABYTE RTX 5090 Gaming OC GV-N5090GAMING OC-32GD 32 Гб",
      description: "Система охлаждения WINDFORCE обеспечивает исключительную тепловую производительность благодаря сочетанию передовых технологий. Она оснащена серверным теплопроводящим гелем, инновационными вентиляторами Hawk с альтернативным вращением, композитными медными тепловыми трубками, большой испарительной камерой, активными вентиляторами 3D и охлаждением экрана.",
      price: 2159990,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p11/p21/25921621.jpg?format=gallery-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p11/p21/25921621.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/p2d/p21/25921622.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p49/p21/25921623.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p65/p21/25921624.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/gigabyte-rtx-5090-gaming-oc-gv-n5090gaming-oc-32gd-32-gb-135025034/?c=750000000"
    },

    {
      id: 4,
      name: "Смартфон Apple iPhone 15 128Gb NanoSIM+eSIM черный",
      description: "Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.",
      price: 413956,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/?c=750000000"
    },
    {
      id: 5,
      name: "Аэрогриль AISI GR-1 4 л черный",
      description: "🖤 Аэрогриль AISI — вкус без масла и забот!\n" +
        "Хрустящая корочка, сочное мясо и аромат свежей выпечки — всё это теперь можно приготовить дома, быстро и без капли лишнего жира!",
      price: 29900,
      rating: 4.5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pc1/p09/95309639.jpeg?format=gallery-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/pc1/p09/95309639.jpeg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/pe7/p65/95309645.jpeg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/pa3/pbe/95309650.jpeg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/pe0/pc8/95309653.jpeg?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/aisi-gr-1-chernyi-147897402/?c=750000000"
    },
    {
      id: 6,
      name: "Крепление для монитора NB F80 черный",
      description: "Крепление для мониторов NB F80 — оптимальное решение для организации рабочего пространства, обеспечивающее максимальный комфорт и эргономику при работе за компьютером.",
      price: 8450,
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h37/hf5/81272594268190.png?format=gallery-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h37/hf5/81272594268190.png?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h21/hae/81272594300958.png?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h0b/h47/81272594333726.png?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/nb-f80-chernyi-110855908/?c=750000000"
    },
    {
      id: 7,
      name: "Xerox Phaser 3020BI белый",
      description: "Xerox Phaser 3020 - это монохромный лазерный принтер, который отлично подойдет для персонального использования. Белый матовый корпус и стильный дизайн будут смотреться органомично на любом письменном столе. Благодаря своему маленькому весу и компактным размерам, данную модель можно поставить куда угодно, а в случае необходимости его можно легко убрать.",
      price: 69990,
      rating: 4.4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hd2/hf9/63757710032926.jpg?format=gallery-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/hd2/hf9/63757710032926.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/pc0/p11/112571191.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/pf8/p11/112571193.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/p15/p12/112571194.jpg?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/xerox-phaser-3020bi-belyi-1500208/?c=750000000"
    },
    {
      id: 8,
      name: "Шкаф для обуви Soft-mebel 60x35x170 см, ЛДСП",
      description: "Обувница Soft-mebel — стильное и функциональное решение для хранения вашей обуви, которое поможет поддерживать порядок в прихожей и сэкономить пространство.",
      price: 29100,
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h19/h3c/64522180231198.jpg?format=gallery-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h19/h3c/64522180231198.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h33/h56/64522182590494.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h33/h56/64522182590494.jpg?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/obuvnitsa-shkaf-dlja-obuvi-soft-mebel-60x35x170-sm-belyi-105781012/?c=750000000"
    },
    {
      id: 9,
      name: "ТВ-тумба напольная Лофт, 180x40x35 см, белый, графит",
      description: "Напольная ТВ-тумба Лофт — это стильное и функциональное решение для вашего интерьера, которое сочетает в себе современный дизайн и удобство использования.",
      price: 24378,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h0f/hdf/84431697575966.jpg?format=gallery-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h0f/hdf/84431697575966.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/he1/h52/84431697641502.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/hc7/h71/84431697707038.jpg?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/tv-tumba-napol-naja-loft-180x40x35-sm-belyi-grafit-114282876/?c=750000000"
    },
    {
      id: 10,
      name: "Монитор 27\" Xiaomi Gaming Monitor G27i 2026 P27FDA-RGGL черный",
      description: "27\" Xiaomi Gaming Monitor G27i 2026 P27FDA-RGGL — погрузитесь в мир захватывающих игр с невероятной чёткостью и плавностью изображения.",
      price: 80840,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p4e/p93/65975189.png?format=gallery-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p4e/p93/65975189.png?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/pcc/pc6/63534333.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/pb0/p15/60551022.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/pcc/p15/60551021.jpg?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/27-xiaomi-gaming-monitor-g27i-2026-p27fda-rggl-chernyi-144629208/?c=750000000"
    }
  ];

  onSelect(product: Product): void {
    console.log(product);
  }
}
