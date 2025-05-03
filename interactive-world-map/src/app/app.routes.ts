import { Routes } from '@angular/router';
import { SvgMapComponent } from './svg-map/svg-map.component';

export const routes: Routes = [
    { path: 'home', component: SvgMapComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
