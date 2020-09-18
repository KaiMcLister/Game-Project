
//create an empty array called balls

let balls = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(255);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(random(0,800), random(0,400), random(10,100));
  balls.push(b);
  print(balls);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,size){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.size = size;

	}

	drawBall(){  // draw a ball on the screen at x,y
    		noStroke();
    		fill(random(0,270), random(0,270), random(0,270));
		    ellipse(this.x,this.y,this.size,this.size);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+random(-10,10);
		this.y = this.y+random(-5,5);
	}


}
