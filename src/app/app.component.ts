import { Component } from "@angular/core";
import { Book } from "../types/book";
import { BookService } from "../services/books.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "Bookstore by Hackages";

  constructor(private bookService: BookService) {}
  // Use mock data
  books: Book[] = this.bookService.getBooks();

  search(term: string) {
    this.books = this.bookService.searchWithoutObs(term);
  }
}
