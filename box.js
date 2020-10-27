class Box extends BaseClass{
    //constructor will be automatically called when an object is using this class
    //create class properties-physics body
    //this keyword refers to the object that is been created
    constructor(x,y,w,h){
       super(x,y,w,h);
       this.img=loadImage("sprites/wood1.png");
    }
     
}