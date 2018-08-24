var d6 = function() {
  return Math.floor(Math.random() * 6 + 1);
}
var sumArray = function(array) {
  var sum = array.reduce(function(total, num) {
    return total + num;
  })
  return sum
}
var rolls = {
  player1: [],
  player2: []
}
var sums = {
  player1: 0,
  player2: 0
}

$(document).ready(function(){
  game = new Game();
  player1 = new Player();
  player2 = new Player();
  game.changeTurn(true)
  $("button#play").removeClass('zoomed-out');
  $("#title-header").removeClass('off-top');
  $("button#play").click(function(){
    $("button#play").addClass('zoomed-out');
    setTimeout(function(){
      $(".main-area").removeClass('hidden')
      $(".main-area").animate({
        opacity: 1
      },500)
      $("button#play").hide();
    },1500);
  });
  $('#play-again-button').click(function(){
    console.log("click")
    window.location.reload()
  })
});

function Player() {
  this.index = game.players.length;
  var playerNum = this.index+1
  this.avatar = $('#player-'+playerNum+'-avatar')
  // this.winImage = $('#player-'+playerNum+'-win-image')
  this.winImage = "img/winning"+playerNum+".png"
  this.rolls = rolls['player'+playerNum];
  this.rollButton = $('#player-'+playerNum+'-roll-button');
  this.holdButton = $('#player-'+playerNum+'-hold-button');
  this.rollSpan = $("#player-"+playerNum+"-roll-span");
  this.turnSpan = $("#player-"+playerNum+"-turn-span");
  this.scoreSpan = $("#player-"+playerNum+"-score-span");
  this.score = 0
  game.players.push(this);
  var self = this;
  this.rollButton.click(function(){
    var roll = d6(1,6);
    self.rollSpan.text(roll);
    if (roll === 1){
      self.rolls = [];
      self.turnSpan.text("0");
      game.changeTurn()
    } else {
      self.rolls.push(roll);
      var sum = sumArray(self.rolls);
      self.turnSpan.text(sum);
    }
  })
  this.holdButton.click(function(){
    var sum = sumArray(self.rolls)
    self.score += sum
    self.scoreSpan.text(self.score)

    console.log("winner exists? " + game.checkForWin())
    if (game.checkForWin()) {
      game.endGame(game.winner)
    } else {
      game.changeTurn()
    }
    self.turnSpan.text("");
    self.rollSpan.text("");
    self.rolls = [];
  })
}
function Game() {
  this.winningScore = 10;
  this.players = [];
  this.turn = 0;
  this.winner = undefined;
  this.changeTurn = function(noAdvance) {

    if (!noAdvance) {
      if (this.turn === this.players.length-1) {
        this.turn = 0
      } else {
        this.turn++
      }
    }
    console.log("turn " + this.turn)
    var activePlayer = this.players[this.turn]
    this.players.forEach(function(player,i){
      if (activePlayer !== player) {
        player.rollButton.addClass('obscured')
        player.holdButton.addClass('obscured')
        player.avatar.addClass('obscured')
      } else {
        activePlayer.rollButton.removeClass('obscured')
        activePlayer.holdButton.removeClass('obscured')
        player.avatar.removeClass('obscured')
      }
    })
  }
  this.checkForWin = function() {
    var hasWinner = false;
    this.players.forEach(function(player,i){
      console.log(player + " checking");
      console.log(player.score);
      console.log("to win: " + this.winningScore);
      if (player.score >= this.winningScore) {
        this.winner = player;
        hasWinner = true;
      }
    },this)
    return hasWinner;
  }
  this.endGame = function(winner) {
    $("#winner-name").html("Player " + (winner.index+1));
    $("#winner-image").html('<img id="player-'+(winner.index+1)+'-win-image" src="'+winner.winImage+'">');
    $("#win-screen").removeClass("tiny");
    $("#win-screen").removeClass("obscured");
    $("#title-header").addClass('off-top');
    $(".main-area").animate({
      opacity: 0
    },1000)
  }
}
