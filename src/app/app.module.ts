import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { ToHtmlPipe } from './shared/to-html.pipe';
import { ImagesComponent } from './images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryItemComponent,
    ToHtmlPipe,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
