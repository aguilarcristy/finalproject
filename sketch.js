let mode = 0;
var myFont;

function preload(){
  myFont = loadFont('DMSans-Regular.ttf');
}

function setup() {
  createCanvas(1080, 720);
  textFont(myFont);
}

function draw() {


  switch (mode) {
    case 0:
      background(255,0,116);
      break;
    case 1:
      scene1();
      break;
    case 2:
      scene2();
      break;
    case 3:
      scene3();
      break;
    case 4:
      scene4();
      break;
    default:
      //
  }


  /*
  if (mode == 0) {
    // ready
  }
  else if (mode == 1) {
    scene1();
  }
  else if (mode == 2) {
    scene2();
  }
  else if (mode == 3) {
    scene3();
  }
  */
}

function keyPressed() {
  mode++;
}

function scene1() {
  background(255, 0, 206);

  fill(255, 255, 255);
  textSize(70);
  textAlign(CENTER);
  text('Screen 1', 300, 80);

}

function scene2() {
  background(238, 0, 108);

  fill(255, 255, 255);
  textSize(70);
  textAlign(CENTER);
  text('Screen 2', 300, 80);
}

function scene3() {
  background(255, 7, 169);

  fill(255, 255, 255);
  textSize(70);
  textAlign(CENTER);
  text('Screen 3', 300, 80);
}

function scene4() {
  background(251, 0, 190);

  fill(255, 255, 255);
  textSize(70);
  textAlign(CENTER);
  text('Screen 4', 300, 80);
}
