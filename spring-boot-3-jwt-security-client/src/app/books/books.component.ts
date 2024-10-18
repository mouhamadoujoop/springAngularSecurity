import { Component, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';
import { error } from 'console';
import { Book } from './model/book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  booksResult?: Array<Book> = []

  constructor(private bookService: BooksService){}

  ngOnInit(): void {
    this.bookService.allBooks().subscribe({
      next: books => {
        this.booksResult = books;
        console.log(this.booksResult);
      },
      error: error => console.log('Error...'),
      complete: () => console.log('Complet...')
    });
  }
}
