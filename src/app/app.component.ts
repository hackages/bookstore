import { Component, OnInit, EventEmitter } from "@angular/core";
import { BookService } from "./services/books.service";
import { Book } from "../types/book";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  title = "Bookstore by Hackages";
  books$: Observable<Book[]> = of([]);
  termEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private bs: BookService) {}

  ngOnInit(): void {
    this.books$ = this.bs.search(this.termEmitter.asObservable());
  }
}
