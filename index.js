setInterval(function () {
//LA

let laElement = document.querySelector("#la");
let laDateElement = laElement.querySelector(".date");
let laTimeElement = laElement.querySelector(".time");
let laTime = moment().tz("America/Los_Angeles");

laDateElement.innerHTML = laTime.format("Do MMMM YYYY");
laTimeElement.innerHTML = laTime.format("hh:mm:ss [<small>]A[</small>]");



//London

let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("Do MMMM YYYY");
londonTimeElement.innerHTML = londonTime.format("hh:mm:ss [<small>]A[</small>]");

}, 1000);