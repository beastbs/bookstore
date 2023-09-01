import { cutString } from "./cut_string";

export function getCurrentPath(book) {
  const isFictionPage = window.location.pathname === "/fiction";
  const isComicsPage = window.location.pathname === "/comics";

  return isFictionPage || isComicsPage
    ? `${window.location.pathname}/${book.category}`
    : window.location.pathname;
}

export function bookCardTemplate(book) {
  const html = `
	  <a href="${getCurrentPath(book)}/product/${book._id}" id=${book._id} data-category=${book.category}>
	  <div class="book__image">
	    <img src="${book.image}" alt="${book.title}" />
	  </div>

		<div class="book__description">
	  <p>
	    <span>Title:</span>
	    ${cutString(book.title)}
	  </p>
	  <p>
	    <span>Author:</span>
		 ${book.authors}
	  </p>
	  <p>
	  <span>Price:</span>
	  ${book.price}${book.currency}
	</p>
		</div> 
		
	  </a>

	  <div class="book__buttons-wrapper">

		<buton class="book__button book__button-cart" id="main-button"">
				<img src="https://firebasestorage.googleapis.com/v0/b/bookstore-a6f57.appspot.com/o/images%2Ficons%2Fbx-cart-add.svg?alt=media&token=d14896bb-1d5b-4624-9553-c2c21b3c43f8" alt="cart" />
				<div>Buy</div>
			</buton>

			<buton class="book__button book__button-favorite" id="main-button"">
				<img src="https://firebasestorage.googleapis.com/v0/b/bookstore-a6f57.appspot.com/o/images%2Ficons%2Ffav-icon.svg?alt=media&token=008dc334-a0c9-42a5-9226-fc7c7dfa9a96" alt="favorite" />
				<div>Favorite</div>
			</buton>

		</div>

		

	`;

  return html;
}
