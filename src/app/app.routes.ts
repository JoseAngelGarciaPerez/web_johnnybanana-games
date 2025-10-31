import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { About } from './about/about';

export const routes: Routes = [
    {
        path:'',
        title: 'JohnnyBanana Games',
        component: Home,
    },
    
    {
        path:'projects',
        title: 'JohnnyBanana Games - Projects',
        component: Projects,
    },

    {
        path: 'about',
        title: 'JohnnyBanana Games - About',
        component: About,
    }
];
