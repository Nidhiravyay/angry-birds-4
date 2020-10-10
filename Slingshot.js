class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           push();
            if(pointA.x<220){
           strokeWeight(7);
           stroke(48,22,8);
           line(225,50,this.sling.bodyA.position.x-20,this.sling.bodyA.position.y);
           line(190,50,this.sling.bodyA.position.x-20,this.sling.bodyA.position.y);
           image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
           else{
            strokeWeight(3);
            stroke(48,22,8);
            line(225,50,this.sling.bodyA.position.x+25,this.sling.bodyA.position.y);
            line(190,50,this.sling.bodyA.position.x+25,this.sling.bodyA.position.y);
            image(this.sling3,pointA.x+25,pointA.y-10,15,30);
             }
            pop();       
        }
      image(this.sling1,200,20)
      image(this.sling2,170,20);
      
    
    }
    
}