class Player {
  constructor() {
    this.r = 50;
    this.s = 30;
    this.x = this.r;
    this.y = height - this.r;
    // this.vy = 0;
    this.gravity = 6;
  }

  swap() {
    this.gravity *= -1;
  }


  hits(obs) {
    return collideRectRect(this.x,this.y,this.r,this.r,obs.x,obs.y,obs.w,obs.h);
  }

  move() {
    this.y += this.gravity;
    // this.vy += this.gravity;
    // if (this.vy > this.y){
    //   this.vy = this.y;
    // }
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    rect(this.x, this.y, this.r, this.r);
  }
}