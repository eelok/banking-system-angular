import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../services/account-service';
import { AccountRequest } from '../../modes/AccountRequest';
import { Account } from '../../modes/account';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-account',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css'
})
export class CreateAccount {

  fullName: string = "";
  errorMessage = "";


  constructor(private accountService: AccountService){}

  createAccount(){
    const newAccount: Account = {
      fullName: this.fullName,
      iban: "new iban DE 1",
      currency: "EURO",
      balance: 1000,
      withdrawPerDayLimit: 2500
    }
    this.accountService.createAccount(newAccount).subscribe({
      next: (response) => {
        console.log(response);
          this.fullName = "";
      },
      error: (error) => {
        console.log("Error message:", error.error.message);
        this.errorMessage = error.error?.message || "api is failed"
      }
    })
  }
}
