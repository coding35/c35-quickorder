import {CartItemModel} from '../src/core/model/cart-item.model';
import {QuickOrderService} from '../src/core/service/quickorder.service';

describe('add item to cart', () => {
  it('should add item to cart', () => {
    const instance = new QuickOrderService();
    instance.AddToCart(new CartItemModel(1, 'test', 10, 1, 'test.jpg'));
    expect(instance.GetCartQuantity()).toBe(1);
  });
});

describe('duplicate item added item to cart', () => {
  it('should increment quantity if duplicate item added to cart', () => {
    const instance = new QuickOrderService();
    instance.AddToCart(new CartItemModel(1, 'test', 10, 1, 'test.jpg'));
    instance.AddToCart(new CartItemModel(1, 'test', 10, 1, 'test.jpg'));
    expect(instance.GetCartQuantity()).toBe(1);
    expect(instance.GetItem(1).quantity).toBe(2);
  });
});
