const todoList = [];


function addToDo() {
    const inputElement = document.querySelector('.input-text');
    const name = inputElement.value;
    todoList.push(name);
    let  newAct = `<p>${name}</p>`; 
    
    console.log(todoList);
}