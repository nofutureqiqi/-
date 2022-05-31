var Game = function(fps, images, runCallback){
  var g = {
    scene: null,
    images: {},
    actions: {},
    keydowns: {},
  }

  var canvas = document.querySelector('#mycanvas') //使用querySelector获取id-canvas的构造器,拿到canvas
  var ctx = canvas.getContext('2d')

  drawCanvasText(canvas, ctx)

  g.canvas  = canvas
  g.context = ctx

  g.drawImageBackground = function(img){
    g.context.drawImage(img.img, 50, 50)
  }

  g.drawImage = function(img){
    g.context.drawImage(img.img, img.x, img.y)
  }
  // g.drawImageCtx = function(img, canvas){
  //   g.context.drawImage(img.img, img.x, img.y, canvas.width, canvas.height)
  // }

  // g.drawImageCtx = function(img, canvas){
  //   g.context.drawImage(img.img, img.x, img.y, canvas.width, canvas.height)
  // }

  window.addEventListener('keydown', function(event){
    g.keydowns[event.key] = true
  })


  window.addEventListener('keyup', function(event){
    g.keydowns[event.key] = false
  })

  g.update = function(){
    g.scene.update()
  }


  g.draw = function(){
    //create new canvas
    // document.body.appendChild(characterCanvas)
    //add it to the current canvas

    // var charactesrCanvasContext = characterCanvas.getContext("2d")

    g.scene.draw()
  }

  g.registerAction = function(key, callback){
    g.actions[key] = callback
  }

  //timer
  window.fps = 60

  var runloop = function(){
    var actions = Object.keys(g.actions)
    for (var i = 0; i < actions.length; i++){
      var key = actions[i]
      if(g.keydowns[key]){
        log("按键: ", g.keydowns[key])
        g.actions[key]()
      }
    }

    //update
    g.update()

    //clear
    ctx.clearRect(0, 0, canvas.width, canvas.heihgt)

    //draw
    g.draw()

    setTimeout(function(){
      runloop()
    }, 1000/window.fps)
  }

  //载入图片

  var loads = []
  var names = Object.keys(images)

  for(var i = 0; i < names.length; i++){
    let name = names[i]
    var path = "image/" + images[name]

    let img = new Image()

    // log(path)
    img.src = path

    img.onload = function(){
      g.images[name] = img

      loads.push(1)

      log("load images ... ", loads.length, names.length)

      if (loads.length == names.length){
        log("load images finish, game start ...", g.images)
        g._start()
      }
    }
  }

  g.imageByName = function(name){
    log('image by name', g.images)

    var img = g.images[name]

    var image = {
      w: img.width,
      h: img.height,
      image: img,
    }

    return image
  }

  g.runwithScene = function(scene){
    g.scene = scene

  setTimeout(function(){
    runloop()
    }, 1000/fps)
  }

  g._start = function(scene){
    runCallback(g)
  }


  return g
}
