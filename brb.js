function random(max)
{
	return Math.floor(Math.random() * max);
}

var canvasWidth = 640;
var canvasHeight = 360;
var w = 102;
var h = 13;

var x = random(canvasWidth - w - 1);
var y = random(canvasHeight - h - 1); // < ^ the '- 1' is important, otherwise the image could potentially go in a straight line instead of diagonally
var timestamp = function() { return Date.now(); }
var fps=60;
var interval;
var now, elapsed;
var brb = new Image(w, h);
var canvas;
var ctx;
function init()
{
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  brb.src = "brb.png";
  interval=1000/fps;
  then=Date.now();
  startTime=then;
  draw(timestamp());
}



var xspeed = 1;
var yspeed = 1;



function draw(timestamp) {
  now = Date.now();
  
  elapsed = now - then;
  
  if(elapsed > interval)
  {
	  
	  then = now - (elapsed % interval);
	  
	  ctx.fillStyle = 'rgba(255,255,0,0.0)';
	  ctx.clearRect(0,0,canvasWidth,canvasHeight); // clear canvas
	  ctx.save();
	  
	  x += xspeed;
	  y += yspeed;
	  if((x + w) >= canvasWidth || x <= 0)
	  {
		xspeed = -xspeed;
	  }

	  if((y + h) >= canvasHeight || y <= 0)
	  {
		yspeed = -yspeed;
	  }
	  ctx.drawImage(brb, x, y, w, h);
	  ctx.save();
	  ctx.restore();
   }
   window.requestAnimationFrame(draw);
  
}

document.addEventListener("DOMContentLoaded", (event) => { init(); });