import { renderPopUp } from "@modules/pop-up/pop-up";
import { listenerOfBuyButton } from "@modules/listener_buy_button";
import { listenerOfFavButton } from "@modules/listener_favorite_button";

const buyButtonEvent = {
  background: "var(--global-success-color)",
  content: "The book is added to Shopping cart",
};

const favButtonEvent = {
  background: "var(--global-second-success-color)",
  content: "The book is added to Favorites",
};

let pathID;

export function bookItemListener(path, container = ".book-list") {
  const page = document.querySelector(container);

  page.addEventListener("click", (event) => {
    const currentBook = event.target.closest(".book");
    const buyButton = event.target.closest(".book__button-cart");
    const favButton = event.target.closest(".book__button-favorite");
    const bookCategory = currentBook?.children[0].getAttribute("data-category");
    const bookId = currentBook?.children[0].id;

    if (path === "fiction/" || path === "comics/") {
      pathID = `${path}${bookCategory}/${bookId}`;
    } else {
      pathID = `${path}${bookId}`;
    }

    if (buyButton) {
      renderPopUp(buyButtonEvent);
      listenerOfBuyButton(pathID);
    }

    if (favButton) {
      renderPopUp(favButtonEvent);
      listenerOfFavButton(pathID);
    }
  });
}
