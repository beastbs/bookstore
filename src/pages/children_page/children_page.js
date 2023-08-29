import childrenPageHTML from "./children_page.html";
import {createPage} from "@modules/routing";
import initBookList from "@modules/initialize_book_list";

const  childrenCategory = "children/";

export function childrenPageRoute(){
	const fillChildrenContainer = createPage(childrenPageHTML);
	initBookList(childrenCategory);
	return fillChildrenContainer
}