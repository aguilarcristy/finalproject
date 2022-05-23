let gameState = "0";
var myButton;
var myButton2;
var myButton3;
var myButton4;
var sel;

let mic;
let t;
let people;
let protest;
let hanger;

var saveRoevWade;

function preload () {
  // PEOPLE IMAGE
  people = loadImage('people.png');
  protest = loadImage('protest.png');
  hanger = loadImage('hanger.png');

  saveRoevWade = loadAnimation (
    "blank.png",
    "s.png",
    "s.png",
    "a.png",
    "a.png",
    "v.png",
    "v.png",
    "e.png",
    "e.png",
    "saveroevwade.png",
    "saveroevwade.png",
    "saveroevwade.png",
    "saveroevwade.png",
    "saveroevwade.png",

  );
}

function setup() {
  createCanvas(1500, 900);

  // Sel
  sel = createSelect();
  sel.position(300, 350);
  sel.option("Contraceptive failure");
  sel.option("Rape");
  sel.option("Incest");
  sel.option("Fetal anomalies");
  sel.option("Illness during pregnancy");
  sel.option("Contraceptive failure");
  sel.option("Unwanted pregnacy");
  sel.option("Risk of complicated birth");
  sel.selected("View reasons");
  sel.hide();

  // Scene 0 to 1 Button

  myButton = new Clickable();
  myButton.locate(1200, 600);
  myButton.width = 100;
  myButton.height = 40;
  myButton.color = "#ff8095";
  myButton.cornerRadius = 5;
  myButton.strokeWeight = 2;
  myButton.stroke = "#ff8095";
  myButton.text = "Next Page";
  myButton.textColor = "#000000";
  myButton.textSize = 12;
  myButton.textFont = "sans-serif";
  myButton.textScaled = false;

  myButton.onPress = function () {
    if (gameState === "0") {
      gameState = "1";
    }
  };

  myButton.onOutside = function () {
    myButton.color = "(255, 247, 189)";
  };
  myButton.onHover = function () {
    this.color = "#AAAAFF";
  };

  // Scene 1 to 2 Button

  myButton2 = new Clickable();
  myButton2.locate(1200, 600);
  myButton2.width = 100;
  myButton2.height = 40;
  myButton2.color = "#ff8095";
  myButton2.cornerRadius = 5;
  myButton2.strokeWeight = 2;
  myButton2.stroke = "#ff8095";
  myButton2.text = "Next Page";
  myButton2.textColor = "#000000";
  myButton2.textSize = 12;
  myButton2.textFont = "sans-serif";
  myButton2.textScaled = false;

  myButton2.onPress = function () {
    if (gameState === "1") {
      gameState = "2";
    }

  };
  myButton.onOutside = function () {
    myButton.color = "(255, 247, 189)";
  };
  myButton.onHover = function () {
    this.color = "#AAAAFF";
  };

  // Scene 2 to 3 Button

  myButton3 = new Clickable();
  myButton3.locate(1200, 600);
  myButton3.width = 100;
  myButton3.height = 40;
  myButton3.color = "#ff8095";
  myButton3.cornerRadius = 5;
  myButton3.strokeWeight = 2;
  myButton3.stroke = "#ff8095";
  myButton3.text = "Next Page";
  myButton3.textColor = "#000000";
  myButton3.textSize = 12;
  myButton3.textFont = "sans-serif";
  myButton3.textScaled = false;

  myButton3.onPress = function () {
    if (gameState === "2") {
      gameState = "3";
    }
  };

  // Scene 3 to 4

  myButton4 = new Clickable();
  myButton4.locate(1200, 600);
  myButton4.width = 100;
  myButton4.height = 40;
  myButton4.color = "#ff8095";
  myButton4.cornerRadius = 5;
  myButton4.strokeWeight = 2;
  myButton4.stroke = "#ff8095";
  myButton4.text = "Next Page";
  myButton4.textColor = "#000000";
  myButton4.textSize = 12;
  myButton4.textFont = "sans-serif";
  myButton4.textScaled = false;

  myButton4.onPress = function () {
    if (gameState === "3") {
      gameState = "4";
    }
  };

  // MICROPHONE
  mic = new p5.AudioIn();
  mic.start();


}

function draw() {
  background(255, 255, 255);

  switch (gameState) {
    case "0":
      scene0();
      break;
    case "1":
      scene1();
      break;
    case "2":
      scene2();
      break;
    case "3":
      scene3();
      break;
    case "4":
      scene4();
      break;
    default:
  }
}

function scene0() {
  background(255, 223, 232);

  fill(179, 90, 115);
  textSize(60);
  textAlign(CENTER);
  text("Welcome", 220, 80);
  myButton.draw();

  fill(255);
  noStroke();
  rect(100, 200, 900, 800, 10);



  animation(saveRoevWade, 480, 550);
}

function scene1() {
  background(255, 223, 232);

  fill(179, 90, 115);
  textSize(60);
  textAlign(CENTER);
  text("The start of Roe v. Wade", 350, 80);

  textSize(50);
  textAlign(CENTER);
  text("January 22nd, 1973...", 260, 200);

  textSize(30);
  textWrap(WORD);
  text('The Supreme Court of the United States of America ruled that pregnant people would, under the constitution, be able to exercise the right to have an abortion without the government intervening excessively.', 10, 300, 600);

  image(people, 600, 100);

  myButton2.draw();
}

function scene2() {
  background(255, 223, 232);

  fill(179, 90, 115);

  textSize(70);
  textAlign(CENTER);
  text("Bodily autonomy:", 300, 80);
  textSize(40);
  textWrap(WORD);
  text(
    "The need for abortions. See why abortions are necessary.",
    5,
    200,
    900
  );

  myButton3.draw();
  sel.show();

  image(protest, 900, 50);
}

function scene3() {
  background(255, 223, 232);

  fill(179, 90, 115);
  textSize(70);
  textAlign(CENTER);
  text("No Abortions = Unsafe Abortions", 850, 100);

  textSize(40);
  textWrap(WORD);
  text(
    "Banning abortions does not mean abortions will stop. People will continue to seek them, but they will no longer be safe, medical procedures.",
    400,
    250,
    900
  );
  myButton4.draw();
    sel.hide();

  image(hanger, 0, 80);

}

function scene4() {
  background(255, 223, 232);

  fill(179, 90, 115);
  textSize(70);
  textAlign(CENTER);
  text("How can YOU help?", 350, 100);
  textSize(30);
  text("Scroll down and click on the 'Resources' button!", 390, 200);
  textSize(50);
    sel.hide();
}
