import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  {path: '', component: GalleryComponent, pathMatch: 'full'},
  {path: 'images/:id', component: ImagesComponent},
  {path: 'gallery.html', component: GalleryComponent},
  {path: ':id', component: GalleryItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
