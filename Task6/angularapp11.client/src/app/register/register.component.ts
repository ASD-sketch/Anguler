import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private _ser: ServiceService) { }

  ngOnInit() {
    
  }

  

  postData(data:any) {
    this._ser.postNewUser(data).subscribe(() => {
      alert("add new user");
    });
  }

}
