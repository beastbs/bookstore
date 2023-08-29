import marvelPageHTML from "./marvel_page.html";
import { createPage } from "@modules/routing";
import initBookList from "@modules/initialize_book_list";

const marvelCategory = "comics/marvel/";

export function marvelPageRoute(){
	const fillMarvelContainer =  createPage(marvelPageHTML);
	initBookList(marvelCategory);
	return fillMarvelContainer;
}