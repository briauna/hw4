 x= 0
y =0
while (x<width) {
  var h = random(360)
	stroke(h, 50, 90);
	fill(h, 50, 100);
   var y2=10;
  rect(x,y,73,75);
  x=x+75;
}
var y=0;
while (y<76) {
  stroke(0,255,255);
  line(0,y,width,y);
  y=y+10;
}
x= 0
y =77
while (x<width) {
  var h = random(360)
	stroke(h, 50, 90);
	fill(h, 50, 100);
  rect(x,y,86,85);
  x=x+88;
}
 var x=0;
while (x<width) {
  stroke(0,255,255);
  line(x,75,x,160);
  x=x+20;
}
  var h = random(360)
	stroke(h, 50, 90);
	fill(h, 50, 100);
  rect(0,162,400,200);
 
 var y=160;
while (y<height) {
  stroke(0,255,255);
  line(0,y,width,y);
  y=y+5;
}
