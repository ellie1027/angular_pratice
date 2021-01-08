import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { ContentModule } from './content/content.module';



@NgModule({
  declarations: [MainComponent, NavComponent],
  imports: [
    CommonModule,
    RouterModule,

    ContentModule
  ]
})
export class MainModule { }
