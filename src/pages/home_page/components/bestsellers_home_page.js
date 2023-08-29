import bookService from "@services/book.service";
import { cutString } from "@modules/cut_string";

export async function initBestsellers(container) {
  const homeBestsellContainer = container.querySelector(".home__bestsell");
  const title = `<h2>Bestsellers</h2>`;

  try {
    const content = await bookService.getBestsellers();

    const elements = Object.values(content).map((book) => {
      const html = `
		<li>
			<a href="/bestsellers/${book._id}">
			  <div class="home__bestsell-content">
			     <div>
			       <img src="${book.image}" alt="${book.title}" />
			     </div>
			     <div class="home__bestsell-description">
			      <p><span>Title: </span>${cutString(book.title)}</p>
			      <p><span>Author: </span>${book.authors}</p>
			     </div>
			  </div>
			</a>
		</li>
			`;

      return html;
    });

    homeBestsellContainer.innerHTML = title;
    homeBestsellContainer.innerHTML += `<ul>${elements.join("")}</ul>`;

	 return homeBestsellContainer;
  } catch (error) {
    console.error(error);
  }
}
