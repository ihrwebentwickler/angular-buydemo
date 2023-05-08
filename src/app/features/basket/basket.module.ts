import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';

import {BasketComponent} from "./pages/basket.component";
import {BasketRoutingModule} from "./basket-routing.module";

@NgModule({
  imports: [
    CommonModule,
    BasketRoutingModule
  ],
  declarations: [
    BasketComponent
  ],
  providers: []
})
export class BasketModule {
}
