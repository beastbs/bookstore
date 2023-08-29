import biographyHistoryPageHTML from "./biography-history_page.html";
import {createPage} from "@modules/routing";
import initBookList from "@modules/initialize_book_list";

const biagraphyHistoryCategory = "biography-history/"

export function biographyHistoryPageRoute(){
	const fillBiagraphyHistoryContainer = createPage(biographyHistoryPageHTML)
	initBookList(biagraphyHistoryCategory)
	return fillBiagraphyHistoryContainer
};