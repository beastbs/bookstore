import comicsPageHTML from "./comics_page.html";
import { createPage } from "@modules/routing";
import bookService from "@services/book.service";
import { Book } from "../../classes/Book";
// import "./comics_page.css";
// import { handleLinksListener } from "@modules/routing";

const comicsCategory = "comics/";

export function comicsPageRoute(){
	const fillComicsContainer =  createPage(comicsPageHTML);
	initAllComicsList();
	return fillComicsContainer;
}

function getArrayDataFromDB(data){
	const allComicsBooks = []
	const values = Object.values(data);

	values.forEach(value => {
		allComicsBooks.push(...Object.values(value));
	});

	return allComicsBooks;
}

async function initAllComicsList(){
	try {
		const content = await bookService.getBooksByCategory(comicsCategory);
		const updatedContent = getArrayDataFromDB(content)
		const bookCard = new Book(".book-list");
		bookCard.renderBookList(updatedContent);

		// handleLinksListener("a");
	} catch (error) {
		console.error(error);
	}
}