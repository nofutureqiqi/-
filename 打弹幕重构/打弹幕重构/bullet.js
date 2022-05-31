var Bullet = function(game){
  var img = game.imageByName('bullet')
  var o = {
    x: 0,
    y: 200,
    speed: 2,
    numberOfParticles: 20,
    alive: true,
    particles: [],
  }

  o.img = img.image
  o.w = img.width
  o.h = img.height

  o.fire = function(){
    o.fired = true
  }

  o.move = function(){
    if (o.fired)
      o.x += o.speed
    }
  o.kill = function(){
      o.alive = false
  }

  return o
}
