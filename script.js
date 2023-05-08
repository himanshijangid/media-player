const img = document.querySelector("img");
const audio = document.querySelector("audio");
const playy = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const songs = [{
    audio: "audio/audio01.mp3",
    img : "img/image01.jpg"
},
{
    audio: "audio/audio02.mp3",
    img : "img/image02.jpg"
},
{
    audio: "audio/audio03.mp3",
    img : "img/image03.jpg"
}]

const loadSong = (songs) => {
    audio.textContent = songs.audio;
    img.textContent = songs.img;
}

loadSong(songs[1]);



let isPlaying = false;

const playAudio = () => {
    isPlaying = true;
    audio.play();
    playy.className.replace("fa-play", "fa-pause");
};

const pauseAudio = () => {
    isPlaying = false;
    audio.pause();
    playy.className.replace("fa-pause", "fa-play");
};

play.addEventListener("click",() => {
    if(isPlaying){
        pauseAudio();

    }else{
        playAudio();
    }
})







