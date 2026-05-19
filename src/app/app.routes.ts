import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './services.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'gallery/:folder', component: GalleryComponent },
  { path: '**', redirectTo: '' }
];
