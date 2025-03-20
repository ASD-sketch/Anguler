import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnChanges {
  @Input() userData: any;
  @Output() userUpdated = new EventEmitter<any>();

  userCopy: any;

  constructor(private service: ServiceService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userData'] && changes['userData'].currentValue) {
      this.userCopy = { ...this.userData };
    }
  }

  save() {
    this.service.updateUser(this.userCopy).subscribe(
      (response) => {
        sessionStorage.setItem('loggedUser', JSON.stringify(this.userCopy));
        this.userUpdated.emit(this.userCopy);
        alert('Profile updated successfully and saved to API!');
      },
      (error) => {
        alert('Error updating profile. Please try again.');
      }
    );
  }
}
