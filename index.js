console.log("Hello");

var displaySidebar = false;
var displayFilter = false;
var sidebar = document.getElementById("sidebar");
var filter = document.getElementById("filter");
var scrollable = document.getElementById("scrollable");
var toggleSidebar = document.getElementById("toggleSidebar");
var toggleFilter = document.getElementById("toggleFilter");
sidebar.style.display = "none";
filter.style.display = "none";

toggleSidebar.addEventListener("click", toggleDisplaySidebar);
toggleFilter.addEventListener("click", toggleDisplayFilter);

// toggling sidebar display
function toggleDisplaySidebar() {
  displaySidebar = !displaySidebar;

  if (displaySidebar) {
    sidebar.style.display = "block";
    scrollable.style.width = "85%";
    document.getElementById("sidebarImg").src = `.\/image\/next.png`;
    toggleSidebar.style.right = "-310px";
  } else {
    sidebar.style.display = "none";
    scrollable.style.width = "100%";
    document.getElementById("sidebarImg").src = `.\/image\/previous.png`;
    toggleSidebar.style.right = "0px";
  }
}

function toggleDisplayFilter() {
  displayFilter = !displayFilter;

  if (displayFilter) {
    filter.style.display = "block";
  } else {
    filter.style.display = "none";
  }
}

var zoomInButton = document.getElementById("zoomIn");
var zoomOutButton = document.getElementById("zoomOut");
var calenderGridContainer = document.getElementById("calenderGridContainer");

let scale = 1;

zoomInButton.addEventListener("click", zoomIn);
zoomOutButton.addEventListener("click", zoomOut);

function zoomIn() {
  scale += 0.1;
  calenderGridContainer.style.transform = `scale(${scale})`;
}

function zoomOut() {
  scale -= 0.1;
  calenderGridContainer.style.transform = `scale(${scale})`;
}
