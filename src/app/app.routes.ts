import { Route } from '@angular/router';
import { VacancyComponent } from './components/vacancy';
import { ChatboxComponent } from './components/chatbox';
import { AssistantChatComponent } from './components/assistant-chat';

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
                path: '',
                component: ChatboxComponent,
                children: [
                    {
                        path: ':id',
                        component: AssistantChatComponent
                    }
                ]
            }
        ]
    }
];
