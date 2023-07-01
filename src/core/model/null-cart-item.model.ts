import { CartItemModelBase } from "./cart-item-base.model";

export class NullCartItemModel extends CartItemModelBase {
    public isNull: boolean = true;

    constructor() {
        super();
    }
}