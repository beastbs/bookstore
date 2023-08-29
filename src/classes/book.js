import { bookCardTemplate } from "../modules/book_card_template";
import { bookItemTemplate } from "@modules/book_item_template";

export class Book {
  constructor(container) {
    this.$el = document.querySelector(container);
  }

  renderBookList(booksFromDB) {
    this.$el.innerHTML = "";

    Object.values(booksFromDB).forEach((book) => {
      const bookItem = document.createElement("div");
      bookItem.classList.add("book");
      const newBook = bookCardTemplate(book);
      bookItem.innerHTML = newBook;
      this.$el.append(bookItem);
    });
  }

  renderBookItem(book) {
    this.$el.innerHTML = "";
    const currentBook = bookItemTemplate(book);
    this.$el.innerHTML = currentBook;
  }
}
