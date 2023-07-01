import { QuickOrderService } from '../src/core/service/quickorder.service';
import { CartItemModel } from '../src/core/model/cart-item.model';

describe('update quantity', () => {
  const instance = new QuickOrderService();
  instance.AddToCart(new CartItemModel(1, 'test', 10, 1, 'test.jpg'));
  it('should increment quantity on item in cart', () => {
    instance.UpdateQuantity(instance.GetItem(1), 2);
    expect(instance.GetItem(1).quantity).toBe(3);
  });
});

describe('update quantity', () => {
  it('should decrement quantity on item in cart', () => {
    const instance = new QuickOrderService();
    instance.AddToCart(new CartItemModel(1, 'test', 10, 3, 'test.jpg'));
    instance.UpdateQuantity(instance.GetItem(1), -1);
    expect(instance.GetItem(1).quantity).toBe(2);
  });
});

describe('update quantity', () => {
    it('should set quantity to 1 if zero or negative quantity detected', () => {
      const instance = new QuickOrderService();
      instance.AddToCart(new CartItemModel(1, 'test', 10, 3, 'test.jpg'));
      instance.UpdateQuantity(instance.GetItem(1), -3);
      expect(instance.GetItem(1).quantity).toBe(1);
    });
  });
