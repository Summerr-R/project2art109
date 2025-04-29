
let song = document.querySelector("#song");
let playBtn = document.querySelector("#play-button");
let pauseBtn = document.querySelector("#pause-button")

playBtn.addEventListener('click', function () {
    song.play();
})
song.onloadeddata = function(){
    playBtn.style.visibility = "visible";
}

pauseBtn.addEventListener('click', function (){
    song.pause();
})

song.volume = .7;

const audio = document.getElementById('myAudio');

// Function to start or resume playback
function playAudio() {
  if (audio.paused) {
    audio.play();
  }
}

// Function to pause the audio
function pauseAudio() {
  audio.pause();
}

// Event listener to resume playback when the page is shown
window.addEventListener('pageshow', playAudio);

// Event listener to pause playback when the page is hidden
window.addEventListener('pagehide', pauseAudio);

// Optional: Add a play/pause button
const playButton = document.getElementById('playButton');
if (playButton) {
  playButton.addEventListener('click', () => {
    if (audio.paused) {
      playAudio();
      playButton.textContent = 'Pause';
    } else {
      pauseAudio();
      playButton.textContent = 'Play';
    }
  });
}

