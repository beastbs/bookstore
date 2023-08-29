import { Book } from "../classes/Book";
import bookService from "@services/book.service";

async function initBookList(category, container = ".book-list") {
  try {
    const content = await bookService.getBooksByCategory(category);
    const bookCard = new Book(container);
    bookCard.renderBookList(content);
  } catch (error) {
    console.error(error);
  }
}

export default initBookList;
