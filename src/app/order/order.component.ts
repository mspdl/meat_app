import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' },
  ]

  constructor(private orderSerice: OrderService) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderSerice.itemsValue()
  }

  items() {
    return this.orderSerice.cartItems()
  }

  increaseQty(item: CartItem) {
    this.orderSerice.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.orderSerice.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.orderSerice.remove(item)
  }

  delivery() {
    return this.items().length > 0 ? 8 : 0;
  }

  checkOrder(order: Order) {
    order.orderItems = this.items().map(
      (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderSerice.checkOrder(order)
      .subscribe((orderId: string) => {
        console.log(`Compra concluída: ${orderId}`)
        this.orderSerice.clear()
      })
    console.log(order)
  }

}
