import { bookCardTemplate } from "../modules/book_card_template";
import { bookItemTemplate } from "@modules/book_item_template";

export class Book {
  constructor(container) {
    this.$el = document.querySelector(container);
  }

  async renderBookList(books) {
    this.$el.innerHTML = "";
    const booksFromDB = await books;

    Object.values(booksFromDB).forEach((book) => {
      const bookItem = document.createElement("div");
      bookItem.classList.add("book");
      const newBook = bookCardTemplate(book);
      bookItem.innerHTML = newBook;
      this.$el.append(bookItem);
    });
  }

  async renderBookItem(book) {
    this.$el.innerHTML = "";

    const bookFromDB = await book;
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item__wrapper");
    bookItem.innerHTML = `${bookItemTemplate(bookFromDB)}`;
    this.$el.append(bookItem);
  }
}
