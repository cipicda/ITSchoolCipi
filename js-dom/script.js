const title = document.getElementById("title");
title.innerText = "Eu sunt un titlu setat din JavaScript";

const sendFilesButton = document.getElementById("send-files");
const sendFilesFeedBack = document.getElementById("send-files-feedback");

sendFilesButton.addEventListener("click", () => {
  sendFilesFeedBack.innerText = "Ai trimis fisierele cu succes!";
});

const shoppingList = document.getElementsByClassName("list-item");
const shoppingDoneButton = document.getElementById("shopping-done");

const shoppingListDone = document.getElementById("shopping-list-done");

for (let item of shoppingList) {
  item.addEventListener("click", () => {
    const shoppingListDone = document.createElement("li");
    shoppingListDone.innerText = item.innerText;

    // shoppingListDone.appendChild(shoppingListDoneItem);

    item.innerText = item.innerText + " (Cumparat)";

    //item.removeEventListener("click");
  });
}

shoppingDoneButton.addEventListener("click", () => {
  for (let item of shoppingList) {
    item.innerText = item.innerText + "(Cumparat)";
  }
});

const allLiItems = document.getElementsByTagName("li");
console.log(allLiItems);

const titleWithQuerySelector = document.querySelectorAll(".shopping-list .list-item:nth-of-type(3)");
console.log(titleWithQuerySelector);

const backgroundColors = ["red", "green", "blue", "black"];

const rectangle = document.querySelector(".rectangle");
rectangle.addEventListener("click", () => {
  rectangle.style.backgroundColors = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  rectangle.classList.toggle("rectangle-style-1");
});
const titleElement = document.createElement("h1");
rectangle.innerHTML = "<h1>Acesta este un titlu</h1>";
titleElement.classList.add("title");

rectangle.appendChild(titleElement);

// let listElement = document.createElement("ul");
// let listItemElement = document.createElement("li");
// listItemElement.innerText = "List item 1";

// let listItemElement = document.createElement("li");
// listItemElement.innerText = "List item 2";

// let listItemElement = document.createElement("li");
// listItemElement.innerText = "List item 3";

// let listItemElement = document.createElement("li");
// listItemElement.innerText = "List item 4";

// listElement.appendChild(listItemElement);
// listElement.appendChild(listItemElement);
// listElement.appendChild(listItemElement);
// listElement.appendChild(listItemElement);

// listElement.append(listItem1Element, listItem2Element, listItem3Element, listItem4Element);

const link = document.createElement("a");
link.innerText = "Link to Google";

link.setAttribute("href", "https://google.ro");
link.setAttribute("target", "_blank");

rectangle.appendChild(link);
