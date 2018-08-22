var d6 = function randomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// var turnTotal =
//
// var score =

// var roll =

$(document).ready(function(){
  $("button#play").click(function(){
    $(".hidden").show();
    $("button#play").hide();
  })






    $("#player-1-roll-button").click(function(){
    $("#player-1-roll-span").text(d6);
  })


  $("#player-2-roll-button").click(function(){
    $("#player-2-roll-span").text(d6);
  })
})
