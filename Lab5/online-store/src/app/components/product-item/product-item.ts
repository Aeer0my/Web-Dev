import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../services/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();
  currentImageIndex = 0;

  onDelete(): void {
    if (confirm('Удалить этот товар?')) {
      this.delete.emit(this.product.id);
    }
  }

  onLike(): void {
    this.like.emit(this.product.id);
  }

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
