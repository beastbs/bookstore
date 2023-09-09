import {
  getDataFromLS,
  setDataInLS,
  removeDataFromLS,
} from "@services/local_storage.service";
import { getCurrentPath } from "@modules/book_card_template";

function createButton() {
  const button = document.createElement("button");
  button.id = "remove-button";
  button.textContent = "Remove all";
  return button;
}

function favoritesTemplateHTML(book) {
  return `
	<a href="${getCurrentPath(book)}/product/${book._id}" id=${book._id}>
		<div class="book__image">
		<img src="${book.image}" alt="${book.title}" />
		</div>

	 <div class="book__description">
		<p>
		  ${book.title}
		</p>
		<p>
		  ${book.authors} <span>( Author )</span>
		</p>
		<p>
		  ${book.price}${book.currency}
	   </p>
	 </div> 	 
	</a>

	<div id="remove-item__button-icon">
		<button>
			<img src="https://firebasestorage.googleapis.com/v0/b/bookstore-a6f57.appspot.com/o/images%2Ficons%2Ftrash-alt.svg?alt=media&token=3b6ec1a1-05b6-4da6-97b1-9944bf088c44" alt="delete" />
		</button>
	</div>
	`;
}

function shoppingTemplateHTML(book) {
  return `
     <tr>
			<td class="shopping-page__image">
			  <a href="${getCurrentPath(book)}/product/${book._id}" id="${book._id}">
			    <img src="${book.image}" alt="${book.title}" />
			  </a>
			</td>
			<td class="shopping-page__description">
			  <a href="${getCurrentPath(book)}/product/${book._id}">
			    <p>${book.title}</p>
			    <p>${book.authors}</p>
			    <p>${book.coverType}</p>
			  </a>
			</td>
			<td class="shopping-page__qty">
			  <input type="number" min="1" value="${book.quantity}"/>
			</td>
			<td>
			  ${book.price}${book.currency}
			</td>
			<td id="remove-item__button-icon">
			  <button>
			    <img src="https://firebasestorage.googleapis.com/v0/b/bookstore-a6f57.appspot.com/o/images%2Ficons%2Ftrash-alt.svg?alt=media&token=3b6ec1a1-05b6-4da6-97b1-9944bf088c44" alt="delete" />
			  </button>
			</td>
			</tr>
	`;
}

export function renderFavoriteOrCartList(container, key, title) {
  let bookListFromLS = getDataFromLS(key);
  const bookListPage = container.children[0];
  const button = createButton();

  container.addEventListener("input", (event) => {
    const totalAmount = bookListPage.querySelector(".shopping-page__amount");
    const inputNumber = event.target.closest(".shopping-page__qty input[type='number']");
    const id = inputNumber.parentNode.parentNode.querySelector(".shopping-page__image a").id;

    if (inputNumber) {
      bookListFromLS = bookListFromLS.map((book) =>
        book._id === id
          ? { ...book, quantity: Number(inputNumber.value) }
          : book
      );
      setDataInLS(key, bookListFromLS);
      totalAmount.innerHTML = `${countTotalAmount(bookListFromLS)}$`;
    }

  });

  container.addEventListener("click", (event) => {
    const removeAllButton = event.target.closest("#remove-button");
    const removeItemButton = event.target.closest("#remove-item__button-icon");

    if (removeAllButton) {

      const isConfirmed = confirm("Are You sure to remove all books?")

      if(!isConfirmed) return;

      removeDataFromLS(key);
      container.innerHTML = `<div class="page__empty">${title} list is empty!</div>`;
    }

    if (removeItemButton) {

		const totalAmount = bookListPage.querySelector(".shopping-page__amount");
      const parentNode = removeItemButton.parentNode;
      const itemId = parentNode.querySelector("a").id;

      bookListFromLS = bookListFromLS.filter((book) => book._id !== itemId);

      parentNode.remove();
      setDataInLS(key, bookListFromLS);

		if(title === "Shopping"){
	     totalAmount.innerHTML = countTotalAmount(bookListFromLS);
		}

      if (!bookListFromLS || bookListFromLS.length === 0) {
        container.innerHTML = `<div class="page__empty">${title} list is empty!</div>`;
        removeDataFromLS(key);
        return;
      }
    }
  });

  if (!bookListFromLS || bookListFromLS.length === 0) {
    container.innerHTML = `<div class="page__empty">${title} list is empty!</div>`;
    return;
  }

  if (title === "Favorite") {
    bookListFromLS.forEach((book) => {
      const bookItem = document.createElement("div");
      bookItem.classList.add("fav-book");
      bookItem.innerHTML = favoritesTemplateHTML(book);
      bookListPage.append(bookItem);
    });

    bookListPage.append(button);

    return;
  }

  if (title === "Shopping") {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const theadContent = `
			<tr>
			  <th colspan="2">Item</th>
			  <th>Qty</th>
			  <th>Price</th>
			</tr>
	`;
    const tbody = document.createElement("tbody");
    const tfoot = document.createElement("tfoot");
    const tfootContent = `
	 	<tr class="shopping-page__total">
		  <td colspan="3">Total: </td>
		  <td class="shopping-page__amount">${countTotalAmount(bookListFromLS)}$</td>
		</tr>
	 `;

    bookListFromLS.forEach((book) => {
      const tr = shoppingTemplateHTML(book);
      tbody.innerHTML += tr;
    });

    thead.innerHTML = theadContent;

    table.append(thead);
    table.append(tbody);

    tfoot.innerHTML = tfootContent;
    table.append(tfoot);

    bookListPage.append(table);
    bookListPage.append(button);

    return;
  }
}

function countTotalAmount(bookList) {
  const result = bookList.reduce(
    (acc, curr) => (acc += curr.price * curr.quantity),
    0
  );

  return result.toFixed(2);
}
