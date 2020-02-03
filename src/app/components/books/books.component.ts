import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../types/book';

@Component({
  selector: 'bs-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input('books') items: Book[];

  ngOnInit() {}
}
