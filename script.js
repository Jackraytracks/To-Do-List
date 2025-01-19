const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }


    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(listItem);
    });

    
    listItem.appendChild(deleteButton);

    
    todoList.appendChild(listItem);

    
    inputBox.value = "";
});
