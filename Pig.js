class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //This code means the visiblity of the pig, which is 255. That means it will be visible to us
    this.Visiblity = 255;
  }

 display(){

  //We are checking the speed of the pig using console.log();

   console.log(this.body.speed);

   //If the bird's speed is more than 3, it should be removed from the world
   if(this.body.speed < 3){
    super.display();
   }
   else{

    //The bird will be removed by this code
     World.remove(world, this.body);

     //We use push and pop because to apply the function on pig only, not all the code
     push();

     //Now, when the bird will hit the pig, it will be removed very quickly and we dont want that so we are 
     //writting this code. This code will help us to remove the pig in animated way
     // and here this.Visiblity-5 is written because to remove it in a slower way
     //This is written inside the display function, so it will be removed -5 when every frame runs
     this.Visiblity = this.Visiblity - 5;

     //Now here when the pig is removed from the world, we will add a image of pig instead of that object and we
     //will set the position of that pig image to the position of the pig, and it will also disappear in an animated 
     //way. This happens because of the "tint();"
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }



};