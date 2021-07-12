class Snowflake{
    constructor(x, y) {
        var options = {
            friction: 0.05,
            density: 0.2
        }
        this.body = Matter.Bodies.circle(x, y, 50, options);
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display() {
        if(this.body){
        
          push();
          imageMode(CENTER);
          image(this.image, this.body.position.x, this.body.position.y);
          pop();
       
         }
      }
}
