export function bookItemTemplate(book) {
  const html = `

	  	<div class="book-item__image">
		  <img src="${book.image}" alt="${book.title}" />
		</div>

		<div class="book-item__content">
			<h1>${book.title}</h1>
			<p>
			  ${book.authors} <span>(Author)</span>
			</p>

			<div class="book-item__buttons">
			  <buton class="book__button" id="main-button"">
					<img src="https://firebasestorage.googleapis.com/v0/b/bookstore-a6f57.appspot.com/o/images%2Ficons%2Fbx-cart-add.svg?alt=media&token=d14896bb-1d5b-4624-9553-c2c21b3c43f8" alt="cart" />
					<div>Buy</div>
				</buton>
	
				<buton class="book__button" id="main-button"">
					<img src="https://firebasestorage.googleapis.com/v0/b/bookstore-a6f57.appspot.com/o/images%2Ficons%2Ffav-icon.svg?alt=media&token=008dc334-a0c9-42a5-9226-fc7c7dfa9a96" alt="favorite" />
					<div>Favorite</div>
				</buton>
			</div>

			<div class="book-item__description">
			  <h3>Description</h3>
			  <p>${book.description}</p>
			</div>

			<div class="book-item__details">
			  <h3>Product Details</h3>
				<p>
				  <span>Price:</span> ${book.currency}${book.price}
				</p>
				<p>
				  <span>Pages:</span> ${book.pages}
				</p>
				<p>
				  <span>Language:</span> ${book.language}
				</p>
				<p>
				  <span>Type:</span> ${book.coverType}
				</p>
			</div>
		</div>
`;
  return html;
}
