import { Component } from "@angular/core";
import { Book } from "../types/book";
import { books as mockBooks } from "../mocks/books";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "Bookstore by Hackages";

  // Use mock data
  books: Book[] = mockBooks;

  search(term: string) {
    // Implement the search function
    this.books = mockBooks.filter(book =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
