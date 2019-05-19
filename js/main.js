

//BEGIN THE JQUERY!

$(document).ready(function() {
    console.log("Everything is ready; let's do this.");



$('nav').hide();
// $('.hero h1').hide();
$("#blank").fadeOut(1000);
//45 sec.
$("#mainImg").delay(2000).queue(function(){
    $(this).addClass("filter").dequeue();
});

  $("body").delay(2000).queue(function(){
  $('nav').slideDown().dequeue();
});

  // $("#header").delay(3000).queue(function(){
  //  $('.hero h1').show().dequeue();
  // });




$("nav ul li a").on('click', function(){
  $("nav ul li a").removeClass("highlight");
  $(this).addClass("highlight");
});

$("section").on('mouseover', function(){
    $("nav ul li a").removeClass("highlight");
    var nowIn = $(this).attr('id');
    $(`a[href$='${nowIn}']`).addClass("highlight");
   });


}); //end of Jquery. 






