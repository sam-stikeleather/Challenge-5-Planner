$(document).ready(function() {
  // Get the current date and format it
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(currentDate);

  // Add event listeners to the save buttons
  $('.saveBtn').on('click', function() {
    var timeBlock = $(this).parent();
    var time = timeBlock.attr('id');
    var eventText = timeBlock.find('.description').val();
    
    // Save the event text to local storage
    localStorage.setItem(time, eventText);
  });

  // Load any saved events from local storage
  function loadEvents() {
    $('.time-block').each(function() {
      var time = $(this).attr('id');
      var eventText = localStorage.getItem(time);

      if (eventText !== null) {
        $(this).find('.description').val(eventText);
      }
    });
  }

  loadEvents();

  // Update the color coding of time blocks
  function updateTimeBlocks() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function() {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      $(this).removeClass('past present future');

      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  }

  updateTimeBlocks();
});




let now = dayjs();

console.log(now);

let year = now.year();
console.log(`Year: ${year}`);

let month = now.month();
console.log(`Month: ${month}`);

let date = now.date();
console.log(`Date: ${date}`);

let hour = now.hour();
console.log(`Hour: ${hour}`);

let minute = now.minute();
console.log(`Minute: ${minute}`);

let second = now.second();
console.log(`Second: ${second}`);

let milli = now.millisecond();
console.log(`Millisecond: ${milli}`);