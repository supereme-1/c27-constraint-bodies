class Chain{
    constructor(bodyA,bodyB){
        var options = {
        stiffness:0.3,
        length : 10,
        bodyA : bodyA,
        bodyB:bodyB
         }
         this.chain =  Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        strokeWeight(4);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}