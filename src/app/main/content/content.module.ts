import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front/front.component';
import { SubModule } from './sub/sub.module';


@NgModule({
  declarations: [FrontComponent],
  imports: [
    CommonModule,
    SubModule
  ]
})
export class ContentModule { }
