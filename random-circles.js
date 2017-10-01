function setup() { 
	  background(0);
	createCanvas(400, 400);
noStroke();
}


function draw() { 
	var h = random(360)
   background(255);
  colorMode(HSB);
  fill(h, 100, 100);
  ellipse(width/2, height/2, 100, 100);
  h = h + 5;
  
  if (h >= 360) {
    h = 0;
  }
}
