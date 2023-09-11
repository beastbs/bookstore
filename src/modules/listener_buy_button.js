import bookService from "@services/book.service/";
import { setDataInLS ,getDataFromLS } from "@services/local_storage.service";

export const shoppingKey = "shoppingList";
let shoppingList;

export async function listenerOfBuyButton(path) {
  const currentBook = await bookService.getBookByPath(path);
  const newBook = {
    title: currentBook.title,
    authors: currentBook.authors,
    _id: currentBook._id,
    price: currentBook.price,
    currency: currentBook.currency,
    image: currentBook.image,
    coverType: currentBook.coverType,
    parentCategory: currentBook.parentCategory,
    category: currentBook.category,
    quantity: 1,
  };

  shoppingList = getDataFromLS(shoppingKey) || [];
  if (!shoppingList.length) {
    shoppingList.push(newBook);
    setDataInLS(shoppingKey, shoppingList)
    return;
  }

  const hasBookInShoppingList = shoppingList.some(
    (book) => book._id === newBook._id
  );
  
  if(!hasBookInShoppingList){
	shoppingList.push(newBook)
	setDataInLS(shoppingKey, shoppingList)
	return;
  } 

  shoppingList = shoppingList.map(book => book._id === newBook._id ? {...book, quantity: book.quantity += 1 } : book);
  setDataInLS(shoppingKey, shoppingList)
}
