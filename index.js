document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.querySelector(".search_input");
  const searchBtn = document.querySelector(".search_button");

  function performSearch() {
    const searchTerm = searchBox.value.trim();
    if (searchTerm) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        searchTerm
      )}`;
    }
  }

  searchBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      console.log("HEllo");
      performSearch();
    }
  });
});
