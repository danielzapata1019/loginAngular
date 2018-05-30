import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //public url:string="http://tuplansrv.herokuapp.com/api/usuarios";
  public url:string="https://reqres.in/api/users/2";
  //contiene el llamado al servicio
  constructor(private http:HttpClient) { 

  }
  public getUsuarios():any{
    return this.http.get(this.url);
  }
}

//Observable: El método cuando el sever responda este recibe el tipo de dato que el servidor envie
//
