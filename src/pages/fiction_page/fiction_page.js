import fictionPage from "./fiction_page.html";
import { createPage } from "@modules/routing";
import { Book } from "@classes/Book";
import bookService from "@services/book.service";

const fictionCategory = "fiction/";

export function fictionPageRoute() {
  const fillFictionContainer = createPage(fictionPage);
  initAllFictionBooks();
  return fillFictionContainer;
}

async function initAllFictionBooks() {
  try {
    const content = await bookService.getBooksByCategory(fictionCategory);
    const updatedContent = getArrayDataFromDB(content);
    const bookCard = new Book(".book-list");
    bookCard.renderBookList(updatedContent);

  } catch (error) {
    console.error(error);
  }
}

function getArrayDataFromDB(data) {
  const allFictionBooks = [];
  const values = Object.values(data);

  values.forEach((value) => {
    allFictionBooks.push(...Object.values(value));
  });

  return allFictionBooks;
}
