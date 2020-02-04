import { Book } from "../../types/book";
import { BookService } from "../../services/books.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Location } from "@angular/common";
import { take } from "rxjs/operators";

@Component({
  selector: "bs-book-detail",
  templateUrl: "./book-detail.component.html"
})
export class BookDetailComponent implements OnInit {
  book: Book;
  // subscription: Subscription;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    // this.subscription = this.route.params
    //   .pipe(
    //     switchMap(params => this.bs.getBook(Number(params.id)))
    //     // take(1)
    //   )
    //   .subscribe(book => (this.book = book));

    // this.subscription = this.route.data.subscribe(
    //   data => (this.book = data.book)
    // );

    this.route.data.pipe(take(1)).subscribe(data => (this.book = data.book));
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  goBack() {
    this.location.back();
  }
  save() {}
}
