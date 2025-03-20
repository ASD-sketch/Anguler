import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = '';
  email: string = '';
  userId: number = 0;

  storedUser: any;
  storedEmail: any;

  isEditMode: boolean = false;
  updatedUsername: string = '';
  updatedEmail: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.storedUser = sessionStorage.getItem('loggedInUserName');
    this.storedEmail = sessionStorage.getItem('loggedInUserEmail');
    const userId = sessionStorage.getItem('loggedInUserId');

    if (userId) {
      this.userId = JSON.parse(userId);
    }

    if (this.storedUser && this.storedEmail) {
      this.username = JSON.parse(this.storedUser);
      this.email = JSON.parse(this.storedEmail);
      this.updatedUsername = this.username;
      this.updatedEmail = this.email;
    }
  }

  openEditPopup() {
    this.isEditMode = true;
  }

  closeEditPopup() {
    this.isEditMode = false;
  }

  updateProfile() {
    const updatedData = {
      id: this.userId,
      username: this.updatedUsername,
      email: this.updatedEmail
    };

    this.authService.updateUser(updatedData).subscribe(response => {
      sessionStorage.setItem('loggedInUserName', JSON.stringify(this.updatedUsername));
      sessionStorage.setItem('loggedInUserEmail', JSON.stringify(this.updatedEmail));

      this.username = this.updatedUsername;
      this.email = this.updatedEmail;

      alert('Done');
      this.closeEditPopup();
    }, error => {
      console.error('Error', error);
    });
  }
}
