import horrorPageHTML from "./horror_page.html"
import { createPage } from "@modules/routing";
import initBookList from "@modules/initialize_book_list";

const bookCategory = "fiction/horror/"

export function horrorPageRoute(){
	const fillHorrorContainer = createPage(horrorPageHTML)
	initBookList(bookCategory);
	return fillHorrorContainer;
}

