import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

const components = [NavbarComponent]

@NgModule({
  declarations: components, //컴포넌트 관리 선언
  imports: [
    CommonModule //외부 모듈을 가져올때
  ],
  exports: components,
  providers: [] //서비스
})
export class NavModule { }
