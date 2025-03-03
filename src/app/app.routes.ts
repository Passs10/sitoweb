import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { MessageSentComponent } from './components/message-sent/message-sent.component';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'message-sent', component: MessageSentComponent },
    { path: '**', redirectTo: '/about' }
];
