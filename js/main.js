

//BEGIN THE JQUERY!

$(document).ready(function() {
    console.log("Everything is ready; let's do this.");


// $(".thumbnail").on('click', function(){
//   if ($(this).hasClass("lightbox") === true) {
//   $(this).removeClass("lightbox");
//   }
//   else if ($(this).hasClass("lightbox") === false) {
//   $(this).addClass("lightbox");
//   }
// })

$('nav').hide();
$('.hero h1').hide();
$("#blank").fadeOut(1000);
//45 sec.
$("#mainImg").delay(2000).queue(function(){
    $(this).addClass("filter").dequeue();
});

  $("body").delay(2000).queue(function(){
  $('nav').slideDown().dequeue();
});

  $("#header").delay(3000).queue(function(){
   $('.hero h1').show().dequeue();
  });



// $("#mainImg").fadeIn(60000, function() {
//     $(this).addClass("filter");
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






//dot functionality

  // $(`#dot1`).on('click', function(){
  //       //hide the other slides ("stop" the slideshow)
  //       $("#slide2, #slide3").hide();
  //        //and show slide 1.
  //       $(`#slide1`).show();
  //     })

  // $(`#dot2`).on('click', function(){
  //       $("#slide1, #slide3").hide();
  //       $(`#slide2`).show();
  //     })

  // $(`#dot3`).on('click', function(){
  //       $("#slide1, #slide2").hide();
  //       $(`#slide3`).show();
  //     })





//  $(".lightbox").on('click', function(){
//         $(".lightbox:target").show();
//       })


}); //end of Jquery. 






