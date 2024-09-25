import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimrNgModule } from '../primr-ng/primr-ng.module';





@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimrNgModule,

  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
