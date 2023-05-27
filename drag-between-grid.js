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
  if (droppedElement) {
    document.getElementById(droppedContId).appendChild(droppedElement);
  }

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

var mobileTouchId;
var mobileTouchItem;
var mobileDroppedId;

function touchStart(event) {
  console.log(event.target.id);
  console.log(event.target.classList);
  if (event.target.id && event.target.classList.contains("appointment-div")) {
    mobileTouchId = event.target.id;
    mobileTouchItem = event.target;
  }
}

function touchEnd(event) {
  console.log("touch end");
  console.log(event.target.id);
  if (mobileTouchItem.classList.contains("appointment-div")) {
    document.getElementById(mobileDroppedId).appendChild(mobileTouchItem);
  }
}

function touchMove(event) {
  event.preventDefault();
  console.log(event.touches);
  var touch = event.touches[0];
  var gridItem = document.elementFromPoint(touch.clientX, touch.clientY);
  console.log(gridItem.id);
  mobileDroppedId = gridItem.id;
}
