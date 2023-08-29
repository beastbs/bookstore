import fantasyPageHTML from "./fantasy_page.html"
import { createPage } from "@modules/routing";
import initBookList from "@modules/initialize_book_list";

const booksCategory = "fiction/fantasy/"

export function fantasyPageRoute(){
	const fillFantasyContainer = createPage(fantasyPageHTML)
	initBookList(booksCategory);
	return fillFantasyContainer;
}
