const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
let editTodo = null; // Track the todo being edited

// -- Add the task API -------------------------------------
const addTodo = () => {
    const inputText = inputBox.value.trim();
    if (inputText.length <= 0) {
        alert("You must write something in your todo");
        return false;
    }

    if (addBtn.value === "Update") {
        // Update existing todo
        editTodo.target.previousElementSibling.innerHTML = inputText; // Update text
        addBtn.value = "Add"; // Reset button text
        inputBox.value = ""; // Clear input box
        editTodo = null; // Reset editTodo
    } else {
        // Creating P tag ----------------------------------------------
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);

        // Create Edit button -----------------------------------------
        const editBtn = document.createElement("button");
        editBtn.innerText = "Update";
        editBtn.classList.add("btn", "editBtn");
        li.appendChild(editBtn);

        // Create delete button -----------------------------------------
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add("btn", "deleteBtn");
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
        inputBox.value = ""; // Clear input box
    }
}

const updateTodo = (e) => {
    if (e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement);
    }
    if (e.target.innerHTML === "Update") {
        inputBox.value = e.target.previousElementSibling.innerHTML; // Get current text
        inputBox.focus(); // Focus on input box
        addBtn.value = "Update"; // Change button text to Update
        editTodo = e; // Save the event for reference
    }
}

addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);
//---------------------------------------------------------
