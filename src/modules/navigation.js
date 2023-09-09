// import { searchBooksByTitle } from "../index";
import bookService from "@services/book.service";

const root = document.querySelector("#root");
const bodyHTML = document.body;

const headerSearchModal = document.querySelector(".header__form-search");
const headerSearchInput = headerSearchModal.querySelector("#search");
const headerResetButton = headerSearchModal.querySelector(".header__form-clear");
const headerQuickLinks = headerSearchModal.querySelector("#quick-links");
const headerDropdownMenu = document.querySelectorAll(".header__navigation-dropdown");

window.addEventListener("click", (event) => handleSearchModalListener(event));

function handleSearchModalListener(event) {
  const isSearchFormModal = event.target.closest(".header__form-search");
  const isSearchButton = event.target.closest(".header__button-search");
  const isClearInputButton = event.target.closest(".header__form-clear");
  const isQuickLink = event.target.closest("#quick-links a");
  const hasActiveClassSearchForm = headerSearchModal.className.includes(
    "header__form-search-active"
  );

  if (isSearchButton && !hasActiveClassSearchForm) {
    headerSearchModal.classList.add("header__form-search-active");
    headerSearchInput.focus();
    bodyHTML.style.overflow = "hidden";
    root.style.filter = "blur(4px)";
    return;
  }

  if (
    !isSearchFormModal ||
    (isSearchButton && hasActiveClassSearchForm) ||
    isQuickLink
  ) {
    headerSearchModal.classList.remove("header__form-search-active");
    bodyHTML.style.overflow = "visible";
    root.style.filter = "none";
  }

  if (isClearInputButton) {
    headerSearchInput.value = "";
    headerSearchInput.focus();
    toggleDisplayElement(headerQuickLinks, "block");
    toggleDisplayElement(headerResetButton, "none");
  }
}

headerSearchInput.addEventListener("input", async (event) => {
  const inputValue = event.target.value.trim();
  const ul = headerQuickLinks.querySelector("ul");

  const defaultList = `
    <li>
      <a href="/fiction/fantasy">
        <img src="https://firebasestorage.googleapis.com/v0/b/bookstore-a6f57.appspot.com/o/images%2Ficons%2Flink-arrow.svg?alt=media&token=8ac82684-1d37-4837-b181-f0e625e809ac" alt="right arrow" />
        <span>Fantasy</span>
      </a>
    </li>
    <li>
      <a href="/comics/marvel">
        <img src="https://firebasestorage.googleapis.com/v0/b/bookstore-a6f57.appspot.com/o/images%2Ficons%2Flink-arrow.svg?alt=media&token=8ac82684-1d37-4837-b181-f0e625e809ac" alt="right arrow" />
        <span>Marvel</span>
      </a>
    </li>
  `

  if (inputValue) {
    const searchResult = await searchBooksByTitle(inputValue);
    toggleDisplayElement(headerResetButton, "block");
    displayResults(searchResult, ul);
  } else {
    toggleDisplayElement(headerResetButton, "none");
    ul.innerHTML = defaultList;
  }

});

// Dropdown menu
function handleEventListener(
  event,
  item,
  style,
  selector = ".header__navigation-dropdown-content"
) {
  item.addEventListener(event, () => {
    const children = item.querySelector(selector);
    children.style.display = style;
  });
}

headerDropdownMenu.forEach((element) => {
  handleEventListener("mouseover", element, "flex");
  handleEventListener("mouseout", element, "none");
});

function toggleDisplayElement(element, displayValue) {
  element.style.display = displayValue;
}

function displayResults(results, container) {

  if (!results.length) {
    container.innerHTML = "No results for this query.";
    return;
  }

  const resultList = results.map((book) => 
    `<li>
      <a href="/${book.category}/product/${book._id}">
      <img src="https://firebasestorage.googleapis.com/v0/b/bookstore-a6f57.appspot.com/o/images%2Ficons%2Flink-arrow.svg?alt=media&token=8ac82684-1d37-4837-b181-f0e625e809ac" alt="${book.title}" />
      <span>${book.title}</span>
    </a>
    </li>`
  );

  
  container.innerHTML = resultList.join("");
}

async function searchBooksByTitle(query){
	const allBestHorrors = await bookService.getBestHorrors();
	return Object.values(allBestHorrors).filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
}
