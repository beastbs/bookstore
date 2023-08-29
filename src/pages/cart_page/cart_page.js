import cartPage from "./cart_page.html";
import { createPage } from "../../modules/routing";

export function cartPageRoute() {
	const fillRootContainer = createPage(cartPage);
	return fillRootContainer;
 }