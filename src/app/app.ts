import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AccountList} from './components/account-list/account-list'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccountList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('banking-system-angular');
}
