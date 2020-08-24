class Boy {
    constructor (x,y,width,height) {
        var options = {
          isStatic:true,
          restitution:0,
          friction:0,
          denisty:1.2,
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./Plucking mangoes/boy.png");
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER);
        fill("blue");
        stroke("white");
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}