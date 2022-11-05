const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const stopBtn = document.getElementById('stop');

const proContainer = document.getElementById('progress-container');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progressEl = document.getElementById('progress');

const songs = [
  {
    name: 'jacinto-1',
    displayName: 'Some song',
    artist: 'Some Artist',
  },
  {
    name: 'jacinto-2',
    displayName: 'Some song',
    artist: 'Some Artist',
  },
  {
    name: 'jacinto-3',
    displayName: 'Some song',
    artist: 'Some Artist',
  },
  {
    name: 'metric-1',
    displayName: 'Some song',
    artist: 'Some Artist',
  },
];

// Check if playing
let isPlaying = false;

// Play
function playMusic() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

function pauseMusic() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}
function stopMusic() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  loadSongs(songs[songIndex]);
  progress.style.width = 0;
  currentTimeEl.textContent = '0:00';
}

// Play or Pause
playBtn.addEventListener('click', () =>
  isPlaying ? pauseMusic() : playMusic()
);

// Update DOM
function loadSongs(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Song tracker
let songIndex = 0;

// Next song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
    // stopMusic();
    // playMusic();
  }
  loadSongs(songs[songIndex]);
  playMusic();
}
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = 0;
  }
  loadSongs(songs[songIndex]);
  playMusic();
}

// OnLoad - Select the first song
loadSongs(songs[songIndex]);

// Progress bar
function updateProgressBar(e) {
  if (isPlaying) {
    // Update the width of the progress bar
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // Calculate display for progress
    const progressMinutes = Math.floor(currentTime / 60);
    let progressSeconds = Math.floor(currentTime % 60);
    if (progressSeconds < 10) {
      progressSeconds = `0${progressSeconds}`;
    }
    if (progressSeconds) {
      currentTimeEl.textContent = `${progressMinutes}:${progressSeconds}`;
    }
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
  }
}
// Set progress bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

// Event listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
stopBtn.addEventListener('click', stopMusic);
music.addEventListener('timeupdate', updateProgressBar);
music.addEventListener('ended', nextSong);
proContainer.addEventListener('click', setProgressBar);
