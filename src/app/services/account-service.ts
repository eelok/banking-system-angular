import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Account } from '../modes/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
                    
  private baseUrl = 'http://localhost:8081/api/v1/accounts';


  constructor(private http: HttpClient){
  }

  getAccountList(): Observable<Account[]>{
    return this.http.get<Account[]>(this.baseUrl);
  }

  getAccount(id: number): Observable<Account>{
    return this.http.get<Account>(`${this.baseUrl}/${id}`)
  }
  
}
