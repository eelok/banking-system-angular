import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Account } from '../../modes/account';
import { AccountService } from '../../services/account-service';


@Component({
  selector: 'app-account-list',
  imports: [CommonModule],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css'
})
export class AccountList implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    this.accountService.getAccountList().subscribe(account => {
      this.accounts = account;
    });
  }
  
}
