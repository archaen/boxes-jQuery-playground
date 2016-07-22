$(document).ready(function() {
  console.log( "ready for Dom manipulation" );

  //make secret box white
  $('#secretBox').css('background', 'white');

  // Find all child divs of the first row. Set the class for each div to boxType3.
  $('#row1 div').attr( 'class','box boxType3');

  // Make the last box in the last row disappear. (Hint, look into the dispaly style. Also, you should only get back one element from your selector.).
  $('div div div:last-child').hide();

  // Change all red boxes to white.
  $('.boxType1').css('background', 'white');

  // Get the first two divs in the second row. Take away all styling from the divs.
  $('#row2').children().slice(0,2).attr('style','');

  // Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.
  $('div').not('#row').not('#secretBox').css('width',' 2px')

});
