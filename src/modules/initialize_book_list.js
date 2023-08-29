import { Book } from "../classes/Book";
import bookService from "@services/book.service";
// import { handleLinksListener } from "./routing";

async function initBookList(category, container = ".book-list") {
  try {
    const content = await bookService.getBooksByCategory(category);
    const bookCard = new Book(container);
    bookCard.renderBookList(content);

    // handleLinksListener("a")
  } catch (error) {
    console.error(error);
  }
}

export default initBookList;
