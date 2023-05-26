var draggableId = null;
var droppedContId = null;
var droppedElement = null;

function dragStart(event) {
  console.log("dragStart");
  console.log(event.target.id);
  if (event.target.classList.contains("appointment-div")) {
    draggableId = event.target.id;
    droppedElement = event.target;
  }
}

function droppedOn(event) {
  event.preventDefault();
  console.log(event.target.id);
  droppedContId = event.target.id;
  draggableId = null;
  document.getElementById(droppedContId).appendChild(droppedElement);
  droppedContId = null;
  droppedElement = null;
}

function onDragEnd(event) {
  event.preventDefault();
  console.log("drag end: " + event.target.id);
}

function dragOver(event) {
  event.preventDefault();
  console.log(event.target.id);
}
