// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the HTML

var saveButton = $(".saveBtn")
var text
$(document).ready(function () {
         
    $(function(){
      // using the save button to store the text input & how we put calendar slots in local storage
      saveButton.click(function () {
        var textVal = $(this).siblings(".description").val();
        var elementNum = parseInt($(this).parent().attr("id").split("-")[1]);
        localStorage.setItem(elementNum, textVal);

      });


      // how we get the current time
      var now = dayjs();

      // how we compare the now hour to the schedule hour
      var $timeBlocks = $(".time-block");
      $timeBlocks.each(function () {
        var $timeBlocks = $(this);
        var nowHour = now.hour();
        var blockHour = $timeBlocks.attr("id").split("-")[1];

        // how we assign a class to the schedule block
        var timeClass;
        if (blockHour == nowHour) {
          timeClass = "present";
        } else if (blockHour < nowHour) {
          timeClass = "past";
        } else {
          timeClass = "future";
        }
        $timeBlocks.addClass(timeClass);
        // how we load the saved events (elementNum)
          // check to see if anything is in the block when we loop
          var savedEvent= localStorage.getItem(blockHour)
          // if there is an event saved
          console.log(savedEvent) 
            if (savedEvent){
              //then put value into the block 
              $timeBlocks.find('.description').val(savedEvent)
            } 
      });
    })


 
   // how we display the current date
  dayjs().format("L LT");
  var now = dayjs().format("dddd, MMMM D, YYYY, hh:mm");
  $("#currentDay").text(now).appendTo("header");
})
