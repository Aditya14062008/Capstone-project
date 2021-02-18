class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 150
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        if(this.sling.bodyA) {
        var pA = this.sling.bodyA.position;
        var pB = this.pointB;
        strokeWeight(4);
        line(pA.x, pA.y, pB.x, pB.y);
        }
    }
    
}

