import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() likeProduct = new EventEmitter<number>();

  onDelete(id: number): void {
    this.deleteProduct.emit(id);
  }

  onLike(id: number): void {
    this.likeProduct.emit(id);
  }
}

export class ProductList {
}
