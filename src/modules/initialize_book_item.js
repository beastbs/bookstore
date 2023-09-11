import bookService from "@services/book.service";
import { Book } from "@classes/Book";
import { bookItemListener } from "@modules/book-listeners";

export async function initBookItem(path, container = ".book") {
  try {
    const bookItem = await bookService.getBookByPath(path);
    const bookCard = new Book(container);
    await bookCard.renderBookItem(bookItem);

    bookItemListener(path, container);
  } catch (error) {
    console.error(error);
  }
}
