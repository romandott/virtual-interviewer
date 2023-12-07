import { Route } from '@angular/router';
import { VacancyComponent } from './components/vacancy';
import { ChatboxComponent } from './components/chatbox';

export const appRoutes: Route[] = [
    {
        path: '',
        component: VacancyComponent
    },
    {
        path: 'chatbox',
        outlet: 'popup',
        children: [
            {
                path: ':id',
                component: ChatboxComponent
            }
        ]
    }
];
