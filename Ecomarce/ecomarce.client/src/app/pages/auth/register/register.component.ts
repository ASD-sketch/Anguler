import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private authService:AuthService, private router: Router) { }

  register(): void {
    this.authService.register(this.user).subscribe(() => {
      alert('Registration successful');
      this.router.navigate(['/login']);
    });
  }
}
