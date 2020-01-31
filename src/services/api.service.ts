import { books } from "./../mocks/books";
import { InMemoryDbService } from "angular-in-memory-web-api";

// This is our fake backend
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      books
    };
  }
}
