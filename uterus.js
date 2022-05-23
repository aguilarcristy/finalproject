let img;
let bigHearts = [];


function uterusGraphic() {
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


    image(img, 10, 10);
    pop();
  }

  move() {
    this.t = this.t + this.s;
  }
}
