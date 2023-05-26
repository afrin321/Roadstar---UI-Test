$(function () {
  var droppableElement = $("#calenderGridContainer");
  var draggedDate = null;

  // Add event listener for mousedown event on the Datepicker input
  $("#datepicker").on("mousedown", function (event) {
    draggedDate = null; // Reset the dragged date

    // Add event listener for mousemove event on the document
    $(document).on("mousemove", function (event) {
      // Check if a date is being dragged
      if (
        draggedDate === null &&
        event.target.classList.contains("ui-state-default")
      ) {
        var day = $(event.target).text();
        console.log("day: " + day);
        //var month = $("#datepicker")
        //  .datepicker("getDate")
        //  .toLocaleString("default", { month: "short" });
        draggedDate = calculateMonth(day); //month + " " + day;
        console.log("Dragging date:", draggedDate);
        //calculateMonth(day);
      }
    });

    // Add event listener for mouseup event on the document
    $(document).on("mouseup", function (event) {
      // Check if a date was dragged and dropped onto the droppable element
      if (draggedDate && $(event.target).hasClass("droppable")) {
        console.log("Dropped date:", draggedDate);
      }

      // Reset the dragged date and remove the event listeners
      draggedDate = null;
      $(document).off("mousemove");
      $(document).off("mouseup");
    });
  });

  // Add event listener for dragover event on the droppable element
  droppableElement.on("dragover", function (event) {
    event.preventDefault(); // Prevent default behavior to enable dropping
  });

  // Add event listener for drop event on the droppable element
  droppableElement.on("drop", function (event) {
    event.preventDefault(); // Prevent default behavior
    var droppedElementId = event.target.id;
    console.log("Dropped on:", droppedElementId);
    console.log("Dropped on:", droppedElementId.split(" ")[1]);
    var cat_for_id = droppedElementId.split("#")[0];
    var calculatedDroppedId = `${cat_for_id}#${draggedDate}`;
    console.log(calculatedDroppedId);

    document.getElementById(calculatedDroppedId).innerHTML =
      getAppointmentDiv(calculatedDroppedId);
  });
});

function getAppointmentDiv(id) {
  var apId = `ap#${id}`;
  var appointmentDiv = `<div class=\"appointment-div request\" id=\"${apId}\">
    <div class=\"ap-div-c-1\">
        <div>
            <img src=\".\/image\/info.svg\" />
            <label>Request</label>
        </div>
        <div>
            <p>25/11/2022 10:00 AM - 30/11/2022 10:00 AM</p>
            <p>Peachtree, NY - Atlantic City, NJ</p>
        </div>
    </div>
  </div>`;
  return appointmentDiv;
}

function calculateMonth(day) {
  var m = document.getElementById("selectedMonth");
  var month;
  if (m && m.value) {
    month = new Date(2023, (month = m.value - 1), day);
    day = month.toLocaleString("default", { day: "2-digit" });
    month = month.toLocaleString("default", { month: "short" });
    console.log("changed month: " + month + " " + day);
    return month + " " + day;
  } else {
    var month = $("#datepicker")
      .datepicker("getDate")
      .toLocaleString("default", { month: "short" });

    return month + " " + day;
  }
}
