import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';

export const routes: Routes = [
    {
        path:'',
        title: 'App Home Page',
        component: Home,
    },
    
    {
        path:'projects',
        title: 'Projects',
        component: Projects,
    }
];
