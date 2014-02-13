
// $( document ).ready(function() {

//   $('.row').bind("hover", function() {
//     console.log('yay')
//   });


// });



$( document ).ready(function() {
  $( "#map ul" ).bind( "click", function( event ) {
    // console.log( "The mouse cursor is at (" + event.pageX + ", " + event.pageY + ")" );

    $(this).toggleClass( "done" );
  });
});