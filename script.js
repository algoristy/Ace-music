console.log("Welcome to Ace Music")


let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif= document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songitems= Array.from(document.getElementsByClassName('songitem'));

let songs =[
    {songName: "Bahut Nede", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Guju Patakha", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Mainu Ishq Laga", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Neat", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Sabki Baaratein Aayi", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Dil Le Gayi", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ik Geda Gidde Vich Hor", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Laung Da Lashkara", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Shirt da button", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Sochan Vich Tu", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songitems.forEach((element, i)=>{
   element.getElementsByTagName("img")[0].src =songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime =myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songIndex+1}.mp3`;   
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity = 1;
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');


    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`; 
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
      audioElement.play();
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`; 
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
      audioElement.play();
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
})
