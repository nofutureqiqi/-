function drawCanvasText(canvas, ctx){
  ctx.fillStyle = 'rgb(255, 255, 255)'
  ctx.fillRect(0, 0, canvas.width , canvas.height)

  ctx.strokeStyle = 'Red'
  ctx.lineWidth = 1
  ctx.font ='45 arial'
  ctx.strokeText('开始游戏', 50, canvas.height - 20)

  ctx.strokeStyle = 'Red'
  ctx.lineWidth = 1
  ctx.font ='45 arial'
  ctx.strokeText('锅巴的打弹幕游戏', 500, canvas.height - 20)


  ctx.strokeStyle = 'rgb(0,0,0)'
  ctx.strokeRect(46,43, canvas.width - 108, canvas.height-48)
  ctx.lineWidth = 400

}

var e = sel => document.querySelector(sel)


function imageFromPath(path){
  var image = new Image() //替换图片
  image.src = path
  return image
}

function resizeImage(ctx, img, ratio){
  log(img.width * ratio)
  ctx.width = img.width * ratio;
  ctx.height = img.height * ratio;

  return ctx;
}

var character_die_animation = function(x, y){
  var character_folder = "animation/"
  var character_images = {}

  for (var i = 0; i < 35; i++){
    var character_filepath = character_folder + "hit1_000" + i + ".png"
    log("filepath: ", character_filepath)
    var character_image = imageFromPath(character_filepath)
    character_images.append(character_image)
  }
  return character_images
}

var log = console.log.bind(console)//建立js的log函数
