function adjustWebsiteWidthAndDisableXScroll() {
  var screenWidth = window.innerWidth;

  document.body.style.maxWidth = screenWidth + "px";
  document.documentElement.style.maxWidth = screenWidth + "px";

  document.body.style.overflowX = "hidden";
  document.documentElement.style.overflowX = "hidden";
}

adjustWebsiteWidthAndDisableXScroll();
