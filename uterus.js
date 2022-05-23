let bigHearts = [];
let fr = 5;

function setup() {
  createCanvas(400,400);
  for (let i = 0; i < 10; i++) {
  let x = random(width * 0.0925, width * 0.075);
  let y = random(height * 0.095, height * 0.075);
  PinkHearts[i] = new hearts(x, y);

  frameRate(fr);
  clr = color("pink");
  noStroke();
}
}

function uterusGraphic() {
  background(255, 0, 116);
  for (let i = 0; i < 3; i++) {
    PinkHearts[i].display();
    PinkHearts[i].move();
  }
}

class hearts {
   constructor(xpos, ypos) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.t = int(random(45));
    this.s = random(-1, 1);
  }

  display() {

    push();
    translate(this.xpos, this.ypos);
    rotate(this.t);
    let c = color("pink");
    fill(c);
    noStroke();

    textSize(35);
    text('Save Roe v. Wade', 200, 200);

    pop();
  }

  move() {
    this.t = this.t + this.s}

}
