class Obstacle {
 
  constructor() {
    this.h = int(random(125, 200));
    this.w = 20;
    this.x = width;
    this.y = randint = int(random(0, 350));
  }
  
  move() {
   this.x -= 10;
  //   if(score == 20){
  //    this.x -= 11;
  //     this.gravity -= 6.2;
  //   }
  //   if(score == 40){
  //     this.x -= 12;
  //     this.gravity -= 6.4;
  //   }
  //   if(score == 60){
  //     this.x -= 13;
  //     this.gravity -= 6.6;
  //   }
  //   if(score == 80){
  //     this.x -= 14;
  //     this.gravity -= 6.8;
  //   }
  //   if(score == 100){
  //     this.x -= 15;
  //     this.gravity -= 7;
  //   }
  //   if(score == 125){
  //     this.x -= 17;
  //     this.gravity -= 7.3;
  //   }
  //   if(score == 150){
  //     this.x -= 20;
  //     this.gravity -= 7.5;
  //   }
  //   if(score == 200){
  //     this.x -= 25;
  //     this.gravity -= 8;
  //   }
   }
  show() {
    rect(this.x, this.y, this.w, this.h);
  }
}
