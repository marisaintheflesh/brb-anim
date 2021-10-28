function random(max)
{
	return Math.floor(Math.random() * max);
}

var ww = 300;
var hh = 150; 
var w = 102;
var h = 13;

var x = 1;
var y = 1;

var fps=24;
var interval;
var now, elapsed;
var brb = new Image(w, h);

function init()
{
  brb.src = "brb.png";
  interval=1000/fps;
  then=Date.now();
  startTime=then;
  draw();
}



var xspeed = 1;
var yspeed = 1;



function draw() {
  window.requestAnimationFrame(draw);
  
  now = Date.now();
  
  elapsed = now - then;
  
  if(elapsed > interval)
  {
	  
	  then = now - (elapsed % interval);
	  
	  
	  var ctx = document.getElementById('canvas').getContext('2d');
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
  
}

window.onload = function(){init()};