class enemy{
    constructor(x,y){
        var options = {
            'friction':1.0,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=50;
        this.height=50;
        World.add(world,this.body)
    }
    Display(){
        push();
        rectMode(CENTER)
        rect(x,y,this.width,this.height)
        pop;
    }
}