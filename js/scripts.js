var d6 = function randomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var sumPlayer1 = function() {
  var sum = 0;
  for (i=0; i < player1Rolls.length; i++) {
    sum += player1Rolls[i];
    (player1RollsSum).push(sum);
  }
}

var sumPlayer2 = function() {
  var sum = 0;
  for (i=0; i < player2Rolls.length; i++) {
    sum += player2Rolls[i];
    (player2RollsSum).push(sum);
  }
}



var player1Rolls = []

var player2Rolls = []

var player1RollsSum = []

var player2RollsSum = []



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
  } else {
      (player1Rolls).push(roll);

  }

})

  $("#player-2-roll-button").click(function(){
    var roll = d6(1,6)
    $("#player-2-roll-span").text(roll);
    if (roll === 1){

      alert("Turns up!")
  } else {
      (player2Rolls).push(roll);
  }
})


  $("#player-1-hold-button").click(function(){
    sumPlayer1()
    $("#player-1-score-span").text(player1RollsSum);
    console.log(player1RollsSum);
  })

  $("#player-2-hold-button").click(function(){
    sumPlayer2()
    $("#player-2-score-span").text(player2RollsSum);
  })


})
