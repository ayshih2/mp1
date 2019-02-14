window.onscroll = function() {scrollFunction()};

function offset(el) {
    var rect = el.getBoundingClientRect();
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function scrollFunction() {
	var homeDiv = document.getElementById("home_page");
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

