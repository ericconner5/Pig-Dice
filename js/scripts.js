var d6 = function randomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var player1Rolls = []

var player2Rolls = []
// var turnTotal =
//
// var score =

// var roll =

$(document).ready(function(){
  $("button#play").click(function(){
    $(".hidden").show();
    $("button#play").hide();
  })
  // var rollSum =


  $("#player-1-roll-button").click(function(){
    var roll = d6(1,6)
    $("#player-1-roll-span").text(roll);
    (player1Rolls).push(roll);
  })


  $("#player-2-roll-button").click(function(){
    var roll = d6(1,6)
    $("#player-2-roll-span").text(roll);
    (player2Rolls).push(roll);
  })
})





$("#player-1-hold-button").click(function(){
  $("#player-1-turn-span").text(roll);

})

$("player-2-hold-button").click(function(){
  $("#player-2-turn-span").text(roll);

})
