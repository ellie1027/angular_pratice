import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerContent1Component } from './inner-content1/inner-content1.component';
import { InnerContent2Component } from './inner-content2/inner-content2.component';
import { InnerContent3Component } from './inner-content3/inner-content3.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [InnerContent1Component, InnerContent2Component, InnerContent3Component, ContentComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
