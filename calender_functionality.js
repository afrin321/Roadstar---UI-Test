var minDate;
var maxDate;
var selectedDate;
var calendarDetailsMap = new Map();

var dateList = [];

// Creating Calender Date List
function getCalendarDates() {
  dateList = [];
  for (var i = 0; i < 13; i++) {
    var date = new Date();
    date.setDate(date.getDate() + i);
    var options = { day: "2-digit", month: "short" };
    var dayNumber = date.toLocaleDateString("en-US", options);
    var currentDate = $("#datepicker").datepicker("getDate")
      ? $("#datepicker")
          .datepicker("getDate")
          .toLocaleDateString("en-US", options)
      : new Date().toLocaleDateString("en-US", options);
    var weekDayName = date.toLocaleDateString("en-US", {
      weekday: "short",
    });
    var dateObject = {
      dayNumber: dayNumber,
      weekDayName: weekDayName,
      currentDate: currentDate,
    };

    dateList.push(dateObject);
  }
}

// Returning Calender Grid Header
function getGridItemHeader(i) {
  var calenderHeader = `<div class=\"thead tDateHeader\" title=\"${
    dateList[i - 1].dayNumber
  }\"><p>${dateList[i - 1].weekDayName}</p><p>${
    dateList[i - 1].currentDate
  }</p></div>`;

  return calenderHeader;
}

function updateHeader() {
  var headerGridItems = document.querySelectorAll(".tDateHeader");
  var options = { day: "2-digit", month: "short" };
  var currentDate = $("#datepicker").datepicker("getDate")
    ? $("#datepicker")
        .datepicker("getDate")
        .toLocaleDateString("en-US", options)
    : new Date().toLocaleDateString("en-US", options);

  headerGridItems.forEach((item) => {
    item.children[1].innerHTML = currentDate;
  });
}

// Creating vehicle list
vehicleList = [
  "A-ABC123",
  "B-ABC123",
  "C-ABC123",
  "D-ABC123",
  "E-ABC123",
  "F-ABC123",
  "G-ABC123",
  "H-ABC123",
  "I-ABC123",
];

// Returning Vehicle List
function getGridItemVehicleCategory(i) {
  var n = i / 14;
  n = n - 1;
  var gridItemVehicleCategory = `<div class=\"tdata grid-element vehicle\"><p>BMW GH2890</p><p>${vehicleList[n]}</p></div>`;
  return gridItemVehicleCategory;
}

// Returning Calender Grid Item
function getGridItemMain(i) {
  var cat = getVehicleCategoryForItem(i);
  var date = getDateByIndexForItem(i);

  var id = `${cat}#${date}`;
  return `<div ondrop=\"droppedOn(event)\" class=\"tdata grid-element maingrid\" id=\"${id}\"  ></div>`;
}

// HTML for creating Calender Grid
// Added to document on Load
function getCalender() {
  getCalendarDates();
  var calenderHtml = "";

  for (var i = 0; i < 126; i++) {
    if (i == 0) {
      calenderHtml += `<div class='vehicle-h'>vehicle</div>`;
    } else if (i >= 1 && i < 14) {
      calenderHtml += getGridItemHeader(i);
    } else {
      if (i % 14 == 0) {
        calenderHtml += getGridItemVehicleCategory(i);
      } else {
        calenderHtml += getGridItemMain(i);
      }
    }
  }

  document.getElementById("calenderGridContainer").innerHTML = calenderHtml;
  autoLoadAppointments();
}

function getVehicleCategoryForItem(i) {
  var row = Math.floor(i / 14);
  return vehicleList[row - 1];
}

function getDateByIndexForItem(i) {
  var column = i % 14;
  column = column - 1;
  var date = new Date();
  date.setDate(date.getDate() + column);
  var options = { day: "2-digit", month: "short" };
  var dayNumber = date.toLocaleDateString("en-US", options);
  return dayNumber;
}

function autoLoadAppointments() {
  var date = new Date();
  var options = { day: "2-digit", month: "short" };
  date = date.toLocaleDateString("en-US", options);

  var id1 = `A-ABC123#${date}`;
  document.getElementById(id1).innerHTML = getAppointmentAutoLoad(
    id1,
    "reserved"
  );

  var date2 = new Date();
  date2.setDate(date2.getDate() + 2);
  date2 = date2.toLocaleDateString("en-US", options);
  var id2 = `B-ABC123#${date2}`;
  document.getElementById(id2).innerHTML = getAppointmentAutoLoad(
    id1,
    "rented"
  );

  var id3 = `C-ABC123#${date}`;
  document.getElementById(id3).innerHTML = getAppointmentAutoLoad(
    id3,
    "completed"
  );

  var date3 = new Date();
  date3.setDate(date3.getDate() + 1);
  date3 = date3.toLocaleDateString("en-US", options);
  var id4 = `D-ABC123#${date3}`;
  document.getElementById(id4).innerHTML = getAppointmentAutoLoad(
    id4,
    "cancelled"
  );

  var id5 = `E-ABC123#${date2}`;
  document.getElementById(id5).innerHTML = getAppointmentAutoLoad(id5, "");
}

function getAppointmentAutoLoad(id, type) {
  var classType = type ? type : "request";
  var apId = `ap#${id}`;
  var appointmentDiv = `<div ondragover=\"dragOver(event)\"  ondragstart=\"dragStart(event)\" ondragend=\"onDragEnd(event)\" draggable=\"true\" class=\"draggable appointment-div ${classType}\" id=\"${apId}\">
    <div class=\"ap-div-c-1\">
        <div>
            <img src=\".\/image\/info.svg\" title=\"${classType}\" />
            <label style=\"text-transform: capitalize\">${classType}</label>
        </div>
        <div>
            <p>25/11/2022 10:00 AM - 30/11/2022 10:00 AM</p>
            <p>Peachtree, NY - Atlantic City, NJ</p>
        </div>
    </div>
  </div>`;
  return appointmentDiv;
}
