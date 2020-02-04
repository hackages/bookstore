import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { Book } from "@models";

@Component({
  selector: "bs-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent {
  @Input() items: Book[];

  // @ViewChild("container", { static: true })
  // container: ElementRef<HTMLDivElement>;

  // @ViewChildren("link")
  // books: ElementRef<HTMLAnchorElement>;

  // constructor() {}

  // ngOnInit() {}
  // ngAfterViewInit() {
  //   console.log(this.container.nativeElement);
  //   console.log(this.books);
  // }
}
