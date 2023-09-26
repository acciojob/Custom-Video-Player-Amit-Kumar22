// Get references to elements
const video = document.getElementById("player__video viewer");
const playPauseButton = document.getElementById("player__button toggle");
const progress = document.querySelector(".progress__filled");
const volumeSlider = document.getElementById("player__slider");
const speedSlider = document.getElementById("speed");
const skipBackwardButton = document.getElementById("skip-backward");
const skipForwardButton = document.getElementById("skip-forward");

// Add event listeners
video.addEventListener("click", togglePlay);
playPauseButton.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", updateProgress);
volumeSlider.addEventListener("input", updateVolume);
speedSlider.addEventListener("input", updateSpeed);
skipBackwardButton.addEventListener("click", skipBackward);
skipForwardButton.addEventListener("click", skipForward);
progress.addEventListener("click", seek);

// Define functions for the event listeners
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    const icon = video.paused ? "Play" : "Pause";
    playPauseButton.textContent = icon;
}

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.width = `${percent}%`;
}

function updateVolume() {
    video.volume = volumeSlider.value;
}

function updateSpeed() {
    video.playbackRate = speedSlider.value;
}

function skipBackward() {
    video.currentTime -= 10; // Skip 10 seconds backward
}

function skipForward() {
    video.currentTime += 10; // Skip 10 seconds forward
}

function seek(e) {
    const seekTime = (e.offsetX / progress.clientWidth) * video.duration;
    video.currentTime = seekTime;
}

// Additional functionality can be added based on your requirements.
