import { Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { SearchComponent } from './app/components/search/search.component';
import { ArtistaComponent } from './app/components/artista/artista.component';

export const ROUTES: Routes =[
    {path:'home',component: HomeComponent},
    {path:'search',component: SearchComponent},
    {path:'artist/:id',component: ArtistaComponent},
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'**',pathMatch:'full',redirectTo:'home'},
]