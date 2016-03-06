//Toggles dropdown menu on mobile devices
document.getElementById("menuLink").onclick=function() {
    if (document.getElementById("navMenu").style.display=="none") {
    	document.getElementById("navMenu").style.display="block";
    } else {
    	document.getElementById("navMenu").style.display="none";
    	};
	};
/*Hack-n-smash fix for a bug where the menu disappears for large screens if menu button is pressed on small screen and then window is resized. Code taken from http://www.sitepoint.com/javascript-media-queries/ */
if (matchMedia) { //Watches to see if the window size changes
	var mq = window.matchMedia("(min-width: 826px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
};
// When the window size changes, it checks to see...
function WidthChange(mq) {
	//Is it the size of the desktop/laptop styles?
	if (mq.matches) {
		//ensures the menu is displayed
 	    document.getElementById("navMenu").style.display="block";
	} else {
		document.getElementById("navMenu").style.display="none";
	};
};