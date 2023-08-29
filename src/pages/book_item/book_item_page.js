import bookItemHTML from "./book_item_page.html";
import { createPage } from "@modules/routing";
import { initBookItem } from "@modules/initialize_book_item";
import "./book_item_page.css";

export function bookItemRoute() {
  const bookPath = window.location.pathname.replaceAll("/product", "");
  const fillBookItemContainer = createPage(bookItemHTML);
  initBookItem(bookPath);
  return fillBookItemContainer;
}
