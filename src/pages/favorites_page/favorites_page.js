import favoritePage from "./favorites_page.html";
import { createPage } from "../../modules/routing";

export function favoritesPageRoute() {
	const fillRootContainer = createPage(favoritePage);
	return fillRootContainer;
 }