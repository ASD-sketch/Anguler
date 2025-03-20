import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;
  isPopupOpen = false;

  ngOnInit() {
    const savedUser = sessionStorage.getItem('loggedUser');
    if (savedUser) {
      this.userData = JSON.parse(savedUser);
    }
  }

  openEditPopup() {
    this.isPopupOpen = true;
  }

  closeEditPopup() {
    this.isPopupOpen = false;
  }

  updateUser(updatedUser: any) {
    this.userData = updatedUser;
    sessionStorage.setItem('loggedUser', JSON.stringify(this.userData));
    this.closeEditPopup();
  }
}
