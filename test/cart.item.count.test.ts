
import { QuickOrderService } from '../src/core/service/quickorder.service';
import { CartItemModel } from '../src/core/model/cart-item.model';

const instance = new QuickOrderService();

beforeEach(() => {
    for (let i = 0; i < 10; i++) {
        instance.AddToCart(new CartItemModel(i, 'test', 10, 1, 'test.jpg'));
    }
});

describe('get item cart count', () => {
  it('should get count of items in cart', () => {
    expect(instance.GetCartQuantity()).toBe(10);
  });
});
