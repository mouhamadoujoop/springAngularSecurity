import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from '../model/registerRequest';
import { AuthService } from '../services/auth.service';
import { AuthenticationResponse } from '../model/authenticationResponse';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Role } from '../model/role';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerRequest: RegisterRequest = {
    'firstname':'',
    'lastname': '',
    'email': '',
    'password': '',
    "role": Role.ADMIN
  };

  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {
    
  }

  register() {
    this.authService.register(this.registerRequest)
      .subscribe({
          next: authResponse => {
            let tokenInfos: AuthenticationResponse  = authResponse ?? null;
            console.log(tokenInfos);
          },
          error: err => {
            console.error('Error : ' + err)
          },
          complete: () => console.log('Observable emitted the complete notification')
    });
  }
}
