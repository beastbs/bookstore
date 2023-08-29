import fantasyPageHTML from "./fantasy_page.html"
import { createPage } from "@modules/routing";
import initBookList from "@modules/initialize_book_list";
// import { Book } from "../../../classes/Book";
// import bookService from "@services/book.service";

const booksCategory = "fiction/fantasy/"

export function fantasyPageRoute(){
	const fillFantasyContainer = createPage(fantasyPageHTML)
	initBookList(booksCategory);
	return fillFantasyContainer;
}

// async function initBookList(container = ".book-list"){
// 	try {
// 		const content = await bookService.getBooksByCategory(category);
// 		const bookCard = new Book(container);
// 		bookCard.renderBooks(content);
// 	} catch (error) {
// 		console.error(error)
// 	}
// }
