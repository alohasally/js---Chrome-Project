const toDoForm = document.querySelector("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("todo-input");
const TODOS_KEY ="todos"
const toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteBtn(event){
    event.preventDefault();
    const liBtn = event.target.parentElement
    liBtn.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=newTodo;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteBtn)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo)
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", )

const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
    parsedToDos.forEach(item) => console.log();
} 