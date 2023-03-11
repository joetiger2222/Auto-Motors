/*global $*/
/*global document*/
$(document).ready(function(){
(function(){
      var words = [
          'WHY ARE YOU CONFUSED ???<br>PICK YOUR CAR NOW 🚗',
          'Audi :<br>"BE A BEAST....... Drive A BEAST."',
          'Mercedes-Benz :<br>"THE BEST WAY TO PREDICT THE FUTURE IS TO CREATE IT."',
          'BMW :<br>"RESPECT IS EARNED NOT GIVEN."'
          
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 3000);
        
  })();
  /* Examples */
(function($) {

  $('.second.circle').circleProgress({
    value: 0.8
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
  });

})(jQuery);
});