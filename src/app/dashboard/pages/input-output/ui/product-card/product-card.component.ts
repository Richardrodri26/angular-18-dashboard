import { ChangeDetectionStrategy, Component, effect, input, output } from '@angular/core';
import { Product } from '@app/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  public product = input.required<Product>();

  public onIncrementQuantity = output<number>();

  public incrementQuantity() {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

  public loginEffect = effect(() => {
    console.log('this.product().name :>> ', this.product().name);
  })

}
