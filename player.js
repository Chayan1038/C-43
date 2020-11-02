class Player{
    constructor(x,y,width,height){
        var options = {
            'friction':1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        //add image 
        World.add(world,this.body);
    }
    Display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop;
    }
}