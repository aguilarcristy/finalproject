

let mode = 0;
var myFont;

function preload(){
  myFont = loadFont('DMSans-Regular.ttf');
    img = loadImage (uterus = "uterus.png");

}

function setup() {
  createCanvas(1080, 720);
  textFont(myFont);

  for (let i = 0; i < 5; i++) {
    let x = translate(width * 1, width * 100);
    let y = translate(height * 1, height * 1);
    bigHearts[i] = new hearts(x, y);
  }

}

function draw() {

  switch (mode) {
    case 0:
      background(255,0,116);
      uterusGraphic();
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


}

function keyPressed() {
  mode++;
}

function scene1() {
  background(255, 0, 206);

  fill(255, 255, 255);
  textSize(60);
  textAlign(CENTER);
  text('The start of Roe v. Wade', 350, 80);

  fill(255, 255, 255);
  textSize(40);
  textAlign(CENTER);
  text('January 22nd, 1973...', 200, 200);

  textSize(20);
  text('The Supreme Court of the United States of America protects the right of a woman to have abortions...', 350, 300);


}

function scene2() {
  background(238, 0, 108);

  fill(255, 255, 255);
  textSize(70);
  textAlign(CENTER);
  text('Bodily autonomy:', 300, 80);

  textSize(20);
  text('The need for abortions', 150, 200);
}

function scene3() {
  background(255, 7, 169);

  fill(255, 255, 255);
  textSize(70);
  textAlign(CENTER);
  text('No Abortions = Unsafe Abortions', 550, 80);
}

function scene4() {
  background(251, 0, 190);

  fill(255, 255, 255);
  textSize(70);
  textAlign(CENTER);
  text('How can YOU help?', 330, 80);
  textSize(30);
  text('Click on the links below to contact your representatives', 400, 200);

}
