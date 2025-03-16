import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  register(formData: any) {
    this.authService.getUsers().subscribe(users => {
      const existingUser = users.find(user => user.email === formData.email);

      if (existingUser) {
        this.errorMessage = 'This email is already registered!';
        this.successMessage = '';
      } else {
        this.authService.register(formData).subscribe(response => {
          this.successMessage = 'User registered successfully!';
          this.errorMessage = '';

          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000);
        }, error => {
          this.errorMessage = 'Registration failed. Please try again!';
          this.successMessage = '';
          console.error('Error:', error);
        });
      }
    }, error => {
      console.error('Error fetching users:', error);
    });
  }
}
