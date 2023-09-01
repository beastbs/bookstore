import bookService from "@services/book.service/";
import { setDataInLS, getDataFromLS } from "@services/local_storage.service";

export const favoriteKey = "favoriteList";
let shoppingList;

export async function actionOfFavButton(path) {
  const currentBook = await bookService.getBookByPath(path);

  shoppingList = getDataFromLS(favoriteKey) || [];
  if (!shoppingList.length) {
    shoppingList.push(currentBook);
    setDataInLS(favoriteKey, shoppingList);
    return;
  }

  const hasBookInFavList = shoppingList.some(
    (book) => book._id === currentBook._id
  );
  
  if(!hasBookInFavList){
	shoppingList.push(currentBook)
	setDataInLS(favoriteKey, shoppingList);
	return;
  }

  setDataInLS(favoriteKey, shoppingList);
}
