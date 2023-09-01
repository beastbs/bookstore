import favoritePage from "./favorites_page.html";
import { createPage } from "../../modules/routing";
import { renderFavoriteOrCartList } from "@modules/favorite-cart_utils";
import { favoriteKey } from "@modules/action_favorite_button";

import "./favorites_page.css";

export function favoritesPageRoute() {
	const fillRootContainer = createPage(favoritePage);
	renderFavoriteOrCartList(fillRootContainer, favoriteKey, "Favorite")
	return fillRootContainer;
 }