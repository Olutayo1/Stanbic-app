import { Routes } from '@angular/router';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { InfoComponent } from './dashboard/info/info.component';


export const routes: Routes = [
    {path:'',redirectTo:'layout',pathMatch:'full'},
    {path:'layout', component:LayoutComponent},
    { path: 'info', component: InfoComponent },
    { path: '**', component: InfoComponent },
];
