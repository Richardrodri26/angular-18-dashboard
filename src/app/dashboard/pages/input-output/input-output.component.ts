import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '@app/interfaces/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  imports: [ProductCardComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {

  public products = signal<Product[]>([
    {
      id: 1,
      name: 'Producto 1',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Producto 2',
      quantity: 0,
    },
  ]);

  private intervalSubscription = interval(1000).pipe(
    tap(() => {
      this.products.update(products => [
        ...products,
        {
          id: products.length + 1,
          name: 'Producto ' + (products.length + 1),
          quantity: 0,
        }
      ])
    }),
    take(7)
  ).subscribe();

  public updateProduct(product: Product, quantity: number) {
    this.products.update(products => {
      const index = products.findIndex(p => p.id === product.id);
      if (index > -1) {
        products[index].quantity = quantity;
      }
      return products;
    });

  }

  ngOnDestroy(): void {

    this.intervalSubscription.unsubscribe();

  }
}
