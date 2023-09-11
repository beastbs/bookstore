import page404 from "./page404.html";
import { createPage } from "../../modules/routing";
import { changeRoute } from "@/modules/routing";

import "./page404.css";

export function page404Route() {
  const fillRootContainer = createPage(page404);
  returnToHomePage(fillRootContainer);
  return fillRootContainer;
}

function returnToHomePage(container) {
  const counterHTML = container.querySelector(".page404__counter span");
  let countNumber = 5;

 const counterIntervalId = setInterval(() => {
    --countNumber;
    counterHTML.innerHTML = countNumber;
  }, 1000);

  setTimeout(() => {
    clearInterval(counterIntervalId);
    changeRoute("/home");
  }, 5000);
}
