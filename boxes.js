$(document).ready(function() {
  console.log( "ready for Dom manipulation" );

  //make secret box white
  $('#secretBox').css('background', 'white');

  // Find all child divs of the first row. Set the class for each div to boxType3.
  //$('#row1 div').attr('class','box boxType3');

  // Make the last box in the last row disappear. (Hint, look into the dispaly style. Also, you should only get back one element from your selector.).
  $('#row4 .box:last-child').hide();

  // Change all red boxes to white.
  // $('.boxType1').css('background', 'white');

  // Get the first two divs in the second row. Take away all styling from the divs.
  //$('#row2').children().slice(0,2).removeClass();

  // Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.  Commenting out for next part.
  //$('#container div').not('.row').not('#secretBox').css('width',' 2px');

  //Add an on click handler to the container div. Console log the x and y position of the click.
  $('#container').on('click', function(event) {
    console.log('X pos:' + event.pageX +', Y pos:' + event.pageY);
  });

  // Add links inside all red box divs that take the user to galvanize. Then add an on click handler that alerts the user that you can never leave the page. Make sure the user won't leave the page after the alert!
  //I kept the filter because the secret box has class boxtype1 and is white but will still get the link.  I could of used the not('#secretBox') bit this will keep the
  $('.boxType1').filter(function(index, value) {
     return($(value).css('background-color') == 'rgb(255, 0, 0)');
  }).wrapInner('<a href="http://www.galvanize.com">Galvanize.com</a>');

  $('A').on('click', function(event) {
    event.preventDefault();
    alert("There is no escape!");
  });

  // For all box divs, add a click handler that adds an image of a cute puppy to the box. If the image is clicked again, remove the cute puppy.
  $('.box').on('click', function(event) {

    if ($(this).css('background-image') !== 'none') {
      $(this).css('background-image', 'none');
    }
    else{
      $(this).css("background-image", "url(http://loremflickr.com/160/160/dog)");
    }
  });

  // Write a click handler on the container div. The click handler should turn the container background to black and the background of the original div that was clicked to white. If the user original div that was clicked happened to be the container div, change the background of the container div to lime green. You should not use any selectors for this exercise. You can do it completely with what is given to you in the event callback.

  $(document).on('click', function(event) {
    console.log(event.target);
  });
});
