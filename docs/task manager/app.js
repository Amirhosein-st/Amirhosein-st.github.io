// clock
let myVar = setInterval(function () {
    myTimer();
}, 1000);

function myTimer() {
    let d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    document.getElementById("clock1").innerHTML = d.toLocaleTimeString();
    document.getElementById("clock2").innerHTML = d.toLocaleTimeString();
}
//   date
let options = { weekday: 'long', month: 'long', day: 'numeric' };
let today = new Date();
let date = today.toLocaleDateString("en-US", options);
let date2 = today.toLocaleDateString("en-US");

document.getElementById("date").innerHTML = date;
document.getElementById("date2").innerHTML = date2;

// buttons
const btnPower = document.querySelector(".power-button");
const btnHome = document.querySelector(".home-button");
const btnNoteIcon = document.querySelector(".note-icon");

const btnClearAll = document.querySelector(".clear-all-task");
const btnShowAddTask = document.querySelector(".btn-add-task");
const btnShowSearchTask = document.querySelector(".btn-serach-task");

const btnRemove1Task = document.getElementsByClassName("remove1task");

const btnAddTask = document.querySelector(".btn-add");

const btnEaraseInputAddTask = document.querySelector(".earase");

// pages
const homeScreen = document.querySelector(".home");
const lockScreen = document.querySelector(".lock");
const noteScreen = document.querySelector(".note");

const taskInputScreen = document.querySelector(".back-task-input");
const searchInputScreen = document.querySelector(".back-search-task");

// other 
const list = document.querySelector(".tasks ul");
const taskbox = document.getElementsByClassName("task");

var searchInput = document.querySelector(".search-task");
var searchInput2 = document.querySelector("#search-task2");
const taskInput = document.querySelector(".task-input");

let tasks;

// alerts
const alertEmpty = document.querySelector(".alert-empty");
const alertExist = document.querySelector(".already-exist");
const alertDellAll = document.querySelector(".del-all");
const tasksEmpty = document.querySelector(".task-empty");


// btn alerts
const alertEmptyOK = document.querySelector(".alert-btn1");
const alertExistOK = document.querySelector(".alert-btn2");
const alertDellAllCANCEL = document.querySelector(".alert-btn3");
const alertDellAllYES = document.querySelector(".alert-btn4");
const tasksEmptyOK = document.querySelector(".alert-btn5");

// functions

// show lockScreen
btnPower.onclick = function () {
    homeScreen.style.display = 'none';
    noteScreen.style.display = 'none';
    lockScreen.style.display = 'block';
}

// show homeScreen
btnHome.onclick = function () {
    homeScreen.style.display = 'block';
    noteScreen.style.display = 'none';
    lockScreen.style.display = 'none';
}

// show noteScreen
btnNoteIcon.onclick = function () {
    homeScreen.style.display = 'none';
    noteScreen.style.display = 'block';
    lockScreen.style.display = 'none';
}

// show taskInputScreen
btnShowAddTask.onclick = function () {
    searchInputScreen.style.display = 'none';
    taskInputScreen.style.display = 'flex';
}

// show searchInputScreen
btnShowSearchTask.onclick = function () {
    searchInputScreen.style.display = 'flex';
    taskInputScreen.style.display = 'none';
}

// delete add task input
btnEaraseInputAddTask.onclick = function () {
    taskInput.value = "";
}

// read local storage & add to html
if (localStorage.getItem('task')) {
    tasks = JSON.parse(localStorage.getItem('task'));

    tasks.forEach(function (item) {
        list.innerHTML += `<div class="task"><li>${item}</li><i class="fa fa-times remove1task"></i></div>`;
    });
}

else {
    tasks = [];
}

// remove 1 old task
remove1(btnRemove1Task);

// add task to local storage
btnAddTask.addEventListener("click", function (e) {
    e.preventDefault();

    let inputValue = taskInput.value;

    if (tasks.includes(inputValue)) {

        alertExist.style.display = 'flex';

        taskInput.style.backgroundColor = 'red';
        taskInput.style.color = 'white';
        btnEaraseInputAddTask.style.color = 'white';

        alertExistOK.onclick = function () {
            alertExist.style.display = 'none';
        }
    }
    else if (inputValue == "") {

        alertEmpty.style.display = 'flex';

        taskInput.style.backgroundColor = 'orange';

        alertEmptyOK.onclick = function () {
            alertEmpty.style.display = 'none';
        }

    }
    else {
        tasks.push(inputValue);

        localStorage.setItem("task", JSON.stringify(tasks));

        list.innerHTML += `<div class="task"><li>${inputValue}</li><i class="fa fa-times remove1task"></i></div>`;

        taskInput.value = "";
    }
    // back input color
    taskInput.onclick = function () {

        taskInput.style.backgroundColor = 'rgb(237, 255, 147)';
        taskInput.style.color = 'black';
        btnEaraseInputAddTask.style.color = 'rgba(255, 0, 0, 0.486)';

    }

    // remove 1 new task
    remove1(btnRemove1Task);
})

// remove 1 task
function remove1(btnremove1) {

    for (let i = 0; i < btnremove1.length; i++) {

        btnremove1[i].onclick = function () {
            this.parentNode.remove();

            let removedText = this.parentNode.innerText;

            for (let j = 0; j < tasks.length; j++) {
                if (tasks[j] == removedText) {

                    tasks.splice(j, 1);
                    localStorage.setItem("task", JSON.stringify(tasks));
                    
                }
            }
        }
    }
}

// clear all tasks
btnClearAll.onclick = function () {
    const num = document.querySelectorAll(".tasks li").length;

    if (num == 0) {
        tasksEmpty.style.display = 'flex';

        tasksEmptyOK.onclick = function () {
            tasksEmpty.style.display = 'none';
        }
    } else  {
        alertDellAll.style.display = 'flex';

        alertDellAllCANCEL.onclick = function () {
            alertDellAll.style.display = 'none';
        }

        alertDellAllYES.onclick = function () {
            alertDellAll.style.display = 'none';

            list.innerHTML = ``;
            localStorage.clear("task", JSON.stringify(tasks));
            window.location.reload();
        }
    }
}

// search task
searchInput2.addEventListener("keyup", function () {

    let searchBox = searchInput2.value;

    for (const TEXT of taskbox) {

        let anytask = TEXT.textContent.toLowerCase();
        if (anytask.startsWith(searchBox)) {
            TEXT.style.display = "flex";
        } else {
            TEXT.style.display = "none";
        }
    }
})

