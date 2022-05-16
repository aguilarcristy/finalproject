
let sel;
var button;
let mode = 0;
var myFont;

function preload(){
  myFont = loadFont('DMSans-Regular.ttf');
//    img = loadImage (uterus = "coverimage.png");

}

function setup() {
  createCanvas(1920, 1080);
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
      //uterusGraphic();
      fill(255);
      textSize(45);
      text('Press any key to continue', 400, 500);
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
  textSize(50);
  textAlign(CENTER);
  text('January 22nd, 1973...', 250, 200);

  textSize(30);
  text('The Supreme Court of the United States of America protects the right of a woman to have abortions...', 725, 300);

  text('Abortions, however, are not for women, but for people who have a uterus.', 530, 400);


}

function scene2() {
  background(238, 0, 108);

  fill(255, 255, 255);
  sel = createSelect();
  sel.position(900, 500);
  sel.option('Contraceptive failure');
  sel.option('Rape');
  sel.option('Incest');
  sel.option('Fetal anomalies');
  sel.option('Illness during pregnancy');
  sel.option('Contraceptive failure');
  sel.option('Unwanted pregnacy');
  sel.option('Risk of complicated birth');
  sel.selected('View reasons');

  textSize(70);
  textAlign(CENTER);
  text('Bodily autonomy:', 300, 80);
  textSize(40);
  textWrap(WORD);
  text('The need for abortions. See why abortions are necessary.', 400, 400, 900 );

}

function scene3() {
  background(255, 7, 169);

  fill(255, 255, 255);
  textSize(70);
  textAlign(CENTER);
  text('No Abortions = Unsafe Abortions', 950, 100);

  textSize(40);
textWrap(WORD);
text('Banning abortions does not mean abortions will stop. People will continue to seek them, but they will no longer be safe, medical procedures.', 400, 250, 900);
}

function scene4() {
  background(251, 0, 190);

  fill(255, 255, 255);
  textSize(70);
  textAlign(CENTER);
  text('How can YOU help?', 350, 100);
  textSize(30);
  text('Click on the link below to contact your representatives', 420, 200);
  textSize(50);
  text('www.house.gov/representatives/find-your-representative', 700, 420);
}
