import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { MessageSentComponent } from './components/message-sent/message-sent.component';

export const routes: Routes = [
    { path: '', redirectTo: '/chi-sono', pathMatch: 'full' },
    { path: 'chi-sono', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'contatti', component: ContactComponent },
    { path: 'message-sent', component: MessageSentComponent },
    { path: '**', redirectTo: '/chi-sono' }
];
