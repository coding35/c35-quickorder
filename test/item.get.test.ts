import { QuickOrderService } from '../src/core/service/quickorder.service';
import { CartItemModel } from '../src/core/model/cart-item.model';

describe('get item from cart', () => {
  it('should get item by id from cart', () => {
    const instance = new QuickOrderService();
    for (let i = 0; i < 10; i++) {
      instance.AddToCart(new CartItemModel(i, `test${i}`, 10, 1, 'test.jpg'));
    }
    expect(instance.GetCartQuantity()).toBe(10);
    let item1 = instance.GetItem(1);
    expect(item1).not.toBeNull();
    expect(item1.name).toBe('test1');

    let item2 = instance.GetItem(5);
    expect(item2).not.toBeNull();
    expect(item2.name).toBe('test5');
  });
});

describe('get item from cart', () => {
    it('should return NullCartItem if cart item does not exist', () => {
      const instance = new QuickOrderService();
      for (let i = 0; i < 10; i++) {
        instance.AddToCart(new CartItemModel(i, `test${i}`, 10, 1, 'test.jpg'));
      }
      let item = instance.GetItem(25);
      expect(item).not.toBeNull();
      expect(item).toEqual({"isNull": true, "quantity": 0});
    });
  });