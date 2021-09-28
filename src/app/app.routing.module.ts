import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { JogoatualComponent } from './jogoatual/jogoatual.component';
import { PredictComponent } from './predict/predict.component';
import { UltimapartidaComponent } from './ultimapartida/ultimapartida.component';
import { VersusComponent } from './versus/versus.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'lastgame', component: UltimapartidaComponent},
    {path: 'predict', component: PredictComponent},
    {path: 'versus', component: VersusComponent},
    {path: 'now', component: JogoatualComponent},
    //{path: '', redirectTo: '/', pathMatch: 'full'}
    //{path: "",  component: HomeComponent, pathMatch: "full"},
    {path: '**', component: HomeComponent}
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