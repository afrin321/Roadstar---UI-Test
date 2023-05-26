var minDate;
var maxDate;
var selectedDate;
var calendarDetailsMap = new Map();

// Calender on sidebar
$(function () {
  $("#datepicker").datepicker({
    minDate: 0,
    maxDate: 12,
    onSelect: function (dateText, inst) {
      selectedDate = new Date(dateText);
      getCalender();
    },
  });
  minDate = $("#datepicker").datepicker("getDate");
  maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 12);

  $("#datepicker").datepicker(
    "option",
    "onChangeMonthYear",
    function (year, month) {
      var selectedMonth = month;
      console.log("month changed");
      $("#selectedMonth").val(selectedMonth);
    }
  );

  $("#calenderGridContainer").droppable({
    drop: function (event, ui) {
      var droppedDate = $("#datepicker").datepicker("getDate");
      alert("Dropped date: " + droppedDate);
    },
  });
});
