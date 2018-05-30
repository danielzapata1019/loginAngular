import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ] //Proveedor del servicio  
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";


  /*user: any = {
    email: "danielzapata1019@gmail.com",
    password: "12345"
  }*/
  //public email: string = 'Nancy';
  //public password: string = '12345';

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
    let user:any;
    user= localStorage.getItem('user');
    if(user != undefined){
      this.router.navigate(['main']);

    }
  }

  login(): void {
    let user: any = {
      name: this.email,
      id: this.password
    }
    let datos:any;
    console.log(user);
    this.loginService.getUsuarios().subscribe(res=>{
      if(res!=undefined){
        console.log(res);
        datos=res;
        if(user.name==datos.data.first_name && user.id== datos.data.id){
          localStorage.setItem("user",JSON.stringify(datos.data));
          this.router.navigate(['/main']);
        }else{
          console.log('no papa');
        }
      }
    });
    

  }
}
