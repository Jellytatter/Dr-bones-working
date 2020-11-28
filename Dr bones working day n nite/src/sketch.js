var fade;
var fadeAmount = 1
let img;

function setup() {
  createCanvas(400, 400);
  fade = 0 
  img = loadImage('../assets/drbones.png');
}

function draw() {
  background(255, 255, 100);
  image(img, 85, 200, 200, 200);
  textSize(32);
  text('working',  mouseX, mouseY);
  fill(0, 0, 0, fade)
  rect (0, 0, 400, 400)
  
  if (fade<30) fadeAmount=1;
  if (fade>220) fadeAmount=-1; 
 
  fade += fadeAmount;
}