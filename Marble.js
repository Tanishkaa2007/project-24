class Marble {
    constructor(x,y,r){
      var options ={
          restitution : 0.3,
          friction : 3,
          density : 1
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x,pos.y);
        strokeWeight(4)
        stroke('black')
        fill('red')
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r);
        pop();
    }
}