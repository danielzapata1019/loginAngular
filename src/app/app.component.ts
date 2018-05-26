import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router'; //Siempre que vaya a llamar una ruta de mi código debo implementar la clase router

@Component({
  selector: 'app-root',
  template:'<router-outlet></router-outlet>'
  /*templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
})
export class AppComponent {
  title = 'app';

  constructor(private router:Router){
    this.router.navigate(['login']);//Enrutar al login
  }
}
