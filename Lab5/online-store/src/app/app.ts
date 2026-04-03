import { Component } from '@angular/core';
import { ProductService } from './services/product';
import { ProductListComponent } from './components/product-list/product-list';
import { Category, Product } from './services/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  categories: Category[];
  selectedCategoryId: number | null = null;
  currentProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.currentProducts = this.productService.getProductsByCategory(categoryId);
  }

  onDeleteProduct(id: number): void {
    this.productService.deleteProduct(id);
    if (this.selectedCategoryId !== null) {
      this.currentProducts = this.productService.getProductsByCategory(this.selectedCategoryId);
    }
  }

  onLikeProduct(id: number): void {
    this.productService.likeProduct(id);
    if (this.selectedCategoryId !== null) {
      this.currentProducts = this.productService.getProductsByCategory(this.selectedCategoryId);
    }
  }
}
