// var rioStart = Date.parse('August 5, 2016 19:00');
var rioStart = new Date('August 5, 2016 19:00').getTime();
// Various time units in seconds
var secondsInAMinute = 60;
var secondsInAnHour = secondsInAMinute * 60;
var secondsInADay = secondsInAnHour * 24;
var secondsInAWeek = secondsInADay * 7;
// Get the various DOM elements in various
var countdownTimer = document.getElementById('countdown-timer');
// console.log(document.querySelector('.weeks-number')); Alternate
// console.log(document.getElementsByTagName('span')[0]); Alternate
var secondsDigit = (document.getElementsByClassName('seconds-number')[0]);
var minutesDigit = (document.getElementsByClassName('minutes-number')[0]);
var hoursDigit = (document.getElementsByClassName('hours-number')[0]);
var daysDigit = (document.getElementsByClassName('days-number')[0]);
var weeksDigit = (document.getElementsByClassName('weeks-number')[0]);

console.log(weeksDigit);
// weeksDigit.style.display = "red";

function updateCounter(){
	// Get the current time in milliseconds since 1970 (UNIX epoch)
	var now = Date.now();
	// Time in seconds between the current moment and the start of Rio 2016
	var getTimeTillRio = (rioStart - now) / 1000;
	// console.log(getTimeTillRio);

	// Get various units of time till event
	var seconds = Math.floor(getTimeTillRio % 60);
	var minutes = Math.floor((getTimeTillRio / secondsInAMinute) % 60);
	var hours = Math.floor((getTimeTillRio / secondsInAnHour) % 24);
	var days = Math.floor((getTimeTillRio / secondsInADay) % 7);
	var weeks = Math.floor((getTimeTillRio / secondsInAWeek) % 52);

	// Set the HTML of the given unit with the new amount
	secondsDigit.innerHTML = seconds;
	// document.getElementsByClassName('seconds-number')[0].innerHTML = seconds
	minutesDigit.innerHTML = minutes;
	hoursDigit.innerHTML = hours;
	daysDigit.innerHTML = days;
	weeksDigit.innerHTML = weeks;
}

// Call the setInterval method which will run our update function every 1000 milliseconds/1 second
setInterval(updateCounter, 1000);