function selectTimes(n) {

    artefactIndex = 1
    artefact(timeIndex += n, 1, 0);

}

function selectArtefacts(n) {

    artefact(timeIndex, artefactIndex += n, 0);

}

function videoPlay() {

    artefact(timeIndex, artefactIndex, 1);

}

function artefact(n, m, l) {

    var i;

    var times = document.getElementsByClassName("times");
    var artefacts = document.getElementsByClassName("artefacts");



    if (n > times.length) {
        timeIndex = 1;
    }

    if (n < 1) {
        timeIndex = times.length;
    }

    if (m > artefacts.length / 3) {
        artefactIndex = 1;
    }

    if (m < 1) {
        artefactIndex = artefacts.length / 3;
    }

    let x = (timeIndex - 1) * 5 + artefactIndex - 1;

    for (i = 0; i < artefacts.length; i++) {
        artefacts[i].style.display = "none";
    }

    artefacts[x].style.display = "block";

    for (i = 0; i < times.length; i++) {
        times[i].style.display = "none";
    }

    times[timeIndex - 1].style.display = "block";

    if (l == 1) {

        console.log(youtubeURL[x]);

        var playerCSS = document.getElementById("player");

        var controls = document.getElementById("controls");

        playerCSS.style.display = "flex";
        controls.style.display = "flex";

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                videoId: youtubeURL[x],
                playerVars: {
                    'enablejsapi': 1,
                    'playsinline': 1,
                    'cc_load_policy': 1,
                    'autoplay': 1,
                    'autohide': 1,
                    'fs': 0,
                    'controls': 0,
                    'rel': 0,
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });


        }

        onYouTubeIframeAPIReady();

        function onPlayerReady() {

            document.getElementById('playPause').onclick = function () {

                if (player.getPlayerState() == 1) {
                    player.pauseVideo();
                } else {
                    player.playVideo();
                }
            };
            
              if (player.isMuted) {
                player.unMute()
            }
            
          
            


            document.getElementById('reset').onclick = function () {
                var playerCSS = document.getElementById("player");
                playerCSS.style.display = "none";
                controls.style.display = "none";

                
                var node = document.getElementById('playerContainer');
                node.innerHTML = '<div id="player"></div>';
            };
        }

        function onPlayerStateChange() {
            
            

            player.setOption('captions', 'fontSize', 1);
            
            if (player.getPlayerState() == 1) {
                
                controls.style.display = "flex";
                
            }
            
            if (player.getPlayerState() == 0) {
                
                var playerCSS = document.getElementById("player");
                playerCSS.style.display = "none";
                controls.style.display = "none";

                
                var node = document.getElementById('playerContainer');
                node.innerHTML = '<div id="player"></div>';
                
            }


        }



    }

}

var boxinner = document.getElementsByClassName("boxinner");
var timePeriodBox = document.getElementById("timePeriodBox");
var artefactsBox = document.getElementById("artefactsBox");
var start = document.getElementById("start");
var info = document.getElementById("info");
var close = document.getElementById("close");
var infoBox = document.getElementById("infoBox");

function infoOpen() {
   
    timePeriodBox.style.display = "none";
    artefactsBox.style.display = "none";
    start.style.display = "none";
    info.style.display = "none";
    close.style.display = "flex";
    infoBox.style.display = "flex";
    
}

function infoClose() {
   
    timePeriodBox.style.display = "flex";
    artefactsBox.style.display = "flex";
    start.style.display = "flex";
    info.style.display = "flex";
    close.style.display = "none";
    infoBox.style.display = "none";
    
}

var youtubeURL = [
    "xu7ILZYsTjE",
    "z7U9TXiCDzc",
    "M_DoUUEgp3Y",
    ];

var x = 0;

var timeIndex = 1;
var artefactIndex = 1;
artefact(timeIndex, artefactIndex);