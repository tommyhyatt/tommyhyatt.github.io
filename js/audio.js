var ambience = document.getElementById('ambience');

function toggle() {
  return ambience.paused ? ambience.play() : ambience.pause();
};