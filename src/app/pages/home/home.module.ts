import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeTitleComponent } from './home-title/home-title.component';
import { BigCardComponent } from './big-card/big-card.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    HomeTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
