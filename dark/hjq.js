/*global $*/
/*global document*/

  /* Examples */
(function($) {

  $('.second.circle').circleProgress({
    value: 0.8
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
  });

})(jQuery);
