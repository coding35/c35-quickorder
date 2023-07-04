import {CartItemModelBase} from './cart-item-base.model';

export class CartItemModel extends CartItemModelBase {
  constructor(
    id?: number,
    name?: string,
    price?: number,
    quantity?: number,
    image?: string
  ) {
    super();
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity || 0;
    this.image = image;
  }
}
