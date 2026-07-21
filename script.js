const inp = document.getElementById("ref");
const ad = document.getElementById("add");
const ul = document.getElementById("ul");

let todo = []; 

ad.addEventListener("click", addtask);

function addtask() {
    const task = inp.value.trim(); 
    if (task === "") return; 

    todo.push(task); 
    inp.value = ""; 
    rendertodo();    
}

function createtodo(item, index) {
    const li = document.createElement("li");
    li.innerText = item;

  
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "DELETE";
    deleteBtn.addEventListener("click", () => {
        deleteItem(index);
    });

  
    const editBtn = document.createElement("button");
    editBtn.innerText = "EDIT";
    editBtn.addEventListener("click", () => {
        editItem(index);
    });

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    return li;
}

function deleteItem(index) {
    todo.splice(index, 1);
    rendertodo();          
}

function editItem(index) {
    const newTask = prompt("Enter new task:", todo[index]);
    if (newTask && newTask.trim() !== "") {
        todo[index] = newTask.trim();
        rendertodo();
    }
}

function rendertodo() {
    ul.innerHTML = ""; 
    todo.forEach((item, index) => {
        const li = createtodo(item, index);
        ul.appendChild(li); 
    });
}