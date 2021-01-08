import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SubComponent } from './sub.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { Sub3Component } from './sub3/sub3.component';




@NgModule({
  declarations: [
    SubComponent,
    Sub1Component, Sub2Component, Sub3Component
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [SubComponent]
})
export class SubModule { }
