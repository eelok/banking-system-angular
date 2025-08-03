import { Routes } from '@angular/router';
import { AccountList } from './components/account-list/account-list';
import { AccountDetails } from './components/account-details/account-details';
import { CreateAccount } from './components/create-account/create-account';

export const routes: Routes = [
    {path: 'accounts', component: AccountList,},
    {path:  'accounts/create', component: CreateAccount},
    {path: 'accounts/:id', component: AccountDetails}
];
