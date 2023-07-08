
$(document).ready(function() {
// Get the current date and format it 
  const currentDate = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(currentDate);
  
//Add event listeners to the save buttons
$('.saveBtn').on('click', function() {
  const timeBlock = $(this).parent();
  const time = timeBlock.attr('id');
  const eventText = timeBlock.find('description').val();

// Save the event text to local storage
localStorage.setItem(time, eventText);  
});

// Load and saved events from local storage
function loadEvents() {
  $('.time-block').each(function() {
    const time = $(this).attr.getItem(time);

    if (eventText !== null) {
      $(thus).find('.description').val(eventText);
    }
  });
}


})



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