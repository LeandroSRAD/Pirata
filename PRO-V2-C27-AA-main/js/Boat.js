class Boat {
  constructor(x, y, width, height, boatPos,boatAnimation) {
  
    
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;

    this.boatPosition = boatPos;
    this.boatAnimation = boatAnimation;
    this.speed = 0.1;
    this.IsBroken = false;
    World.add(world, this.body);
  }
  animate(){
    this.speed = this.speed+0.1;
  }

  remove(index) {
    this.boatAnimation = brokenBoatAnimation;
    this.speed = 0.1;
    this.width = 300;
    this.height = 300;
    this.IsBroken = true;
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      delete boats[index];
    }, 2000);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed%this.boatAnimation.length);
  

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.boatAnimation[index],0, this.boatPosition, this.width, this.height);
    pop();
  }
}
