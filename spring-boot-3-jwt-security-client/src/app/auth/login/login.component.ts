import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/apis';
import { AuthenticationRequest } from '../model/authenticationRequest';
import { AuthService } from '../services/auth.service';
import { AuthenticationResponse } from '../model/authenticationResponse';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  providers: [UserService, AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  authRequest: AuthenticationRequest = {
    'email': '',
    'password': ''
  };

  constructor(private router: Router, 
              private userService: UserService, 
              private authService: AuthService) { }
  
  ngOnInit(): void {
    //console.log(this.userService.all());

    /*this.userService.all().resultUserList?.forEach(user => {
      console.log(user)
    })*/
    
    this.userService.allUser().subscribe({
      next: users => users.resultUserList?.forEach(user => {
        console.log(user)
      }),
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => console.log('Observable emitted the complete notification')
    });
  }
 
  login() {
    console.log('Au niveau du composant : ' + this.authRequest.email)
    this.authService.getLogin(this.authRequest)
              .subscribe({
                      next: authResponse => {
                        let tokenInfos: AuthenticationResponse  = authResponse ?? null;
                        console.log(tokenInfos);
                        console.log('TOKEN : ' + tokenInfos.access_token)
                        localStorage.setItem('token', tokenInfos.access_token ?? '');
                        console.log('storage : ' + localStorage.getItem('token'));
                        this.router.navigate(['/home']);
                      },
                      error: err => {
                        console.error('Email or password is not correct. : ' + err)
                        this.authRequest.password = '';
                      },
                      complete: () => console.log('Observable emitted the complete notification')
              });
  }

}
