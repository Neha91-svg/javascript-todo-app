let todoList = [];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value;
    let dueDate = dateElement.value;

    if (todoItem.trim() === '' || dueDate.trim() === '') {
        alert("Please enter both task and due date.");
        return;
    }

    // Push an object instead of just string
    todoList.push({
        items: todoItem,
        dueDate: dueDate
    });

    // Clear inputs
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function displayItems() {
    // Fix ID spelling here
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let { items, dueDate } = todoList[i];

        newHtml += `
            <span>${items}</span>
            <span>${dueDate}</span>
            <button class='btn-delete' onclick="deleteTodo(${i})">Delete</button>
        `;
    }

    containerElement.innerHTML = newHtml;
}

// Separated delete logic for cleaner code
function deleteTodo(index) {
    todoList.splice(index, 1);
    displayItems();
}
