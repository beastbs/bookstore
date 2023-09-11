import shoppingListPage from "./shopping-list_page.html";
import { createPage } from "@modules/routing";
import { shoppingKey } from "@modules/listener_buy_button";
import { renderFavoriteOrCartList } from "@modules/favorite-cart_utils";

import "./shopping-list_page.css";

const title = "Shopping"

export function shoppingListPageRoute() {
	const fillRootContainer = createPage(shoppingListPage);
	renderFavoriteOrCartList(fillRootContainer, shoppingKey, title);
	return fillRootContainer;
 }