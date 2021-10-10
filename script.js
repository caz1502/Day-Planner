var timeDisplayEl = $('#currentDay')
var button =$('.saveBtn')

//displays current time and countdown in jumbtron
function displayTime() {
    var rightNow = moment().format('dddd Do [of ] MMMM, YYYY [Time:] hh:mm: a');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);


// this fuction defines the current time
 
function currentTime() {
  var current = moment().hours()
  var time = $('.time-block');
// this grabs the time integer
  time.each(function () {
    var hour = parseInt($(this).attr('id'))

// this is the if statement that changes current hour
    if (hour === current) {
      $(this).children('.col-sm-9').attr('class', 'present col-sm-9 description')
  // this is the if statement that changes past hour hour
    } else if (current > hour) {
      $(this).children('.col-sm-9').attr('class', 'past col-sm-9 description')
  //  this is the if statement if the previous 2 statement are not met then this is the colour
    } else {
      $(this).children('.col-sm-9').attr('class', 'future col-sm-9 description')
  
    }
  })
}
currentTime()

 //Save to local storage

 button.on('click', function (event) {
  event.preventDefault();
  var text = $(this).siblings('.col-sm-9').val();
  var parent = $(this).parent().attr('id');
  localStorage.setItem(parent, JSON.stringify(text));
})

// prints local storage on screen


  // Get item from local storage if any

$('#9 textarea').val(localStorage.getItem('9'));
$('#10 textarea').val(localStorage.getItem('10'));
$('#11 textarea').val(localStorage.getItem('11'));
$('#12 textarea').val(localStorage.getItem('12'));
$('#13 textarea').val(localStorage.getItem('13'));
$('#14 textarea').val(localStorage.getItem('14'));
$('#15 textarea').val(localStorage.getItem('15'));
$('#16 textarea').val(localStorage.getItem('16'));
$('#17 textarea').val(localStorage.getItem('17'));


  