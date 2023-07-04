import {CartItemModel} from '../src/core/model/cart-item.model';
import {QuickOrderService} from '../src/core/service/quickorder.service';

const instance = new QuickOrderService();

beforeEach(() => {
  for (let i = 0; i < 10; i++) {
    instance.AddToCart(new CartItemModel(i, 'test', 10, 1, 'test.jpg'));
  }
});

describe('clear count', () => {
  it('should remove all items in cart', () => {
    expect(instance.GetCartQuantity()).toBe(10);
    instance.ClearCart();
    expect(instance.GetCartQuantity()).toBe(0);
  });
});
