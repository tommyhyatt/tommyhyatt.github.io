function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width,
    windowWidth = getWidth(),
    screenHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height,
    windowHeight = getHeight();



window.scrollTo((windowWidth - screenWidth)/2,(windowHeight - screenHeight)/2);