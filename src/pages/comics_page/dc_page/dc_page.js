import dcPageHTML from "./dc_page.html";
import { createPage } from "@modules/routing";
import initBookList from "@modules/initialize_book_list";

const dcCategory = "comics/dc/";

export function dcPageRoute(){
	const fillDcContainer =  createPage(dcPageHTML);
	initBookList(dcCategory);
	return fillDcContainer;
}