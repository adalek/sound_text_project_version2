// let ctx;
//
// function setup() {
//   createCanvas(500, 500);
//   ctx = canvas.getContext('2d');
//   noLoop();
// }
//
// function draw() {
//   background(235);
//   noStroke()
//   fill(255)
//   ellipse(width/2,height/2,197)
//   fill(100)
//   ellipse(width/2,height/2,100)
//
//   noFill()
//   stroke(240)
//   strokeWeight(1)
//   for (let i = 0; i<10;i+=1){
//     ellipse(width/2,height/2,205-i*14)
//   }
//
//   noStroke()
//   fill(240,200,200)
//   ellipse(width/2,height/2,100)
//   push()
//
//   // Shadow
//   ctx.shadowColor = 'red';
//   ctx.shadowBlur = 45;
//   noFill()
//   stroke(255)
//   strokeWeight(5)
//
//   // ctx.fillStyle = 'blue';
//   ellipse(width/2,height/2,200)
//   pop()
//
//
//
//
//
//
// }





let ctx;
r = 0
let value = 0;
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  ctx = canvas.getContext('2d');
  another = createGraphics(400,400)
  //noLoop();
  img = loadImage('assets/cover.jpg');
}

function draw() {
  background(255,255,255,2);
  translate(width/2, height/2)
  for (let i = 0;i<3;i++){
    if (value === 1) {
    rotate(i/2 + frameCount/200)
    imageMode(CENTER);
    image(img, 0, 0, img.width / 6, img.height / 6);}
  }
  // for (let i = 0;i<3;i++){
  //   rotate(i/2 + frameCount/200)
  //   imageMode(CENTER);
  //   image(img, 0, 0, img.width / 6, img.height / 6);
  // }


  // noStroke()
  // fill(255)
  // ellipse(width/2,height/2,197)

  noFill();
  stroke("white");
  strokeWeight(70)
  ellipse(0,0,200)


//circles
  noFill()
  stroke(240)
  strokeWeight(1)
  for (let i = 0; i<8;i+=1){
    ellipse(0,0,215-i*14)
  }
  //record cover;to be replaced by image
  // noStroke()
  // fill(240,200,200)
  // ellipse(width/2,height/2,100)

  push()

  // Shadow
  ctx.shadowColor = '#B78700';
  ctx.shadowBlur = 60;
  noFill()
  stroke(255)
  strokeWeight(4)

  // ctx.fillStyle = 'blue';
  ellipse(0,0,220)
  pop()
}


// another version without shadow
// let img;
// var x = 0;
// let value = 1;
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   img = loadImage('assets/cover.jpg'); // Load the image
//   // audio = createAudio('assets/song2.mp3')
//   // audio.autoplay(true);
// }
//
// function draw() {
//
//   // if(value === 1){
//   //   audio.setVolume(0);
//   // }
//   // else{
//   //   audio.setVolume(1);
//   // }
//
//   // Displays the image at its actual size at point (0,0)
//   // Displays the image at point (0, height/2) at half size
//   background(255,255,255,1);
//   translate(width / 2, height / 2);
//   x+=0.02
//   for (let i = 0;i<3;i++){
//     if (value === 1) {
//     rotate(i/2 + frameCount/200)
//     imageMode(CENTER);
//     image(img, 0, 0, img.width / 6, img.height / 6);}
//   }
//
//   noFill();
//   stroke("#404040");
//   strokeWeight(60)
//   ellipse(0,0,160)
//
//
// //circles
//   noFill()
//   stroke(240)
//   strokeWeight(1)
//   for (let i = 0; i<8;i+=1){
//     ellipse(0,0,205-i*14)
//   }
//
// }

function mouseClicked (){
  if (value === 1){
    document.getElementById("my-audio").pause();
    value = 0;
  }else{
    document.getElementById("my-audio").play();
    value = 1
  }
}
