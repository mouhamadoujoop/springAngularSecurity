import { Injectable } from '@angular/core';
import { UserResultDTO, UserResultListDTO } from '../model/models';
import { Observable, of } from 'rxjs';
import { AuthenticationRequest } from '../auth/model/authenticationRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  all(): UserResultListDTO {
    let users: UserResultListDTO = {};
    let usersList: Array<UserResultDTO> = [];

    let userResultDTO: UserResultDTO = {
      "firtName": "Ngor", 
      "lastName": "SECK", 
      "email": "seck@seck.sn"
    };
    usersList.push(userResultDTO);

    let userResultDTO2: UserResultDTO = {
      "firtName": "Ngor", 
      "lastName": "SECK", 
      "email": "seck@seck.sn"
    };
    usersList.push(userResultDTO2);

    let userResultDTO3: UserResultDTO = {};
    userResultDTO3.firtName = "Moussa";
    userResultDTO3.lastName = "SECK";
    userResultDTO3.email = "moussa@seck.sn";
    usersList.push(userResultDTO3);

    users.resultUserList = usersList;

    return users;
  }

  allUser(): Observable<UserResultListDTO> {
    let users$: UserResultListDTO = {};
    let usersList: Array<UserResultDTO> = [];

    let userResultDTO: UserResultDTO = {
      "firtName": "Ngor", 
      "lastName": "SECK", 
      "email": "seck@seck.sn"
    };
    usersList.push(userResultDTO);

    let userResultDTO2: UserResultDTO = {
      "firtName": "Ngor", 
      "lastName": "SECK", 
      "email": "seck@seck.sn"
    };
    usersList.push(userResultDTO2);

    let userResultDTO3: UserResultDTO = {};
    userResultDTO3.firtName = "Moussa";
    userResultDTO3.lastName = "SECK";
    userResultDTO3.email = "moussa@seck.sn";
    usersList.push(userResultDTO3);

    users$.resultUserList = usersList;

    return of(users$);
  }
}
