import {RouterModule, Routes} from '@angular/router';
import { MainDestacadosComponent } from './components/main-destacados/main-destacados.component';
import { MainEnSubastaComponent } from './components/main-en-subasta/main-en-subasta.component';

const APP_ROUTES: Routes = [
    { path: '', component: MainDestacadosComponent },
    { path: "destacados", component: MainDestacadosComponent },
    { path: "subasta", component: MainEnSubastaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'destacados' }
];


export const app_routing = RouterModule.forRoot(APP_ROUTES);