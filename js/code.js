$(document).ready(function(){
 $('#messi img').click(function(){
    $('.player-info:first'),fadeToggle();
   });
   $('#voting-form').submit(function(){
    $('#voting-form').preprnd("<div class='alert alert-secondary' role='alert'>Thank you for your opinion!</div>");
    $('.voting').remove();
    return false;
 });
  $('tr').click(function(){
    $(this).toggleClass('highlight');
  });
});