import { IQuickOrderObserver } from "../interface/quickorder-observer.interface";
import { LocalStorageService } from "../service/local-storage.service";
import { QuickOrderService } from "../service/quickorder.service";

export class QuickOrderObserver implements IQuickOrderObserver {
    localStorageService: LocalStorageService = new LocalStorageService();
    quickOrderService: QuickOrderService

    constructor(quickOrderService: QuickOrderService) {
        this.quickOrderService = quickOrderService;
    }
   
    Update() {
        let cart = this.quickOrderService.GetCart();
        this.localStorageService.Set('cart', JSON.stringify(cart));
    }
}