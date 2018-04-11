var screensaver = document.getElementById("screensaverContainer"),
    screen = document.getElementById("screen"),
    tutorial = document.getElementById("screenTutorial");

setTimeout(function(){ screensaver.style.display = "block"; }, 30000);

screensaver.addEventListener('mouseover', function() { screensaver.style.display = "none";});

screen.addEventListener('mouseout', function() { setTimeout(function(){ screensaver.style.display = "block"; }, 10000); });



