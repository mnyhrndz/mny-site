// function will be added
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode") }
//same as line #1
function myDark() {
    var element = document.body;
    element.classList.toggle("dark-mode") }
//current functions in site
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function twitterH() {
		var snd = new Audio("Twitter-S.mp3"); snd.play();
}

`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);