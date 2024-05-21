var playlist = [
    { title: "The Beatles - Yellow Submarine", src: "../audio/The Beatles - Yellow Submarine.mp3", albumArt: "../images/The Beatles - Yellow Submarine.jpg" },
    { title: "Leehom Wang - 唯一", src: "../audio/Leehom Wang - 唯一.mp3", albumArt: "../images/Leehom Wang - 唯一.jpg" },
    { title: "Elvis Presley - Can't Help Falling In Love (Official Audio)", src: "../audio/Elvis Presley - Can't Help Falling In Love (Official Audio).mp3", albumArt: "../images/Elvis Presley - Can't Help Falling In Love (Official Audio).png" },
    { title: "Bob Dylan - Don't Think Twice, It's All Right (Official Audio)", src: "../audio/Bob Dylan - Don't Think Twice, It's All Right (Official Audio).mp3", albumArt: "../images/Bob Dylan - Don't Think Twice, It's All Right (Official Audio).jpeg" },
    { title: "Billy Joel - Piano Man (Official HD Video)", src: "../audio/Billy Joel - Piano Man (Official HD Video).mp3", albumArt: "../images/Billy Joel - Piano Man (Official HD Video).jpeg" },
    { title: "Abba - Dancing Queen (Official Music Video Remastered)", src: "../audio/Abba - Dancing Queen (Official Music Video Remastered).mp3", albumArt: "../images/Abba - Dancing Queen (Official Music Video Remastered).jpeg" }
];

var currentTrack = 0;
var sound;

function changeTrack(trackIndex) {
    if (sound) {
        sound.unload();
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

function setupTrack(trackIndex) {
    document.getElementById('track').textContent = "Ready to play: " + playlist[trackIndex].title;
    document.getElementById('albumArt').src = playlist[trackIndex].albumArt;
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    changeTrack(currentTrack);
}

function prevTrack() {
    currentTrack = (currentTrack + playlist.length - 1) % playlist.length;
    changeTrack(currentTrack);
}

document.addEventListener('DOMContentLoaded', function() {
    setupTrack(currentTrack); 

    document.getElementById('playPauseBtn').addEventListener('click', function() {
        if (sound && sound.playing()) {
            sound.pause();
        } else if (sound) {
            sound.play();
        } else {
            changeTrack(currentTrack);
        }
    });

    document.getElementById('prevBtn').addEventListener('click', prevTrack);
    document.getElementById('nextBtn').addEventListener('click', nextTrack);
});
