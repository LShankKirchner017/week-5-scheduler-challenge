// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the HTML
$(document).ready(function () {
         
    $(function(){
      // how we get the current time
       var now = dayjs();

      // how we compare the now hour to the schedule hour 
      var $timeBlocks = $('.time-block')
      $timeBlocks.each(function(){
        var $timeBlocks = $(this)
        var nowHour = now.hour()
        var blockHour = $timeBlocks.attr('id').split('-')[1]

       // how we assign a class to the schedule block
        var timeClass
        if (blockHour == nowHour){
          timeClass='present'
        } else if (blockHour < nowHour){
          timeClass='past'
        } else {
          timeClass='future'
        }
        $timeBlocks.addClass(timeClass)
      })
    })
   // how we display the current date
  dayjs().format("L LT");
  var now = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(now).appendTo("header");
})
