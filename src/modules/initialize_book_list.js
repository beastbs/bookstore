import { Book } from "@classes/Book";
import bookService from "@services/book.service";
import { bookItemListener } from "@modules/book-listeners";

async function initBookList(category, container = ".book-list") {
  try {
    const content = await bookService.getBooksByCategory(category);
    const bookCard = new Book(container);
    bookCard.renderBookList(content);
    bookItemListener(category)

  } catch (error) {
    console.error(error);
  }
}

export default initBookList;
