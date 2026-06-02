let todo = [];

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addToDo(){
    const targettext = todoInput.value.trim();

    if(targettext==="") return;

    const newTodo = {
        id: Date.now(),
        text: targettext,
        completed: false
    };

    todo.push(newTodo);
    todoInput.value = "";


    //creating main list
    const li = document.createElement('li');
    li.setAttribute('data-id', newTodo.id);

    //creating checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = newTodo.completed;

    //creating a span for text
    const span = document.createElement('span');
    span.textContent = newTodo.text;
    span.className="todo-text";

    //crating delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className="delete-btn";

    //methods and handlers
    

    //checkbox handler
    checkbox.addEventListener('change', () => {
        newTodo.completed = checkbox.checked;

        if(checkbox.checked){
            span.style.textDecoration = 'line-through';
        } else {
            span.style.textDecoration = 'none';
        }
    });


    //delete button handler
    deleteBtn.addEventListener('click', () => {
        todo=todo.filter(item => item.id !== newTodo.id);
        li.remove();
    });

    //appending elements to the list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    //appending list item to the todo list
    todoList.appendChild(li);
}

addBtn.addEventListener('click', addToDo);