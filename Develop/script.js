// TODO the current day is displayed at the top of the calendar

var currentDate = dayjs().format('dddd, MMMM DD, YYYY');
console.log(currentDate);
$('#currentDay').text(currentDate);

// TODO each timeblock is color coded to indicate whether it is in the past, present, or future
// TODO the text for that event is saved in local storage when save button is clicked
// TODO the saved events persist when I refresh the page 


// messing me up, dealing with below junk later...

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function() {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.

  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function handleFormSubmit(event) {
    event.preventDefault();

  var saveBtnEl = $('#saveBtn');
  var timeBlockDisplayEl = $('#time-block');

  saveBtnEl.on('click', function () {
    var userInput =  $('input[name="#time-block"]').val();
    console.log(userInput);
    timeBlockDisplayEl.text(userInput);
  });
  }
  timeBlockEl.on('submit', handleFormSubmit);


  
  // refer to 5-04-Stu_click-Events??

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page
