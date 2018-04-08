var screensaver = document.getElementById("screensaverContainer");

setTimeout(function(){ screensaver.style.display = "block" }, 15000);

screensaver.addEventListener('mouseover', function() { screensaver.style.display = "none";setTimeout(function(){ screensaver.style.display = "block" }, 10000); });



