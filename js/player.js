// Track list with album art paths
var playlist = [
    { title: "The Beatles - Yellow Submarine", src: "audio/The Beatles - Yellow Submarine.mp3", albumArt: "images/The Beatles - Yellow Submarine.jpg" },
    { title: "Leehom Wang - 唯一", src: "audio/Leehom Wang - 唯一.mp3", albumArt: "images/Leehom Wang - 唯一.jpg" },
    { title: "Elvis Presley - Can't Help Falling In Love (Official Audio)", src: "audio/Elvis Presley - Can't Help Falling In Love (Official Audio).mp3", albumArt: "images/Elvis Presley - Can't Help Falling In Love (Official Audio).png" },
    { title: "Bob Dylan - Don't Think Twice, It's All Right (Official Audio)", src: "audio/Bob Dylan - Don't Think Twice, It's All Right (Official Audio).mp3", albumArt: "images/Bob Dylan - Don't Think Twice, It's All Right (Official Audio).jpeg" },
    { title: "Billy Joel - Piano Man (Official HD Video)", src: "audio/Billy Joel - Piano Man (Official HD Video).mp3", albumArt: "images/Billy Joel - Piano Man (Official HD Video).jpeg" },
    { title: "Abba - Dancing Queen (Official Music Video Remastered)", src: "audio/Abba - Dancing Queen (Official Music Video Remastered).mp3", albumArt: "images/Abba - Dancing Queen (Official Music Video Remastered).jpeg" }
];

var currentTrack = 0;
var sound;

// Function to change to a specific track
function changeTrack(trackIndex) {
    if (sound) {
        sound.unload(); // Unload and destroy the previous sound object
    }
    sound = new Howl({
        src: [playlist[trackIndex].src],
        html5: true,
        onplay: function() {
            document.getElementById('track').textContent = "Playing: " + playlist[trackIndex].title;
            document.getElementById('albumArt').src = playlist[trackIndex].albumArt;
        },
        onend: function() {
            nextTrack();
        }
    });
    sound.play();
}

// Function to set up the track details without playing it
function setupTrack(trackIndex) {
    document.getElementById('track').textContent = "Ready to play: " + playlist[trackIndex].title;
    document.getElementById('albumArt').src = playlist[trackIndex].albumArt;
}

// Function to play the next track
function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    changeTrack(currentTrack);
}

// Function to play the previous track
function prevTrack() {
    currentTrack = (currentTrack + playlist.length - 1) % playlist.length;
    changeTrack(currentTrack);
}

// Set up event listeners and the first track details when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    setupTrack(currentTrack); // Set up the first track's details on load

    document.getElementById('playPauseBtn').addEventListener('click', function() {
        if (sound && sound.playing()) {
            sound.pause();
        } else if (sound) {
            sound.play();
        } else {
            // If sound is not initialized, start playback
            changeTrack(currentTrack);
        }
    });

    document.getElementById('prevBtn').addEventListener('click', prevTrack);
    document.getElementById('nextBtn').addEventListener('click', nextTrack);
});
