import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimrNgModule } from '../primr-ng/primr-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';


@NgModule({
  declarations: [
    BasicPageComponent,
    NumberPageComponent,
    UncommonPageComponent,
    OrderComponent,

    //pipes
    ToggleCasePipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimrNgModule
  ]
})
export class ProductsModule { }
