function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}
let apiKey = "e4d1a34968ab1f1e4fe14d8fde838d98";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q="Oslo"&appid={apikey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
