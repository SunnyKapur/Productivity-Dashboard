
// 3:09 min se start karna hai

function openFeatures() {
  var allElems = document.querySelectorAll(".elem");
  var fullElemPage = document.querySelectorAll(".fullElem");
  var fullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    //   console.log(elem.id);

    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "block";
    });
  });

  fullElemPageBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      // console.log(back.id)
      fullElemPage[back.id].style.display = "none";
    });
  });
}
// openFeatures();

function todoList() {

  var currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task list is empty");
  }

  function renderTask() {
    let allTask = document.querySelector(".allTask");
    
    let sum = "";
    
    currentTask.forEach(function (elem, idx) {
      sum += `<div class="task">
      <h5>${elem.task} <span class=${elem.imp}>imp</span> </h5>
      <button id=${idx}>Mark as Completed</button>
      </div>`;
    });
    
    allTask.innerHTML = sum;
    
    localStorage.setItem("currentTask", JSON.stringify(currentTask));
    
    document.querySelectorAll(".task button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(btn.id, 1);
        renderTask();
      });
    });
  }
  
  renderTask();
  
  let form = document.querySelector(".addTask form");
  let taskInput = document.querySelector(".addTask form input");
  let taskDetailsInput = document.querySelector(".addTask form textarea");
  let taskCheckbox = document.querySelector(".addTask form #check");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    currentTask.push({
      task: taskInput.value,
      details: taskDetailsInput.value,
      imp: taskCheckbox.checked,
    });

    renderTask();

    taskInput.value = "";
    taskDetailsInput.value = "";
    taskCheckbox.checked = false;
  });
}

// todoList();

var dayPlanData = JSON.parse(localStorage.getItem('dayPlanData')) || {}
var dayPlanner = document.querySelector('.day-planner')

var hours = Array.from({length:18},(elem, idx)=>`${6+idx}:00 - ${7+idx}:00`)

var dayPlannerInput = document.querySelectorAll('.day-planner input')
  
let wholeDaySum = '';
hours.forEach(function(elem,idx){
  
  console.log(dayPlanData)
  wholeDaySum = wholeDaySum + `<div class="day-planner-time">
                    <p>${elem}</p>
                    <input id=${idx} type="text" placeholder="...">
                </div>`
})

dayPlanner.innerHTML = wholeDaySum
console.log();


dayPlannerInput.forEach(function(elem){
  elem.addEventListener('input',function(){
    dayPlanData[elem.id] = elem.value

    localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData))
  })
})

console.log()