import bookService from "@services/book.service";

function handleArrowsListener(container) {
  const horrorWrapper = container.querySelector(".home__best-horrors-wrapper");

  container.addEventListener("click", (event) => {
    const scrollRightArrow = event.target.closest(".home__best-horrors-arrow-right");
    const scrollLeftArrow = event.target.closest(".home__best-horrors-arrow-left");
    if (scrollRightArrow) {
      horrorWrapper.scrollBy(50, 0);
    }

	 if(scrollLeftArrow){
		horrorWrapper.scrollBy(-50, 0);
	 }

  });
}

export async function initBestHorrors(container) {
  const homeBestHorrorsContainer = container.querySelector(
    ".home__best-horrors"
  );
  const divWrapper = document.createElement("div");
  divWrapper.classList.add("home__best-horrors-wrapper");
  const title = `<h2>Best horror books of the Year: 2023</h2>`;

  try {
    const bookList = await bookService.getBestHorrors();
    const elements = Object.values(bookList).map((book) => {
      const html = `
		 <div class="home__best-horrors-link">
			<a href="/${book.category}/product/${book._id}" id=${book._id}>
			<div class="home__best-horrors-image">
			  <img src="${book.image}" alt="${book.title}" />
			</div>
			</a>
		 </div>
		`;

      return html;
    });

    divWrapper.innerHTML = elements.join("");
    homeBestHorrorsContainer.innerHTML += title;
    homeBestHorrorsContainer.append(divWrapper);

	 homeBestHorrorsContainer.style.display = "flex";

    handleArrowsListener(homeBestHorrorsContainer);
  } catch (error) {
    console.error(error);
  }
}
