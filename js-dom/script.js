const title = document.getElementById("title");
title.innerText = "Eu sunt un titlu setat din JavaScript";

const sendFilesButton = document.getElementById("send-files");
const sendFilesFeedBack = document.getElementById("send-files-feedback");

sendFilesButton.addEventListener("click", () => {
  sendFilesFeedBack.innerText = "Ai trimis fisierele cu succes!";
});

const shoppingList = document.getElementsByClassName("list-item");
const shoppingDoneButton = document.getElementById("shopping-done");

shoppingDoneButton.addEventListener("click", () => {
  for (let item of shoppingList) {
    item.innerText = item.innerText + "(Cumparat)";
  }
});
