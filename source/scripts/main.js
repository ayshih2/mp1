function changeActive(target) {
  var current = document.getElementsByClassName('active');
  /* since there should only be one active link at one time */
  current[0].classList.remove('active');
  document.getElementById(target).className += ' active';
}

/* Format for onclick listeners https://stackoverflow.com/questions/20726557/ */
document.addEventListener('DOMContentLoaded', function() {
	// code for navbar
	document.getElementById('ari-bttn').addEventListener('click', function(){ changeActive("ari-bttn"); }, false);
	document.getElementById('bp-bttn').addEventListener('click', function(){ changeActive("bp-bttn"); }, false);
	document.getElementById('billie-bttn').addEventListener('click', function(){ changeActive("billie-bttn"); }, false);

	// code for modal
	var modal = document.getElementById('ari-modal');
	document.getElementById('tracklist-bttn').addEventListener('click', function() { 
		modal.style.display = "block"; 
		document.documentElement.style.overflow = 'hidden';
   	document.body.scroll = "no";
 	}, false);
	document.getElementsByClassName("close")[0].addEventListener('click', function(){ 
		modal.style.display = "none"; 
		document.documentElement.style.overflow = 'scroll';
 		document.body.scroll = "yes";
	}, false);

	// for carosusel
	document.getElementsByClassName('prev')[0].addEventListener('click', function(){ changeSlide(-1); }, false);
	document.getElementsByClassName('next')[0].addEventListener('click', function(){ changeSlide(1); }, false);
	window.addEventListener('click', function(event) {
		if (event.target == modal) {
    	modal.style.display = "none";
    	document.documentElement.style.overflow = 'scroll';
 			document.body.scroll = "yes";
  	}
	});

	// to make sure position indicator updates when window is resized
	window.addEventListener("resize", positionIndicator);

	// for caroseul https://www.w3schools.com/howto/howto_js_slideshow.asp
	var slideIdx = 1;
	showSlides(slideIdx);
	
	// go to next/prev slide
	function changeSlide(n) {
  	showSlides(slideIdx += n);
	}

	function showSlides(n) {
  	var slides = document.getElementsByClassName("slides");
  	if (n > slides.length) {
  		slideIdx = 1;
  	} 
  	if (n < 1) {
  		slideIdx = slides.length;
  	}
  	for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  	}

  	// show slide
  	slides[slideIdx - 1].style.display = "block"; 
	}
}, false);

/* To check whether navbar should be fixed and resized based on scroll */
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	// fix navbar to top after passing header
	if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) {
			document.getElementById("navbar").className = "fixed-to-top";
  } else {
  	document.getElementById("navbar").className = "";
  }

  // shrink/expand navbar
	if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
	    document.getElementById("navbar").style.padding = "10px 0px";
	    var links = document.getElementsByClassName("link");
    	for (var i = 0; i < links.length; i++) {
    		links[i].style.fontSize= "1.7vw";
    	}
  } else {
    document.getElementById("navbar").style.padding = "25px 0px";
    var links = document.getElementsByClassName("link");
    for (var i = 0; i < links.length; i++) {
    	links[i].style.fontSize= "2.3vw";
    }
  }

  // update active link
  positionIndicator();
}

/* Change active links based on scroll direction and what part of website you're on */
var scrollPos = 0;
function positionIndicator() {
	/* credit to https://codepen.io/lehollandaisvolant/pen/ryrrGx 
   * Need scroll direction so that the active link doesn't prematurely change
   */
  var scrollDir = "";
	// adding scroll event
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
		scrollDir = "up";
  }
	else {
		scrollDir = "down";
	}
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;

	/* changing active states based on scroll position. outline: https://stackoverflow.com/questions/40409717/*/
  var ari = document.querySelector('#ari-page');
  var billie = document.querySelector('#billie-page');
  var bp = document.querySelector('#bp-page');

  if (scrollDir === "down") {
  	if (ari.getBoundingClientRect().top <= 0) {
  		changeActive("ari-bttn");
  	}
  	if (ari.getBoundingClientRect().bottom <= 0) {
  		// should change active state to billie section
  		changeActive("billie-bttn");
  	}
  	if (billie.getBoundingClientRect().bottom <= 0) {
  		changeActive("bp-bttn");
  	}
  } else {
  	// was scrolling up
  	if (billie.getBoundingClientRect().top > 0) {
  		changeActive("billie-bttn");
  	}
  	if (ari.getBoundingClientRect().top > 0) {
  		changeActive("ari-bttn");
  	}
  }
}




