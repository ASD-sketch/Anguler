import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData: any;

  constructor(private _ser: ServiceService, private router: Router) { }

  ngOnInit() { }

  getData(enteredUser: any) {
    this._ser.getAllUsers().subscribe((data) => {
      let user = data.find((p: any) => p.Email == enteredUser.Email && p.password == enteredUser.password);
      this.userData = user;

      if (user) {
        alert('Login successfully');
        sessionStorage.setItem('loggedUser', JSON.stringify(this.userData));
        this.router.navigate(['/profile']);
      } else {
        alert('Invalid Email or password');
      }
    });
  }
}

