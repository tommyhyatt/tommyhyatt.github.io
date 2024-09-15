function zoomIn() {
    
    var zoom = document.getElementsByTagName('html')[0];
    var screenSaver = document.getElementById('screensaver');
   // zoom.style.fontSize = 'clamp(0px, 1.8vh, 25px)';
    setTimeout(() => {
                    zoom.style.fontSize = 'clamp(0px, 1.6vh, 25px)';
                }, 1500);
    
    setTimeout(() => {
                    screensaver.style.opacity = '0';
                }, 6000);
    
    setTimeout(() => {
                    screensaver.style.display = 'none';
                }, 7000);
    setTimeout(() => {
                    zoom.style.transition = 'unset';
                }, 7000);
}