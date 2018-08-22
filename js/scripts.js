var d6 = function randomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var sumPlayer1 = function() {
  var sum = 0;
  for (i=0; i < player1Rolls.length; i++) {
    sum += player1Rolls[i];
    (player1Tracker).push(sum);
    if (i === player1Rolls.length - 1 ) {
      $("#player-1-turn-span").text(sum)
    }
  }
}

var sumPlayer2 = function() {
  var sum = 0;
  for (i=0; i < player2Rolls.length; i++) {
    sum += player2Rolls[i];
    (player2Tracker).push(sum);
    if (i === player2Rolls.length - 1 ) {
      $("#player-2-turn-span").text(sum)
    }
  }
}

// Functions Below aren't pushing the proper index value (the last). Fix this, then the whole site will work.

var totalPlayer1 = function() {
  for (i=i; i < player1Tracker.length; i++)
  (player1Sum).push(player1Tracker[i])
  console.log(player1Sum);
}

var totalPlayer2 = function() {

}

var player1Rolls = []
var player2Rolls = []

var player1Tracker = []
var player2Tracker = []

var player1Sum = []
var player2Sum = []


$(document).ready(function(){
  $("button#play").click(function(){
    $(".hidden").show();
    $("button#play").hide();
  })


  $("#player-1-roll-button").click(function(){
    var roll = d6(1,6)
    $("#player-1-roll-span").text(roll);
    if (roll === 1){
      alert("Turns up!")
      return player1Rolls = []
    } else {
      (player1Rolls).push(roll);
      sumPlayer1();
    }
  })

  $("#player-2-roll-button").click(function(){
    var roll = d6(1,6)
    $("#player-2-roll-span").text(roll);
    if (roll === 1){
      alert("Turns up!")
      return player2Rolls = []
    } else {
      (player2Rolls).push(roll);
      sumPlayer2();
    }
  })

  $("#player-1-hold-button").click(function(){
    totalPlayer1()

  })

  $("#player-2-hold-button").click(function(){
    totalPlayer2()
  })
})
