import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Account } from '../../modes/account';
import { AccountService } from '../../services/account-service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-account-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css'
})
export class AccountList implements OnInit {

  accounts: Account[] = [];
  errorMessage = "";
  loading = false;


  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    this.loading = true;
    this.errorMessage = "";
       this.accountService.getAccountList().subscribe({
        next: (accounts => {
          this.accounts = accounts;
          this.loading = false;
        }),
        error: (error => {
          console.log('Error occurred: ', error);
          this.loading = false;
          this.errorMessage = error.error?.message || "api is failed"
        })
       });
  }
  
}
