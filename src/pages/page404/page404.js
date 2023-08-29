import page404 from "./page404.html";
import { createPage } from "../../modules/routing";

export function page404Route(){
		const fillRootContainer = createPage(page404);
		return fillRootContainer;
}

