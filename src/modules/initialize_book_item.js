import bookService from "@services/book.service";
import { Book } from "../classes/Book";

export async function initBookItem(path, container = ".book-item") {
  try {
    const bookItem = await bookService.getBookByPath(path);
    const bookCard = new Book(container);
    await bookCard.renderBookItem(bookItem);
  } catch (error) {
    console.error(error);
  }
}
