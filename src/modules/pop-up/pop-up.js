import "./pop-up.css";

function popUpHTML(eventType) {
  return `
	<div class="pop-up" style="background-color: ${eventType.background}">
	  <div class="pop-up__content">${eventType.content}</div>
	  <div class="pop-up__marker"></div>
   </div>
	`;
}

export function renderPopUp(eventType) {
  const bodyItem = document.querySelector("body");

  const popUp = document.createElement("div");
  popUp.innerHTML = popUpHTML(eventType);

  setTimeout(() => {
    bodyItem.append(popUp);
  }, 300);

  setTimeout(() => {
	popUp.remove()
  }, 4000);
}
