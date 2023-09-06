import httpService from "@services/http.service";
import horrorBooks from "../mock/horror.json";
import classicBooks from "../mock/classic.json";
import fantasyBooks from "../mock/fantasy.json";
import thrillerBooks from "../mock/thriller.json";
import biographyHistory from "../mock/biography-history.json";
import marvelBooks from "../mock/marvel.json";
import dcBooks from "../mock/dc.json";
import bestHorrors from "../mock/best-horrors.json";

import childrenBooks from "../mock/children.json";
import bestsellersBooks from "../mock/bestsellers.json";


const fictionPath = "fiction/";
const comicsPath = "comics/";

export async function initialize() {
  try {
	for(const horror of horrorBooks){
		await httpService.put(fictionPath + `horror/${horror._id}`, horror);
	}
	for(const classic of classicBooks){
		await httpService.put(fictionPath + `classic/${classic._id}`, classic);
	}

	for(const fantasy of fantasyBooks){
		await httpService.put(fictionPath + `fantasy/${fantasy._id}`, fantasy);
	}

	for(const bestseller of bestsellersBooks){
		await httpService.put("bestsellers/" + bestseller._id, bestseller);
	}

	for(const children of childrenBooks){
		await httpService.put("children/" + children._id, children);
	}

	for(const marvel of marvelBooks){
		await httpService.put(comicsPath +`marvel/${marvel._id}`, marvel);
	}

	for(const dc of dcBooks){
		await httpService.put(comicsPath + `dc/${dc._id}`, dc);
	}

	for(const thriller of thrillerBooks){
		await httpService.put("thriller/" + thriller._id, thriller);
	}

	for(const biography of biographyHistory){
		await httpService.put("biography-history/" + biography._id, biography);
	}

	for(const horror of bestHorrors){
		await httpService.put("best-horrors/" + horror._id, horror);
	}

  } catch (error) {
    console.error(error);
  }
}
