import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../services/account-service';
import { Account } from '../../modes/account';
import { CommonModule } from '@angular/common';
import { availableCurrencies } from './sharedConst';

@Component({
  selector: 'app-create-account',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css'
})
export class CreateAccount {

  fullName: string = "";
  selectedCurrency: string = "";
  availableCurrencies = availableCurrencies;
  errorMessage = "";


  constructor(private accountService: AccountService){}

  createAccount(){
    if(!this.selectedCurrency){
      this.errorMessage = "a currency is required";
      return
    }
    if(!this.availableCurrencies.includes(this.selectedCurrency.trim())){
      this.errorMessage = `${this.selectedCurrency} + is not a valid currency`;
      return;
    }
    console.log("selecte currence", this.selectedCurrency);
    const newAccount: Account = {
      fullName: this.fullName,
      iban: "new iban DE 141s",
      currency: this.selectedCurrency,
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
