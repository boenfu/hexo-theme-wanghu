(function search() {
  let form = document.querySelector("#search_form");

  if (!form) {
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    window.open(
      `https://cn.bing.com/search?q=site:${window.location.host} ${
        document.querySelector("#search_input").value
      }`
    );

    return false;
  });
})();
