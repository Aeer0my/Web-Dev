import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../product-list/product-list';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  currentImageIndex = 0;

  shareOnWhatsApp(): void {
    const text = `Check out this product: ${this.product.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  shareOnTelegram(): void {
    const url = this.product.link;
    const text = this.product.name;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  setImage(index: number): void {
    this.currentImageIndex = index;
  }
}
