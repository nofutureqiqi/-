var enableDebugMode = function(enable){
  if (!enable){
    return
  }

  window.paused = false

  window.addEventListener('keydown', function(event){
    var k = event.key
    if (k == 'p'){
      window.paused = !window.paused
    }
  })

  document.querySelector('#id-input-speed').addEventListener('input', function(event){
    var input = event.target
    window.fps = Number(input.value)
  })
}

var _main = function(){

  var images = {
    bullet: 'bullet.png',
    background: 'background.png',
    character: 'character.png',
    boss: 'boss.png',
    character_die: 'character_die.png',
  }

  var game = Game(60, images, function(g){
    var s = Scene(g)
    g.runwithScene(s)
  })

  enableDebugMode(game, true)
}
