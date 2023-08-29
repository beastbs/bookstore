import classicPageHTML from "./classic_page.html"
import { createPage } from "@modules/routing";
import initBookList from "@modules/initialize_book_list";

const booksCategory = "fiction/classic/";

export function classicPageRoute(){
	const fillClassicContainer = createPage(classicPageHTML)
	initBookList(booksCategory);
	return fillClassicContainer;
}
