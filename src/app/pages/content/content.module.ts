import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ContentPageComponent } from './content-page/content-page.component';

@NgModule({
  declarations: [
    ContentPageComponent
  ],
  exports: [
    ContentPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ContentModule { }
