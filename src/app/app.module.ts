import { InMemoryDataService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  SearchComponentComponent,
  BooksComponent,
  HeaderComponent
} from './components';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    BooksComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
