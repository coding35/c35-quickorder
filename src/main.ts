import { AppComponent } from './core/component/app.component';


customElements.define('c35-app', AppComponent);


/*
import {QuickOrderService} from './core/service/quickorder.service';
import {ListComponent} from './core/component/list.component';

export class C35QuickOrder {
  quickOrderService: QuickOrderService = new QuickOrderService();

  constructor() {
    this.Init();
  }

  Init(): void {
    console.log('C35QuickOrder');
    customElements.define('c35-list', ListComponent);
  }
}
*/