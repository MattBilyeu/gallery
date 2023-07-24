import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';

const routes: Routes = [
  {path: '', component: GalleryComponent, pathMatch: 'full'},
  {path: ':id', component: GalleryItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
