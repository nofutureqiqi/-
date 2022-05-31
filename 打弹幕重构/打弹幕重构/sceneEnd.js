var SceneEnd = function(game){
  var s = {
    game: game,
  }

  s.draw = function(){
    game.context.font = "30pt sans-serif";
    game.context.fillStyle = "#FF5151";

    game.context.fillText("Game Over", 500, 300)
  }

  s.update = function(){

  }

  return s

}
