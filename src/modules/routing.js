import { homePageRoute } from "@pages/home_page/home_page";
import { bookItemRoute } from "@pages/book_item/book_item_page";

import { fictionPageRoute } from "@pages/fiction_page/fiction_page";
import { horrorPageRoute } from "@pages/fiction_page/horror_page/horror_page";
import { fantasyPageRoute } from "@pages/fiction_page/fantasy_page/fantasy_page";
import { classicPageRoute } from "@pages/fiction_page/classic_page/classic_page";

import { thrillerPageRoute } from "@pages/thriller_page/thriller_page";
import { biographyHistoryPageRoute } from "@pages/biography-history_page/biography-history_page";

import { comicsPageRoute } from "@pages/comics_page/comics_page";
import { dcPageRoute } from "@pages/comics_page/dc_page/dc_page";
import { marvelPageRoute } from "@pages/comics_page/marvel_page/marvel_page";

import { childrenPageRoute } from "@pages/children_page/children_page";

import { favoritesPageRoute } from "@pages/favorites_page/favorites_page";
import { shoppingListPageRoute } from "@pages/shopping-list_page/shopping-list_page";

import { page404Route } from "@pages/page404/page404";

const pages = {
  "/home": homePageRoute,
  "/fiction": fictionPageRoute,
  "/fiction/horror": horrorPageRoute,
  "/fiction/fantasy": fantasyPageRoute,
  "/fiction/classic": classicPageRoute,
  "/thriller": thrillerPageRoute,
  "/biography-history": biographyHistoryPageRoute,
  "/comics": comicsPageRoute,
  "/comics/dc": dcPageRoute,
  "/comics/marvel": marvelPageRoute,
  "/children": childrenPageRoute,
  "/cart": shoppingListPageRoute,
  "/favorites": favoritesPageRoute,
};

const rootContainer = document.getElementById("root");
const productItemPath = "/product";
let currentRoute = "";

document.addEventListener("click", (event) => {
  const isLink = event.target.closest("a");

  if (isLink) {
    event.preventDefault();
    const href = isLink.getAttribute("href");
    changeRoute(href);
  }
});

function redirect(route) {
  if (route === "/") {
    route = "/home";
  }

  return route;
}

export function changeRoute(route) {
  rootContainer.innerHTML = "";
  window.history.pushState(null, null, route);
  const pageToMove = pages[route] || page404Route;

  if (route.includes(productItemPath)) {
    rootContainer.append(bookItemRoute());
    return;
  }

  rootContainer.append(pageToMove());
}

function router(route) {
  currentRoute = redirect(route);
  changeRoute(currentRoute);
}

router(window.location.pathname);

window.addEventListener("popstate", () => changeRoute(window.location.pathname));

export function createPage(currentPage) {
  const section = document.createElement("section");
  section.id = "page";
  section.innerHTML = currentPage;

  return section;
}
