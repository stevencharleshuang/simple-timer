$(document).ready(() => {
  // jQuery Vars
  let 
    $btnStartStop = $('.btn-start-stop'),
    $btnReset = $('.btn-reset'),
    $timeStart = $('.time-start'),
    $timeEnd = $('.time-end');
    $timeElapsed = $('.time-elapsed');
    $timeNow = $('.time-now');

  // Moment Vars
  const armyTime = 'HH:mm:ss';
  const meridianTime = 'hh:mm a';
  const armyTimeInit = '00:00:00';
  const getTime = (timeFormat) => moment().format(timeFormat);
  let startTime, endTime, elapsedTime;

  // Initialize current time and set interval to dynamically update the current time by the minute
  $timeNow.html(getTime(meridianTime));
  setInterval(() => $timeNow.html(getTime(meridianTime)), 60000);

  // Start-Stop Button Event Handler
  $btnStartStop.click(() => {
    if ($btnStartStop.html() === 'START') {
      if ($timeElapsed.text() === '00:00:00') {
        startTime = getTime(armyTime);
        $timeStart.text(startTime);
      }
      $btnStartStop.html('STOP');
      $timeEnd.text(armyTimeInit);
    } else {
      $btnStartStop.html('START');
      endTime = getTime(armyTime);

      // Capture differences of hours, minutes and seconds
      let 
        hoursDiff = Math.abs(startTime.slice(0, 2) - endTime.slice(0, 2)),
        minutesDiff = Math.abs(startTime.slice(3, 5) - endTime.slice(3, 5)),
        secondsDiff = Math.abs(startTime.slice(6) - endTime.slice(6));
      
      // Buffer differences with 0s as necessary
      if (hoursDiff < 10) {
        hoursDiff = `0${hoursDiff}`;
      }

      if (minutesDiff < 10) {
        minutesDiff = `0${minutesDiff}`;
      }

      if (secondsDiff < 10) {
        secondsDiff = `0${secondsDiff}`;
      }

      // Handle display of results
      elapsedTime = `${hoursDiff}:${minutesDiff}:${secondsDiff}`;
      $timeEnd.text(endTime);
      $timeElapsed.text(elapsedTime);
    }
  });

  // Resets state of buttons and times
  $btnReset.click(() => {
    $btnStartStop.html('START');
    $timeStart.text(armyTimeInit);
    $timeEnd.text(armyTimeInit);
    $timeElapsed.text(armyTimeInit);
  });
});