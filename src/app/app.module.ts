import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EuropeanCollectionComponent } from './european-collection/european-collection.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CeremonialComponent } from './ceremonial/ceremonial.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OffersComponent } from './offers/offers.component';


@NgModule({
  declarations: [
    AppComponent,
    EuropeanCollectionComponent,
    OurStoryComponent,
    NavbarComponent,
    CatalogueComponent,
    CeremonialComponent,
    GalleryComponent,
    LandingPageComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
