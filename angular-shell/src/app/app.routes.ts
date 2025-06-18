import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactWrapperComponent } from './react-wrapper/react-wrapper.component';

export const routes: Routes = [
  { path: 'react-page', component: ReactWrapperComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];
