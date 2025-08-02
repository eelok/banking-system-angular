import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account-service';
import { Account } from '../../modes/account';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-details',
  imports: [CommonModule],
  templateUrl: './account-details.html',
  styleUrl: './account-details.css'
})
export class AccountDetails implements OnInit{

  account?: Account;
  errorMessage = "";
  loading = false;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    if(!id){
      this.errorMessage = "No id is provided";
      this.loading = false;
      return
    }
    if(isNaN(+id)){
      this.errorMessage = "Invalid account id";
      this.loading = false;
      return
    }
    this.accountService.getAccount(Number(id)).subscribe({
      next: (account => {
          this.account = account;
          this.loading = false;
      }),
      error: (error =>{
          this.errorMessage = error.error?.message || "api is failed";
          this.loading = false;
      })
    })
  }

}
