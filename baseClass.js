class BaseClass{
    //constructor will be automatically called when an object is using this class
    //create class properties-physics body
    //this keyword refers to the object that is been created
    constructor(x,y,w,h){
        var options ={
            restitution:0.5,
            friction:0.6 
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(myWorld,this.body);
        this.width=w;
        this.height=h;
        this.img=loadImage("sprites/base.png");
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
         
        image (this.img,0,0,this.width,this.height);
       pop();
    }
}