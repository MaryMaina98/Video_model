//Pick the Elements using the DOM

const video = document.querySelector('#video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Add event Listeners

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeUpdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);

//
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

//update play/pause icon
function updatePlayIcon(){
   if(video.paused){
       play.innerHTML ='<i class ="fa fa-play"></i>';
   }else {
       play.innerHTML = '<i class ="fa fa-pause"></i>';
   }
}

//Update progress and timeStamp
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100 //express in in terms of percentage

    //get the minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' + String(mins);
    }
    console.log(video.currentTime);

    //Get the seconds
    let seconds = Math.floor(video.currentTime / 60);
    if(seconds < 10){
        seconds = '0' + String(seconds);
    }

    timestamp.innerHTML = `${mins}: ${secs}`;

}

//Set video time to progress
function setVideoProgress(){
    video.currentTime =(+ progress.value * video.duration)/100;
}

//stop Video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}