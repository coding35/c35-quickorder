import { IQuickOrder } from '../interface/quickorder.interface';
import { CartItemModelBase } from '../model/cart-item-base.model';
import { NullCartItemModel } from '../model/null-cart-item.model';
import { QuickOrderObserver } from '../observer/quickorder.observer';
import { QuickOrderSubject } from '../observer/quickorder.subject';

export class QuickOrderService implements IQuickOrder {
  private cartItems: CartItemModelBase[] = [];
  private subject = new QuickOrderSubject();
  constructor() {
      this.Init();
  }

  Init(): void {
    this.subject.Attach(new QuickOrderObserver(this));
    alert('QuickOrderService Init');
  }

  SearchItem(keyword: string) {
    fetch(`https://localhost:5001/api/quickorder/search?keyword=${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      }).catch(error => {
        console.log(error);
      });
  }

  AddToCart<T extends CartItemModelBase>(item: T): void {
    if (!this.cartItems.find(x => x.id === item.id)) {
      this.cartItems.push(item);
    } else {
      this.UpdateQuantity(item, item.quantity);
    }
    this.subject.Notify();
  }

  RemoveFromCart(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    this.subject.Notify();
  }

  UpdateQuantity<T extends CartItemModelBase>(
    item: T,
    increment: number
  ): void {
    let index = this.cartItems.findIndex(x => x.id === item.id);
    let currentQuantity = this.cartItems[index].quantity;
    let newQuantity = currentQuantity + increment;
    if (newQuantity <= 0) {
      newQuantity = 1;
    }
    this.cartItems[index].quantity = newQuantity;
    this.subject.Notify();
  }

  GetItem(id: number): CartItemModelBase {
    let item = this.cartItems.find(x => x.id === id);
    return item ?? new NullCartItemModel();
  }

  GetCart(): CartItemModelBase[] {
    return this.cartItems;
  }

  GetCartQuantity(): number {
    return this.cartItems.length;
  }

  ClearCart(): void {
    this.cartItems = [];
    this.subject.Notify();
  }

  ValidateItem<T extends CartItemModelBase>(item: T): boolean {
    throw new Error('Method not implemented.');
    console.log(item);
  }

  ValidateCart(): boolean {
    throw new Error('Method not implemented.');
  }
}
