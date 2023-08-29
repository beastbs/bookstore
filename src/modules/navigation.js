const headerSearchForm = document.getElementsByClassName("header__form-search")[0];
const headerSearchInput = headerSearchForm.querySelector("input[name=search]");
const headerResetInputButton = headerSearchForm.querySelector("button[type=button]");
const headerSearchButton = document.querySelector(".header__button-search button");
const headerQuickLinks = headerSearchForm.querySelector("#quick-links");
const headerDropdownMenu = document.querySelectorAll(".header__navigation-dropdown");
 
 headerSearchButton.addEventListener("click", () => {
	const bodyHTML = document.body;
	const isActiveHeaderForm = headerSearchForm.className.includes(
	  "header__form-search-active"
	);
 
	headerSearchInput.addEventListener("input", (event) => {
	  const inputValue = event.target.value;
	  if (inputValue) {
		 headerResetInputButton.style.display = "block";
		 headerQuickLinks.style.display = "none";
	  } else {
		 headerResetInputButton.style.display = "none";
		 headerQuickLinks.style.display = "block";
	  }

	  searchBookByQuery(inputValue)
	});
 
	headerResetInputButton.addEventListener("click", () => {
	  headerSearchInput.value = "";
	  headerSearchInput.focus();
	  headerQuickLinks.style.display = "block";
	  headerResetInputButton.style.display = "none";
	});
 
	if (!isActiveHeaderForm) {
	  headerSearchForm.classList.add("header__form-search-active");
	  headerSearchInput.focus();
	  bodyHTML.style.overflow = "hidden";
	} else {
	  headerSearchForm.classList.remove("header__form-search-active");
	  bodyHTML.style.overflow = "visible";
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

// export function searchBookByQuery(value){
// 	console.log(value)
	
// }