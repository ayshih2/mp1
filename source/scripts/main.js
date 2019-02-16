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


	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	    document.getElementById("navbar").style.padding = "10px 0px";
//    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "25px 0px";
//    document.getElementById("logo").style.fontSize = "35px";
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

/*document.addEventListener('click', function(event) {
	var modal = document.getElementById('ariModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}, false);*/


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

	window.addEventListener('click', function(event) {
		if (event.target == modal) {
    	modal.style.display = "none";
  	}
	});
}, false);


// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
	var modal = document.getElementById('ariModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/




