export function setDataInLS(key, value){
	localStorage.setItem(key, JSON.stringify(value));
}

export function getDataFromLS(key){
	return JSON.parse(localStorage.getItem(key));
}

export function removeDataFromLS(key){
	localStorage.removeItem(key);
}


const localStorageService = {
	setDataInLS,
	getDataFromLS,
	removeDataFromLS
}

export default localStorageService;