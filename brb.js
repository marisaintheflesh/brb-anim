function random(max)
{
	return Math.floor(Math.random() * max);
}

var ww;
var hh; 
var w = 102;
var h = 13;

var x = 1;
var y = 1;
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
  canvas.width = 640;
  canvas.height = 360;
  ww = canvas.width = canvas.offsetWidth;
  hh = canvas.height = canvas.offsetHeight;
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
	  ctx.clearRect(0,0,ww,hh); // clear canvas
	  ctx.save();
	  
	  x += xspeed;
	  y += yspeed;
	  if((x + w) >= ww || x <= 0)
	  {
		xspeed = -xspeed;
	  }

	  if((y + h) >= hh || y <= 0)
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