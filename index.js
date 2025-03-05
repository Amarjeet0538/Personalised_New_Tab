// Search engine logic
const searchBox = document.querySelector(".search_input");

function performSearch() {
  const inputText = searchBox.value.trim();

  if (!inputText) return;

  const prefix = inputText.match(/^([a-zA-Z]\/)(.*)/);
  if (!prefix) {
    alert("Invalid format. Use g/ or y/ followed by your search query.");
    return;
  }

  const searchEngine = prefix[1].toLowerCase();
  const searchTerm = prefix[2].trim();

  let url = "";

  if (searchEngine === "g/") {
    url = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
  } else if (searchEngine === "y/") {
    url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      searchTerm
    )}`;
  } else {
    alert("Please select a valid search engine.");
    return;
  }

  window.location.href = url;
}

// const searchEngine = document.querySelector(".search_engine");

// function performSearch() {
//   const searchTerm = searchBox.value.trim();

//   if (!searchTerm) return;
//   let url = "";

//   if (searchEngine.value === "google") {
//     url = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
//   } else if (searchEngine.value === "yt") {
//     url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
//       searchTerm
//     )}`;
//   } else {
//     alert("Please select a valid search engine.");
//     return;
//   }

//   window.location.href = url;
// }

searchBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

//Calendar Logic
var calendarEl = document.getElementById("calendar");

var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: "dayGridMonth",
});

calendar.render();

//Clock Logic

const clockContent = document.getElementById("digital-clock");

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  clockContent.textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();
