let video = document.getElementsByClassName("my_video")[0];
let video2 = document.getElementsByID("vido33")[0];

function play() {
  video2.muted == true;
}
function pause() {
  video.pause();
}
function stop() {
  video.pause();

  video.currentTime = 0;
  // o métodocurrentTime controla time tempo do video;
}
function dec() {
  video.playbackRate -= 0.1;
  // o método playbackRate controla a aceleração do video;
}
function inc() {
  video.playbackRate += 0.1;
  // o método playbackRate controla a aceleração do video;
}
function retroceder() {
  video.currentTime -= 10;
  // o métodocurrentTime controla time line do video;
}
function avancar() {
  video.currentTime += 10;
  // o métodocurrentTime controla time line do video;
}
