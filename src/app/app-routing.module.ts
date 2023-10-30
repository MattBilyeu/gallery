import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';

const routes: Routes = [
  {path: '', component: GalleryComponent, pathMatch: 'full'},
  {path: ':id', component: GalleryItemComponent},
  {path: '/gallery.html', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
