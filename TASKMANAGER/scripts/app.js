let isImportant = false;
let isVisible = true;

function toggleImportant() {
  const nonImportantIcon = "fa-regular fa-heart";
  const importantIcon = "fa-solid fa-heart active";
  if (!isImportant) {
    $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
    isImportant = true;
  } else {
    $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
    isImportant = false;
  }
}

function toggleInfo() {
  if (isVisible) {
    $(".info").hide();
    isVisible = false;
  } else {
    $(".info").show();
    isVisible = true;
  }
}

function saveTask() {
  console.log("Saving Task...");

  let title = $("#txtTitle").val();
  let description = $("#txtDescription").val();
  let dueDate = $("#selDueDate").val();
  let status = $("#selStatus").val();
  let budget = $("#txtBudget").val();
  let color = $("#selColor").val();

  console.log(title, description, dueDate, status, budget, color);

  let taskToSave = new Task(
    isImportant,
    title,
    description,
    dueDate,
    status,
    budget,
    color
  );
  displayTask(taskToSave);
}

function displayTask(task) {
  let syntax = `
  <div class="task">
  <div class="details">
        <h5>${task.title}</h5>
        <p>${task.description}</p>
    </div>
    
    <label>${task.status}</label>    
    <label>$${task.budget}</label>   
    <label>${task.dueDate}</label>
    </div>
  `;

  $("#pending-tasks").append(syntax);
}

function clearForm() {
  $("#txtTitle").val("");
  $("#txtDescription").val("");
  $("#selDueDate").val("");
  $("#selStatus").val("");
  $("#txtBudget").val("");
  $("#selColor").val("");
}

function init() {
  console.log("Task manager");

  // load data

  // hook events
  $("#btnSave").click(saveTask);
  $("#iImportant").click(toggleImportant);
  $("#btnInfo").click(toggleInfo);
}

window.onload = init;

/**
 * Suggested Read
 * how to create objects in JS -> Object Literal, Obj constructor, classes
 *
 *
 *
 */
