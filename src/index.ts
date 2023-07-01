import { QuickOrderService } from "./core/service/quickorder.service";

export class C35QuickOrder{
    quickOrderService: QuickOrderService = new QuickOrderService();

    constructor() {
        this.Init();
    }

    Init(): void {
        this.quickOrderService.Init();
    }
}