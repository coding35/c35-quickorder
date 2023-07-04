export class CartItemModelBase {
  constructor() {}
  public id: number | undefined;
  public name: string | undefined;
  public price: number | undefined;
  public quantity = 0;
  public image: string | undefined;
}
