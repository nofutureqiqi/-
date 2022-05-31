var Boss = function(game){
  var img = game.imageByName('boss')
  var o = {
    x: 100,
    y: 300,
    speed: 5,
  }

  o.img = img.image
  o.w = img.width
  o.h = img.height
  return o
}
