import { QuickOrderService } from '../src/core/service/quickorder.service';
import { CartItemModel } from '../src/core/model/cart-item.model';

const instance = new QuickOrderService();

beforeEach(() => {
  instance.AddToCart(new CartItemModel(1, 'test', 10, 1, 'test.jpg'));
});

describe('remove item from cart', () => {
  it('should remove item from cart', () => {
    expect(instance.GetCartQuantity()).toBe(1);
    instance.RemoveFromCart(1);
    expect(instance.GetCartQuantity()).toBe(0);
  });
});
