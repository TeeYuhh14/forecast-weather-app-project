function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  console.log(searchInput.value);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;

  //let apiKey = "48oeda5act0b33557f4765dc458f7f7f";
  // let apiUrl =
  //   "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
