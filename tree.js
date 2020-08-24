class Tree{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true,
        }
        this.body = Bodies.rectangle(x, y, width, 400, options);
        this.width = 400;
        this.height = 400;
        this.image = loadImage("./Plucking mangoes/tree.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 200, 300, this.width, this.height);
        pop();
      }
} 