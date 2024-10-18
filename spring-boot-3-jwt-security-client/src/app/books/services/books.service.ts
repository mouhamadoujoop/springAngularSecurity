import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  protected basePath = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  allBooks() : Observable<Array<Book>> {

    return this.http.get<Array<Book>>(`${this.basePath}/api/v1/books`);
  }

}
