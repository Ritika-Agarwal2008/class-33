class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.02,
            length:10
        }
        this.sling=Constraint.create(options)
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position
            var pointB=this.sling.pointB
            push ()
            strokeWeight(3)
            stroke("#301608")
            if(pointA.x<220){
                strokeWeight(3)
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y) 
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y)
                image(this.sling3,pointA.x-25,pointA.y-15,15,30) 
            }
            else{
                strokeWeight(7)
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y) 
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y)
            image(this.sling3,pointA.x+25,pointA.y-15,15,30) 
            }
            
            pop ()
        }
       
    }
}