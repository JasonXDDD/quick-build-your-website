import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageSiteComponent } from './page-site/page-site.component';
import { AddNewPageComponent } from './add-new-page/add-new-page.component';
import { PageItemComponent } from './page-site/page-item/page-item.component';
import { SetTemplateComponent } from './set-template/set-template.component';
import { BigPicsComponent } from './set-template/big-pics/big-pics.component';
import { FullSliderComponent } from './set-template/full-slider/full-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    PageSiteComponent,
    AddNewPageComponent,
    PageItemComponent,
    BigPicsComponent,
    SetTemplateComponent,
    BigPicsComponent,
    FullSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
