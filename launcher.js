class Launcher{

    constructor(body1,point2){
      var options={
       bodyA :body1,
       pointB:point2,
       stiffness:0.004,
       length:1
      }
       this.launcher = Constraint.create(options);
       this.pointB = point2; 
       World.add(world,this.launcher)

      
    }

      attach(body){
      this.launcher.bodyA = body;
      }
      fly(){
      this.launcher.bodyA = null;
      }

      display(){
       if(this.launcher.bodyA != null){
       var pointA = this.launcher.bodyA.position;
       var point2 = this.launcher.pointB;
       line(pointA.x,pointA.y,point2.x,point2.y);
       }
      }

}