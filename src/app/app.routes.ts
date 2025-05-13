import { Routes } from '@angular/router';
import { LandPageComponent } from './components/land-page/land-page.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';

export const routes: Routes = [
    {
        path:"",
        component: LandPageComponent
    },
    {
        path:"tasks",
        component: ListTasksComponent
    }
    
];
