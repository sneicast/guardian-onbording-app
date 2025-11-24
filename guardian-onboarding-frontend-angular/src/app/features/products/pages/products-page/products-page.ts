import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ProductsService, Product } from '../../sevices/products-service';

@Component({
  selector: 'app-products-page',
  imports: [],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage implements OnInit, OnDestroy {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  showModal = false;
  loading = false;
  error: string | null = null;
  private routerSubscription?: Subscription;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    await this.loadProducts();
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url === '/admin/products') {
          this.loadProducts();
        }
      });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  async loadProducts() {
    this.loading = true;
    this.error = null;
    this.products = [];
    this.cdr.detectChanges();
    try {
      this.products = await this.productsService.getAllProducts();
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Error desconocido al cargar productos';
      console.error('Error al cargar productos:', error);
      this.products = [];
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  async openModal(productId: number) {
    try {
      this.selectedProduct = await this.productsService.getProductById(productId);
      this.showModal = true;
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Error al obtener el producto:', error);
    }
  }

  closeModal() {
    this.showModal = false;
    this.selectedProduct = null;
    this.cdr.detectChanges();
  }
}
