function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width,
    windowWidth = getWidth();



window.scrollTo((windowWidth - screenWidth)/2,0);