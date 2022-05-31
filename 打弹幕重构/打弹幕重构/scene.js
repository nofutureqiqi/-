var Scene = function(game){
  var s = {
    game: game,
  }

  var bullets = []
  var bulletAlive = true

  var character = Character(game)
  var background = Background(game)
  var boss = Boss(game)

  var score = 0

  for(var i = 0; i < 7; i++){
    var bullet = Bullet(game)
    bullet.x = bullet.x + i * 80
    bullet.y = bullet.y + i * 40
    bullets.push(bullet)
  }

  var draw_died = 0

  // Determine new ratio based on max size
  var ratio = 2;
  game.registerAction('a', function(){
    character.moveLeft()
  })

  game.registerAction('d', function(){
    character.moveRight()
  })

  game.registerAction('w', function(){
    character.moveUp ()
  })

  game.registerAction('s', function(){
    character.moveDown()
  })

  game.registerAction('f', function(){
    for (var i = 0; i < bullets.length; i++){
      var bullet = bullets[i]
      bullet.fire()
    }
  })

  s.draw = function(characterCanvasContext){
    //resize the canvascontext
    game.drawImageBackground(background)

    // character_canvas_ctx = resizeImage(characterCanvasContext, character.img, ratio)

    // log(character_canvas_ctx.width)
    // log(character_canvas_ctx.height)

    if (character.alive){
      game.drawImage(character)
    }

    for (var i = 0; i < bullets.length; i++){
      var bullet = bullets[i]
      if (bullet.alive)
      {
        game.drawImage(bullet)
      }
    }

    if (!character.alive && draw_died < 1){
      var character_dile_filepath = "animation/hit1_0025.png"
      var character_dile_image = imageFromPath(character_dile_filepath)
      game.context.drawImage(character_dile_image, character.x - 200, character.y- 200)
      draw_died++
    }

    // if (!character.alive && draw_died > 0){
    //   game.context.font = "30pt sans-serif";
    //   game.context.fillStyle = "#FF5151";
    //
    //   game.context.fillText("Game Over", 500, 300)
    // }

    game.drawImage(boss)

    game.context.font = "20pt sans-serif";
    game.context.fillStyle = "#FFFF93";

    var finalscore = parseInt(score)
    game.context.fillText("分数: " + finalscore, 890, 510)
  }


  s.update = function(){
    if (window.paused){
      return
    }

    if (!character.alive){
      var end = SceneEnd(game)
      game.replaceScene(end)
    }


    for (var i = 0; i < bullets.length; i++){
      var bullet = bullets[i]

      if (bullet.alive){
        bullet.move()
      }

      if (character.collide(bullet) && bullet.alive){
        log('子弹撞了')
        bulletAlive = false
        character.kill()
        bullet.kill()
      }

      if (character.alive && bullet.fired){
        score += 0.1
      }

    }
  }


  var enableDrag = false

  game.canvas.addEventListener('mousedown', function(event){
    var x = event.offsetX
    var y = event.offsetY

    log(x, y, event)

    if(character.hasPoint(x, y)){
      enableDrag = true
    }
  })

  game.canvas.addEventListener('mousemove', function(event){
    var x = event.offsetX
    var y = event.offsetY

    if (enableDrag){
      log(x, y, 'drag')
      character.x = x
      character.y = y
    }
  })

  game.canvas.addEventListener('mouseup', function(event){
    var x = event.offsetX
    var y = event.offsetY

    log(x, y, 'up')

    enableDrag = false
  })

  return s
}
