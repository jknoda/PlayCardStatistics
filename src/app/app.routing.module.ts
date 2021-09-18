import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { CadastroComponent } from './cadastro/cadastro.component';
//import { GridtesteComponent } from './gridteste/gridteste.component';
import { HomeComponent } from './home/home.component';
//import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
    //{path: 'cadastro', component: CadastroComponent},
    //{path: 'gridteste', component: GridtesteComponent},
    //{path: 'map', component: MapComponent},
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}