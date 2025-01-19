// Select input box, add button, and todo list
const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// Function to add a task
addButton.addEventListener("click", () => {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Add unchecked icon
    const statusIcon = document.createElement("img");
    statusIcon.src = "images/unchecked.png";
    statusIcon.alt = "unchecked";
    statusIcon.addEventListener("click", () => {
        if (listItem.classList.contains("completed")) {
            listItem.classList.remove("completed");
            statusIcon.src = "images/unchecked.png";
        } else {
            listItem.classList.add("completed");
            statusIcon.src = "images/checked.png";
        }
    });

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(listItem);
    });

    // Append the status icon and delete button to the list item
    listItem.prepend(statusIcon);
    listItem.appendChild(deleteButton);

    // Append the list item to the todo list
    todoList.appendChild(listItem);

    // Clear the input box
    inputBox.value = "";
});
