// clock
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh === 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);
}

currentTime();

let clock = document.getElementById("clock").innerText;

//   date
let options = { weekday: 'long', month: 'long', day: 'numeric' };
let today = new Date();
let date = today.toLocaleDateString("en-US");

document.getElementById("date").innerHTML = date;

// pages
const pageBookmark = document.querySelector("#tasks #bookmark-task");
const pageAllTask = document.querySelector("#tasks #all-task");

const pageBackAddTask = document.querySelector("#back-add-task");
const pageBackSearchTask = document.querySelector("#back-search-task");

// inputs
const inputAddTask = document.querySelector("#input-add-task");
const inputSearchTask = document.querySelector("#input-search-task");

// buttons
const btnShowAllTasks = document.querySelector("#show-all-tasks");
const btnShowBookmarks = document.querySelector("#show-bookmarks");

const btnAddTask = document.querySelector("#btn-add-task");

const btnShowAddTaskInput = document.querySelector("#show-add-input");
const btnShowSearchTaskInput = document.querySelector("#show-search-input");

const btnClearAll = document.querySelector("#clear-all-task");
const btnRemove1Task = document.getElementsByClassName("remove1task");

const btnClearTaskValue = document.querySelector("#delete-input-value");


// lists
const list = document.querySelector("#tasks #all-task");
const list2 = document.querySelector("#tasks #bookmark-task");

// other
const numAllTask = document.querySelector("#num-task");
const numBookmark = document.querySelector("#num-bookmark");

const anyTask = document.getElementsByClassName("any-task");

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
btnShowAllTasks.onclick = function () {
    list.style.display = "flex";
    list2.style.display = "none";
}

btnShowBookmarks.onclick = function () {
    list.style.display = "none";
    list2.style.display = "flex";
}

btnShowAddTaskInput.onclick = function () {
    pageBackAddTask.style.display = "block";
    pageBackSearchTask.style.display = "none";
}

btnShowSearchTaskInput.onclick = function () {
    pageBackAddTask.style.display = "none";
    pageBackSearchTask.style.display = "block";
}

btnClearTaskValue.onclick = function () {
    inputAddTask.value = "";
}

// read local storage & add to html
if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach((element, index) => {
        if (element[1] == 1) {
            list.innerHTML += `<li class="mb-2 bg-success p-1 any-task" id="any-task"><a href="#" title="${index}" ><i id="mark" class="fa-solid fa-bookmark" style="color:yellow"></i></a><p title="Your task: ${element[0]}" id="text-task" style="color: white;">${element[0]}</p> <p id="data-inline">Date: ${element[2]}</p><p id="time-inline">Time: ${element[3]}</p><i title="${element[0]}" class="fa fa-times remove1task"></i></li>`;

            list2.innerHTML += `<li class="mb-2 bg-warning p-1 any-task" id="any-task"><a href="#" title="${index}" ><i id="mark" class="fa-solid fa-bookmark" style="color:yellow"></i></a><p title="Your task: ${element[0]}" id="text-task" style="color: black;">${element[0]}</p> <p id="data-inline">Date: ${element[2]}</p><p id="time-inline">Time: ${element[3]}</p><i title="${element[0]}" class="fa fa-times remove1task"></i></li>`;

        } else {
            list.innerHTML += `<li class="mb-2 bg-success p-1 any-task" id="any-task"><a href="#" title="${index}" ><i id="mark" class="fa-solid fa-bookmark" style="color:black"></i></a><p title="Your task: ${element[0]}" id="text-task" style="color: white;">${element[0]}</p> <p id="data-inline">Date: ${element[2]}</p><p id="time-inline">Time: ${element[3]}</p><i title="${element[0]}" class="fa fa-times remove1task"></i></li>`;

        }

    })
} else {
    tasks = [];
}

remove1(btnRemove1Task);

// add in local storage
btnAddTask.addEventListener("click", () => {

    let currentTask = inputAddTask.value;
    let temp = [];

    let currentStorage = localStorage.getItem("tasks");

    let reapetText = pageAllTask.innerText;

    if (currentTask == "") {
        alertEmpty.style.display = 'flex';

        alertEmptyOK.onclick = function () {
            alertEmpty.style.display = 'none';
        }
    }

    else if (reapetText.includes(currentTask)) {
        alertExist.style.display = 'flex';

        alertExistOK.onclick = function () {
            alertExist.style.display = 'none';
        }
    }

    else {
        if (currentStorage) {
            var tasks = JSON.parse(currentStorage);
        } else {
            var tasks = [];
        }
        temp[0] = currentTask;
        temp[1] = 0;
        temp[2] = date;
        temp[3] = clock;
        tasks.push(temp);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        window.location.reload();
    }

    remove1(btnRemove1Task);
})

// add bookmark
const btnAddBbookmark = document.querySelectorAll("ul a");

btnAddBbookmark.forEach(element => {
    element.addEventListener("click", function () {

        let currentSTR = JSON.parse(localStorage.getItem("tasks"));
        let number = element.getAttribute("title");

        if (currentSTR[number][1] == 1) {
            currentSTR[number][1] = 0;
            localStorage.setItem("tasks", JSON.stringify(currentSTR));
        }
        else if (currentSTR[number][1] == 0) {
            currentSTR[number][1] = 1;
            localStorage.setItem("tasks", JSON.stringify(currentSTR));
        }
        window.location.reload();
    })
})

// all task & bookmark numbers set
const num1 = document.querySelectorAll("#all-task a").length;
numAllTask.innerHTML = `<span>${num1}</span>`;

const num2 = document.querySelectorAll("#bookmark-task a").length;
numBookmark.innerHTML = `<span>${num2}</span>`;

// clear all tasks
btnClearAll.onclick = function () {

    if (num1 == 0) {
        tasksEmpty.style.display = 'flex';

        tasksEmptyOK.onclick = function () {
            tasksEmpty.style.display = 'none';
        }
    }

    else {
        alertDellAll.style.display = 'flex';

        alertDellAllCANCEL.onclick = function () {
            alertDellAll.style.display = 'none';
        }

        alertDellAllYES.onclick = function () {
            alertDellAll.style.display = 'none';

            list.innerHTML = ``;
            localStorage.clear("tasks", JSON.stringify(tasks));

            window.location.reload();
        }
    }
}

// search task
inputSearchTask.addEventListener("keyup", function () {

    let searchBox = inputSearchTask.value;

    for (const TEXT of anyTask) {

        let any = TEXT.textContent.toLowerCase();

        if (any.startsWith(searchBox)) {
            TEXT.style.display = "flex";
        } else {
            TEXT.style.display = "none";
        }
    }
})

// remove 1 task
function remove1(btnremove1) {

    for (let i = 0; i < btnremove1.length; i++) {
        btnremove1[i].onclick = function () {

            this.parentNode.remove();

            let titleText = this.getAttribute("title");

            for (let j = 0; j < tasks.length; j++) {

                if (tasks[j][0] == titleText) {
                    tasks.splice(j, 1);
                    localStorage.setItem("tasks", JSON.stringify(tasks));

                    window.location.reload();
                }
            }
        }
    }
}