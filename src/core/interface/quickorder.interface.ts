import {CartItemModelBase} from '../model/cart-item-base.model';

export interface IQuickOrder {
  SearchItem(keyword: string): any;
  AddToCart<T extends CartItemModelBase>(item: T): void;
  RemoveFromCart(id: number): void;
  UpdateQuantity<T extends CartItemModelBase>(item: T, quantity: number): void;
  GetItem(id: number): CartItemModelBase;
  GetCart(): CartItemModelBase[];
  GetCartQuantity(): number;
  ClearCart(): void;
  ValidateItem<T extends CartItemModelBase>(item: T): boolean;
  ValidateCart(): boolean;
}
