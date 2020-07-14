const targetDate = new Date("August 13, 2020 00:00:00");

function Timera(date, daysID, hoursID, minutesID, secondsID) {
  this.targetDate = date;
  this.days = document.getElementById(daysID);
  this.hours = document.getElementById(hoursID);
  this.minutes = document.getElementById(minutesID);
  this.seconds = document.getElementById(secondsID);
}

Timera.prototype.setDifferenceTime = function (){
  return Math.floor((this.targetDate - new Date()) / 1000);
}

Timera.prototype.showTimer = function (){
  let currentTime = this.setDifferenceTime();
  this.seconds.innerText = Math.floor(currentTime % 60);
  currentTime /= 60;
  this.minutes.innerText = Math.floor(currentTime % 60);
  currentTime /= 60;
  this.hours.innerText = Math.floor(currentTime % 24);
  currentTime /= 24;
  this.days.innerText = Math.floor(currentTime);
}

myTimer = new Timera(targetDate, "days", "hours", "minutes", "seconds");
myTimer.showTimer() // First run, no need to wait for `setInterval`

setInterval(
  function(){ myTimer.showTimer() }
  , 1000
);
