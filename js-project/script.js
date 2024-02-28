const boardNameInput = document.getElementById("board-name");
const boardTitleElement = document.getElementById("board-title");

const addColumnInput = document.getElementById("column-name");
const addColumnButton = document.getElementById("column-add");

const boardElement = document.getElementById("board");

let columns = [];

function getDefaultBoardName() {
  const defaultBoardName = localStorage.getItem("boardName");
  setBoardName(defaultBoardName ? defaultBoardName : "New Board");
}

function setBoardName(name) {
  boardNameInput.value = name;
  boardTitleElement.innerHTML = `<i class="fa-solid fa-clipboard"></i> ${name}`;
  localStorage.setItem("boardName", name);
}

boardNameInput.addEventListener("change", (event) => {
  setBoardName(event.target.value);
});

addColumnButton.addEventListener("click", () => {
  const newColumnName = addColumnInput.value;
  if (!newColumnName) return;

  columns.push({ name: newColumnName, tasks: [] });
  saveColumns();
  refreshBoard();
});

function getDefaultColumns() {
  const defaultColumns = localStorage.getItem("columns");
  if (defaultColumns) {
    columns = JSON.parse(defaultColumns);
  }

  showColumns();
}

function saveColumns() {
  localStorage.setItem("columns", JSON.stringify(columns));
}

function showColumns() {
  columns.forEach((column) => {
    const columnElement = document.createElement("div");
    columnElement.classList.add("column");

    const columnTitleContainer = document.createElement("div");
    columnTitleContainer.classList.add("title-container");

    const columnTitleElement = document.createElement("h3");
    columnTitleElement.classList.add("title");
    columnTitleElement.textContent = column.name;

    const columnTitleDeleteButton = document.createElement("button");
    columnTitleDeleteButton.classList.add("delete");
    columnTitleDeleteButton.addEventListener("click", () => {
      deleteColumn(column.name);
    });
    columnTitleDeleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    columnTitleContainer.appendChild(columnTitleElement);
    columnTitleContainer.appendChild(columnTitleDeleteButton);

    const taskConntainerElement = document.createElement("div");
    taskConntainerElement.classList.add("tasks");

    const createTaskInputLabel = document.createElement("p");
    createTaskInputLabel.classList.add("label");
    createTaskInputLabel.textContent = "Adauga un nou task...";
    createTaskInputLabel.style.display = "none";

    const createTaskInput = document.createElement("input");
    createTaskInput.classList.add("create-task");
    createTaskInput.setAttribute("type", "text");
    createTaskInput.style.display = "none";

    columnElement.appendChild(columnTitleContainer);
    columnElement.appendChild(taskConntainerElement);
    columnElement.appendChild(createTaskInputLabel);
    columnElement.appendChild(createTaskInput);

    taskConntainerElement.addEventListener("click", () => {
      createTaskInputLabel.style.display = "block";
      createTaskInput.style.display = "block";
    });

    boardElement.appendChild(columnElement);
  });
}

function clearBoard() {
  boardElement.innerHTML = "";
}

function refreshBoard() {
  clearBoard();
  showColumns();
}

function deleteColumn(columnName) {
  columns = columns.filter((column) => {
    return column.name !== columnName;
  });
  saveColumns();

  refreshBoard();
}

getDefaultBoardName();
getDefaultColumns();
