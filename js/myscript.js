window.onload = function(){

  	console.log('READY')

	var arrows = document.getElementsByClassName('arrow')

	setInterval(function() {
	  Array.from(arrows).map(arrow => arrow.style.display = (arrow.style.display == 'none' ? '' : 'none'));
	}, 500);

	var hashtag = document.getElementsByClassName('hashtag')[0];

	const bottles_containers = document.querySelectorAll('#bottle_container');

	Array.from(bottles_containers).map(container => {
		new Array(80).fill(1).map(i => {

		var bottle = document.createElement('img');
	  	bottle.src = './images/plastic_bottle.png';
	  	// bottle.classList.add('random_bottles')
	  	bottle.style.position = 'absolute';
	  	bottle.style.width = 320 + 'px';
	  	bottle.style.top = getRandomInt(0, 1600) + 'px';
	  	bottle.style.left = getRandomInt(0, window.innerWidth) + 'px';
	  	bottle.style.transform = 'rotate(180deg)';
	  	bottle.style.transform = 'rotate(' + getRandomInt(0, 360) + 'deg)';

	  	bottle.addEventListener('mouseover', e => {
	  		e.target.style.display = 'none';
	  	}, false)

	  	container.appendChild(bottle);
	  	// document.getElementById('matter_bottles').appendChild(bottle);
	  })
	})


	document.addEventListener('scroll', e => {

		var currentMarginTop = 600;
		var scrollArea = 4200;

		var scrollTop = window.pageYOffset || window.scrollTop;
		var scrollPrecent = scrollTop/scrollArea || 0


		var hashtag = document.getElementsByClassName('hashtag')[0];

		hashtag.style.position = 'absoluite';
		// hashtag.style.marginTop = 20 + 'px';

		currentMarginTop = currentMarginTop - scrollPrecent * window.innerHeight;
		if (currentMarginTop > 50) {
			hashtag.style.marginTop = currentMarginTop - 5 + 'px';
		}

	}, false);





	// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below
var dots = [],
    mouse = {
      x: 0,
      y: 0
    };

// The Dot object used to scaffold the dots
var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};
// The Dot.prototype.draw() method sets the position of 
  // the object's <div> node
Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
    // draw() is called.
  var x = mouse.x,
      y = mouse.y;
  
  // This loop is where all the 90s magic happens
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;

  });
}

addEventListener("mousemove", function(event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();





// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("hashtag");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}















const speed = 5,
      fish = document.querySelector('.fish'),
      counter = document.querySelector('.counter');



  function change() {
      var elem = document.getElementById("box");
      if (elem.value == "Click Here To See A Very Special Message") {
          elem.value = "Click Again To Hide";
          elem.innerHTML = "Click Again To Hide"
      } else {
          elem.value = "Click Here To See A Very Special Message";
          elem.innerHTML = "Click Here To See A Very Special Message"
      }
  }

  let count = 0,
      vw = window.innerWidth * .97,
      vh = window.innerHeight * .97;

  function getAngle(cx, cy, ex, ey) {
      var dy = ey - cy;
      var dx = ex - cx;
      var theta = Math.atan2(dy, dx); // range [-PI, PI]
      theta *= 180 / Math.PI; // rads to degs, range [-180, 180]
      theta += 90; // set 0 as top, range [-90, 270]
      if (theta > 180) theta = theta - 360; // range [-180, 180]
      theta = Math.floor(theta);
      return theta;
  }

  function setPos(el, x, y) {
      // old coords
      const a = window.scrollX + el.getBoundingClientRect().left;
      const b = window.scrollY + el.getBoundingClientRect().top;
      // distance
      const ax = Math.abs(a - x);
      const by = Math.abs(b - y);
      const dur = Math.floor(Math.sqrt((ax * ax) + (by * by))) * speed;
      // set new coords
      el.style.left = x + 'px';
      el.style.top = y + 'px';
      // set duration
      el.style.transitionDuration = dur + 'ms';
      // set angle
      el.style.transform = 'rotate(' + getAngle(a, b, x, y) + 'deg)';
      setTimeout(function() {
          setRandomPos(el);
      }, dur);
  }

  function setRandomPos(el) {
      const randomX = Math.floor(Math.random() * vw);
      const randomY = Math.floor(Math.random() * vh);
      setPos(el, randomX, randomY);
  }

  function createFish() {
      const fishContainer = document.getElementById("moti_2");
      const fish = document.createElement('a');
      fish.setAttribute('href', '#');
      fish.className = 'fish';
      fish.textContent = '=';
      fish.style.filter = 'hue-rotate(' + Math.floor(Math.random() * 360) + 'deg)';
      fishContainer.appendChild(fish);
      setRandomPos(fish);
      fish.addEventListener('click', createFish);
      count++;
  }

  window.onresize = function() {
      vw = window.innerWidth * .97;
      vh = window.innerHeight * .97;
  }

  for (var i = 0; i < 20; i++) {
    createFish();
  }






























}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}


