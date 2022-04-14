(function search() {
  document
    .querySelector("#search_form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      window.open(
        `https://cn.bing.com/search?q=site:${window.location.host} ${
          document.querySelector("#search_input").value
        }`
      );

      return false;
    });
})();
