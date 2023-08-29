import thrillerPageHTML from "./thriller_page.html";
import { createPage } from "@modules/routing";
import initBookList from "@modules/initialize_book_list";

const booksCategory = "thriller/";

export function thrillerPageRoute(){
	const fillThrillerContainer = createPage(thrillerPageHTML)
	initBookList(booksCategory)
	return fillThrillerContainer;
}