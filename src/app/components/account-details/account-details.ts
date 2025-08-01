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

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id){
      console.error("No id is provided");
      return
    }
    if(isNaN(+id)){
      console.error("Invalid account id");
      return
    }
    this.accountService.getAccount(Number(id)).subscribe(account => {
      this.account = account
    })
  }

}
