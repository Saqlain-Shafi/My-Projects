let weather = {
  key: "b3c52de4db26b8e7a9cab830ff3938b6",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      this.key
    ).then((response) => {
      if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.");
      }
      return response.json(); 
    }).then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = `Description: ${description}`;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".w-speed").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".s-bar").value);
  },
};
document.querySelector("#btn").addEventListener('click', function () {
  weather.search();
});
document
  .querySelector(".s-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Pavia");

// let appId = "b3c52de4db26b8e7a9cab830ff3938b6";
// let units = "metric";
// let searchMethod = "zip";

// function findWeather(searchTerm) {
//   fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&appid=${appId}&units=${units}`).then(result => {
//     return result.json()
//   }).then(result => {
//     init(result);
//   })
// }
// function init(resultFromServer) {
//   console.log(resultFromServer);
// }
// document.getElementById('btn').addEventListener('click', () => {
//   let searchTerm = document.getElementById('input').value;
//   if (searchTerm)
//     findWeather(searchTerm);

// })
