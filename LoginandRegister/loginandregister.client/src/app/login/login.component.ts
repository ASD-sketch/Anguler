import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(formData: any) {
    this.authService.getUsers().subscribe(users => {
      const user = users.find(user =>
        user.email === formData.email && user.password === formData.password
      );

      if (user) {
        this.successMessage = 'Login successful!';
        this.errorMessage = '';

        sessionStorage.setItem('loggedInUserEmail', user.email);
        sessionStorage.setItem('loggedInUserName', user.name);
        sessionStorage.setItem('ID', user.id);

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      } else {
        this.errorMessage = 'Invalid email or password!';
        this.successMessage = '';
      }
    }, error => {
      console.error('Error fetching users:', error);
    });
  }
}
