// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the HTML
$(document).ready(function () {
  $(function () {
  //Save Button
  
    //when clicked, saves the input in local storage
      // var saveButtonEl = $("#save-btn");

      // saveButtonEl.on("click", function () {
      //   localStorage.setItem();
      // });

    $(".time-block").each(function(){
      var hour = $(this).attr("id").split("-")[1];
      var dayjs = dayjs().format("H");
      console.log(hour)
      if (hour < dayjs){
        $(this).addClass("past")
      }
    })

  // If Then logic for assigning color to time block
    //if the current time=true, color is red
    //else the current time=false, color is gray if -1 hour, green if +1 hour
    
    
    
    
    // Display current date in the header of the page in the appropriate format
    dayjs().format("L LT");
    var now = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(now).appendTo("header");
  });
});
