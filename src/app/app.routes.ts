import { Routes } from '@angular/router';
import { AccountList } from './components/account-list/account-list';
import { AccountDetails } from './components/account-details/account-details';

export const routes: Routes = [
    {path: 'accounts', component: AccountList},
    {path: 'accounts/:id', component: AccountDetails}
];
