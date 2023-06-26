import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../../../models/product.model';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  title = 'api';
  public products: Product[] = [];
  private currentPage = 1;

  constructor(private productService: ProductsService, private eventService: EventService) {}

  ngOnInit() {
    this.getProducts();
    this.subscribeToEvents();
  }

  getProducts() {
    this.productService.getProducts(this.currentPage).subscribe(
      (response) => {
        this.products = response.products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  subscribeToEvents() {
    this.eventService.on('filtrarPorGenero').subscribe((genero: number) => {
      this.filterProductsByGenero(genero);
    });

    this.eventService.on('mostrarTodosLosProductos').subscribe(() => {
      this.getProducts();
    });
  }

  filterProductsByGenero(genero: number) {
    this.products = this.products.filter(producto => producto.genero === genero);
  }
}
