
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulingComponent } from './scheduling/scheduling.component'

import { HomeComponent } from './shared/home.component'


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
           { path: '', component: HomeComponent },    
           { path: 'home', component: HomeComponent }, 
            {path: 'scheduling', component:SchedulingComponent},
        
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
