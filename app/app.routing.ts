import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './components/home/home.component';
import { FeedbackComponent }      from './components/feedback/feedback.component';
import { HelpComponent }      from './components/help/help.component';

const appRoutes: Routes = [
	{path: '',  redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'feedback', component: FeedbackComponent},
	{path: 'help', component: HelpComponent}
];

export const routing = RouterModule.forRoot(appRoutes);