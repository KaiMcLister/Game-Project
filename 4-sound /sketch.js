//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;

let mySound1;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound1 = loadSound('bump1.mp3');
  mySound2 = loadSound('whoosh1.mp3');
}


function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);


}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }
    if(Ball.hit > 10){
      Avatar.x = width/2
      Avatar.y = height/2
    }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke(0,0,0);
        strokeWeight(3);
    		fill(0,0,0);
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;

    }
    if (keyIsDown(LEFT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x -= this.speed;

    }
    if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x += this.speed;

    }
    if (this.x < 0){
      this.x = width/2
    }
    if (this.x > width){
      this.x = width/2
    }
    if (this.y < 0){
      this.y = height/2
    }
    if (this.y > height){
      this.y = height/2
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.hit = 0;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("red");
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
            this.hit = this.hit + 1
            mySound1.setVolume(0.1);
            mySound1.play();

    		}

  	}


}
