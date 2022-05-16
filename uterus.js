let img;
let bigHearts = [];


function uterusGraphic() {
  background(255, 0, 116);
  for (let i = 0; i < 3; i++) {
    bigHearts[i].display();
    bigHearts[i].move();
  }
}

class hearts {
  constructor(xpos) {
  }

  display() {
    push();
    translate(this.xpos);
    translate(p5.Vector.fromAngle(millis() / 800, 10));

    //fill(255);
    //textSize(25);
  //  text("fighting for our rights!", 10, 50);

    image(img, 0, 0);
    pop();
  }

  move() {
    this.t = this.t + this.s;
  }
}
