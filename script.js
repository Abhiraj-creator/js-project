function openPages() {
    let allelems = document.querySelectorAll('.elem');
    let pageElems = document.querySelectorAll('.pageElems');
    let backbtn = document.querySelectorAll('.pageElems .back');
    allelems.forEach(function (elem) {
        elem.addEventListener("click", function () {
            pageElems[elem.id].style.display = "block";
        })
    })
    backbtn.forEach(function (btn) {
        btn.addEventListener('click', function () {
            pageElems[btn.id].style.display = "none";
        })
    })

}
openPages();
function todoApp(){
    
let todoForm = document.querySelector('.enter-todo form');
let todoInput = document.querySelector('.enter-todo form input');
let todoTextarea = document.querySelector('.enter-todo form textarea');
let todoCheck = document.querySelector('.enter-todo form #check #checkbox');
let todoList = document.querySelector('.show-todo');



let currentTasks = [];
if (localStorage.getItem('alltasks')) {
    currentTasks = JSON.parse(localStorage.getItem('alltasks'));
    
    
}

let desc=[];
function renderTasks() {
    let sum = '';
    currentTasks.forEach(function (task, idx) {

        sum += ` <div class="todo-item">
              <h2>${task.Task} <span class=" ${task.imp ? true : false}">imp</span></h2>
              <button id="${idx}">Mark as Completed</button>
            </div>`

    })
     todoList.innerHTML = sum;
      
     let deleteBtn = document.querySelectorAll('.todo-item button ');
deleteBtn.forEach(function (btn,idx) {
    btn.addEventListener('click', function () {
        currentTasks.splice(btn.id, 1);
        localStorage.setItem('alltasks', JSON.stringify(currentTasks));
        renderTasks();
    })

})
}
 

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
       if(todoInput.value===''){
        throw new Error("cannot submit empty form");
       }
       else{
         currentTasks.push({
            Task: todoInput.value,
            desc: todoTextarea.value,
            imp: todoCheck.checked
        });
        desc.push(todoTextarea.value);
        
       localStorage.setItem('alltasks', JSON.stringify(currentTasks));
        todoInput.value = '';
        todoTextarea.value = '';
        todoCheck.checked = false;
       todoList.innerHTML = '';
        renderTasks();
       }
       
    })
renderTasks();
todoList.addEventListener('click',()=>{
    console.log("show todo");
    
})

}
todoApp();