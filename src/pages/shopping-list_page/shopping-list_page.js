import shoppingListPage from "./shopping-list_page.html";
import { createPage } from "../../modules/routing";
import { shoppingKey } from "@modules/action_buy_button";
import { renderFavoriteOrCartList } from "@modules/favorite-cart_utils";

import "./shopping-list_page.css";

export function shoppingListPageRoute() {
	const fillRootContainer = createPage(shoppingListPage);
	renderFavoriteOrCartList(fillRootContainer, shoppingKey, "Shopping");
	return fillRootContainer;
 }