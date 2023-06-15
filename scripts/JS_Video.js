var video = document.getElementById("video");

// Pausar el video
function pausarVideo() {
  video.pause();
}

// Adelantar el video en 10 segundos
function adelantarVideo() {
  video.currentTime += 10;
}

function playVideo() {
    video.play();
  }

  function atrasarVideo() {
    video.currentTime -= 10;
  }