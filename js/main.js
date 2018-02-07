// When eyes button is clicked, toggle laser class on brain
$(".flash").click(function() {
  $(".brain").toggleClass('laser');
});

// When color button is clicked...
$(".color").click(function() {
  // assign each named color a random number 0-255
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);

  //Generate an RBGA value from red, green, blue
  var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
  //change bodys background to random colors
  $("body").css("background", randomRGBA);
  //Display the rgba values(alert/log?)
  // console.log(randomRGBA);
});

//Moves for dance button click
// $(".dance").click(function() {
//     if($(this).hasClass("clicked")){
//         $(this).removeClass("clicked");
//
//         $(".robot").animate({left: '+=200px'});
//     }else{
//         $(this).addClass("clicked");
//
//         $(".robot").animate({left: '-=200px'});
//       }
//   });

$(document).ready(function(){
  $(".dance").click(function(){
    $(".robot").animate({left: '+=300px'},"slow");
    $(".robot").animate({left: '-=300px'},"slow");
    $(".robot").animate({left: '-=300px'},"slow");
    $(".robot").animate({left: '+=300px'},"slow");
    $(".robot").animate({left: '+=300px'},"slow");
    $(".robot").animate({left: '-=300px'},"slow");
    $(".robot").animate({left: '-=300px'},"slow");
    $(".robot").animate({left: '+=300px'},"slow");
    $(".robot").animate({left: '+=300px'},"slow");
    $(".robot").animate({left: '-=300px'},"slow");
  });
});

//music play
// function play() {
//   document.getElementsByTagName('iframe')[0].src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197629761&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true";
// };
