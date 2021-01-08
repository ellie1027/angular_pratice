import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { MainComponent } from './main/main.component';
import { FrontComponent } from './main/content/front/front.component';
import { SubComponent } from './main/content/sub/sub.component';
import { Sub1Component } from './main/content/sub/sub1/sub1.component';
import { Sub2Component } from './main/content/sub/sub2/sub2.component';
import { Sub3Component } from './main/content/sub/sub3/sub3.component';

const routes: Routes = [
  { path : '', component: MainComponent,
    children: [
      {path: '', component: FrontComponent},
      {path: 'sub', component: SubComponent,
       children: [
        {path: '1', component: Sub1Component},
        {path: '2', component: Sub2Component},
        {path: '3', component: Sub3Component},
        
        {path: '**', redirectTo: '1', pathMatch: 'full'}
        
       ]},

       {path: '**', redirectTo:'', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }