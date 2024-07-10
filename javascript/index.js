setInterval(function () {
//LA

let laElement = document.querySelector("#la");
if (laElement) {
let laDateElement = laElement.querySelector(".date");
let laTimeElement = laElement.querySelector(".time");
let laTime = moment().tz("America/Los_Angeles");

laDateElement.innerHTML = laTime.format("Do MMMM YYYY");
laTimeElement.innerHTML = laTime.format("hh:mm:ss [<small>]A[</small>]");

}



//London

let londonElement = document.querySelector("#london");
if (londonElement) {
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("Do MMMM YYYY");
londonTimeElement.innerHTML = londonTime.format("hh:mm:ss [<small>]A[</small>]");
}
}
,1000);


function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("hh:mm:ss")}<small>${cityTime.format(
        "A")}</small></div>
      </div>
      <a href="">All Cities</a>
      `;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);


