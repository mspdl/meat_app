import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

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

  items() {
    return this.orderSerice.cartItems()
  }

  increaseQty(item: CartItem) {
    this.orderSerice.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.orderSerice.decreaseQty(item)
  }
  
  remove(item: CartItem){
    debugger
    this.orderSerice.remove(item)
  }

}
