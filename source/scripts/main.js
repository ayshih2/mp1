window.onscroll = function() {scrollFunction()};

function offset(el) {
    var rect = el.getBoundingClientRect();
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function scrollFunction() {
	var homeDiv = document.getElementById("ari_page");
	var offsetDiv = getPosition(homeDiv);
	/*alert(offsetDiv.x + " " + offsetDiv.y);*/

	// fix navbar to top after passing header
	if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) {
			document.getElementById("navbar").className = "fixed_to_top";
  } else {
  	document.getElementById("navbar").className = "";
  }

  // shrink/expand navbar
	if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
	    document.getElementById("navbar").style.padding = "10px 0px";
  } else {
    document.getElementById("navbar").style.padding = "25px 0px";
  }

}

/* potentially helpful http://codetheory.in/change-active-state-links-sticky-navigation-scroll/ */
/* Code credit: https://www.kirupa.com/html5/get_element_position_using_javascript.htm */
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
     var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
     var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
     xPos += (el.offsetLeft - xScroll + el.clientLeft);
     yPos += (el.offsetTop - yScroll + el.clientTop);
 
    el = el.offsetParent;
  }
  return { x: xPos, y: yPos };
}

function changeActive(target) {
  var current = document.getElementsByClassName('active');
  /* since there should only be one active link at one time */
  current[0].classList.remove('active');
  document.getElementById(target).className = 'active';
}

/* from https://stackoverflow.com/questions/20726557/ */
document.addEventListener('DOMContentLoaded', function() {
	// code for navbar
	document.getElementById('ariBttn').addEventListener('click', function(){ changeActive("ariBttn"); }, false);
	document.getElementById('bpBttn').addEventListener('click', function(){ changeActive("bpBttn"); }, false);
	document.getElementById('billieBttn').addEventListener('click', function(){ changeActive("billieBttn"); }, false);

	// code for modal
	var modal = document.getElementById('ariModal');
	document.getElementById('tracklistBttn').addEventListener('click', function() { modal.style.display = "block";}, false);
	document.getElementsByClassName("close")[0].addEventListener('click', function(){ modal.style.display = "none"; }, false);

	// for carosusel
	document.getElementsByClassName('prev')[0].addEventListener('click', function(){ changeSlide(-1); }, false);
	document.getElementsByClassName('next')[0].addEventListener('click', function(){ changeSlide(1); }, false);

	window.addEventListener('click', function(event) {
		if (event.target == modal) {
    	modal.style.display = "none";
  	}
	});

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



