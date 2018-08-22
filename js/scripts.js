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
  $(".btn").click(function(){
    $(".card").append(d6);
  })
})
