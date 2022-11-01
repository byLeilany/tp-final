import { Component, OnInit, Input  } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {

  user:User =new User();

  constructor(private loginuserservice: LoginuserService) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user)
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      alert("Ingresaste!")
    },error=>alert("Clave incorrecta"));
  }

}

