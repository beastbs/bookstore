import homePage from "./home_page.html";
import { createPage } from "@modules/routing";
import { initSliders } from "./components/slider_home_page";
import { initBestsellers } from "./components/bestsellers_home_page";
// import bookService from "@services/book.service";
import "./home_page.css";



export function homePageRoute() {
  const fillRootContainer = createPage(homePage);
  initSliders(fillRootContainer);
  const bestsellersHTML = initBestsellers(fillRootContainer);
  openCurrentBestseller(bestsellersHTML);
  return fillRootContainer;
}

async function openCurrentBestseller(renderedHTML){
  try {
    await renderedHTML;
    // handleLinksListener(".home__bestsell a")
  } catch (error) {
    console.error(error)
  }
}
