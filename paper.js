class Paper {
    constructor(x,y,radius){
        var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
     }
this.body= Bodies.circle(x,y,30,options);
World.add(world,this.body);
};

display(){
var pos=this.body.position;
pos.x=100;
pos.y=645;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
circle(0,0,30);
pop();
}
}