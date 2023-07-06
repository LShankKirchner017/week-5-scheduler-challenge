
$(document).ready(function () {
  $(function () {
    
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



dayjs().format("L LT");
    var now = dayjs().format('dddd, MMMM D, YYYY')
    console.log(now)
    $('#currentDay').text(now).appendTo("header")
    
 
  });
});