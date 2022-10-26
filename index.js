function loadCoupon() {
  document.getElementById("coupon").style.visibility = "visible";
}
function closeCoupon() {
  document.getElementById("coupon").style.visibility = "hidden";
}
function darkmode() {
  var toggleicon = document.getElementById("toggle-icon");
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    toggleicon.classList.remove("fa-moon");
    toggleicon.classList.add("fa-sun");
  } else {
    toggleicon.classList.remove("fa-sun");
    toggleicon.classList.add("fa-moon");
  }
}
let place = document.getElementById("place");
let weather = document.getElementById("weather");
let weatherlogo = document.getElementById("weather-logo");
function getGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    place.innerText = "Geolocation not supported";
  }
}
function showPosition(data) {
  console.log(data);
  let lat = data.coords.latitude;
  let long = data.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
  fetch(url, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let cityName = data.city.name;
      let temp = data.list[0].temp.day;
      console.log(cityName);
      console.log(temp);

      place.innerHTML = `<i class="fa-solid fa-location-dot"></i>${cityName}`;
      weather.innerText = `Temprature is ${temp}`;
      weatherlogo.innerHTML = `<img src='https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png' alt="weather"/>`;
    })
    .catch((err) => {
      console.log(err);
    });
}
