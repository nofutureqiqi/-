var Character = function(game){
  var img = game.imageByName('character')
  var o = {
    x: 500,
    y: 300,
    speed: 5,
    alive: true,
  }
  o.img = img.image
  o.w = img.width
  o.h = img.height

  o.moveLeft = function(){
    o.x -= o.speed
  }

  o.moveRight = function(){
    o.x += o.speed
  }

  o.moveUp = function(){
    o.y -= o.speed
  }

  o.moveDown = function(){
    o.y += o.speed
  }

  var aInb = function(x, x1, x2){
    return x >= x1 && x <= x2
  }

  o.kill = function(){
    o.alive = false
  }

  o.collide = function(bullet){
    // if (bullet.y > o.y - o.image.height && bullet.y < o.y + o.image.height){
    //     if(bullet.x + bullet.image.width -35 > o.x){
    //       return true
    //     }
    //   }

      if (aInb(o.x, bullet.x, bullet.x + bullet.w) || aInb(bullet.x, o.x, o.x + o.w)){
        if (aInb(o.y, bullet.y, bullet.y + bullet.y) || aInb(bullet.y, o.y, o.y + o.y)){
          return true
        }
      }
      return false
  }

  o.hasPoint = function(x, y){
    var xIn = x >= o.x && x <= o.x + o.w
    var yIn = y >= o.y && y <= o.y + o.h

    return xIn && yIn
  }
  return o
}
