$( document ).ready(() => {
  let $btnStartStop = $(".btn-start-stop");

  /** 
   * On click, change the Text to 'START' or 'STOP'
   * START - grab the current time and store
   * STOP - grab the current time and show the difference in Display Box
  */
  $btnStartStop.click(() => {
    if ($btnStartStop.html() === 'START') {
      $btnStartStop.html('STOP');
    } else {
      $btnStartStop.html('START');
    }
  });
  

});