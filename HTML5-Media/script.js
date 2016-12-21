function audioJuke(){
var songPlay=document.querySelector(".audio-jb");

songPlay.addEventListener('click',function(e){
var songPlaying = document.querySelector("#currentPlaying");


if(songPlaying)
{
	
	if(songPlaying.getAttribute("src")===e.target.getAttribute("data-src"))
	{


if (songPlaying.paused)
{
songPlaying.play();
e.target.id="playing";

}
else
{
songPlaying.pause();
e.target.id="paused";
}
}

else
{
	songPlaying.src=e.target.getAttribute("data-src");
	songPlaying.play();
	if(document.getElementById("playing")){
	document.getElementById("playing").setAttribute("id","");
	}	
	else{
	document.getElementById("paused").setAttribute("id","");	
	}
	e.target.id="playing";

}
}

else
{	


var audioPlayer =document.createElement('audio');
audioPlayer.id="currentPlaying";
e.target.id="playing";
audioPlayer.src=e.target.getAttribute("data-src");
document.body.appendChild(audioPlayer);
audioPlayer.play();

audioPlayer.addEventListener('ended',function()
{
audioPlayer.parentNode.removeChild(audioPlayer);
e.target.id="";

},false);	

}

},false);
};

function videoPlayer()
{

	
	
var video = document.getElementById("videoPlay");
document.getElementById("play_pause").addEventListener("click",function(e){

	var video = document.getElementById("videoPlay");
	if(video.paused)
	{
		video.play();
		e.target.innerText="Pause";
	}
	else
	{
		video.pause();
		e.target.innerText="Play";
	}
},false);

video.addEventListener("timeupdate",function(){
	var timeElapsedPerc=(this.currentTime/this.duration)*100;
	document.getElementById("progress").setAttribute("style","width :"+timeElapsedPerc +"%");
},false);

video.addEventListener("progress",function(){
	loadProgress();
},false);

video.addEventListener("loadeddata",function(){
	loadProgress();
},false);

video.addEventListener("canplaythrough",function(){
	loadProgress();
},false);

video.addEventListener("playing",function(){
	loadProgress();
},false);

video.addEventListener("timeupdate",function()
{
	document.getElementById("currentTime").innerText=setTime(this.currentTime);
	document.getElementById("totalTime").innerText=setTime(this.duration);
},false);

};


function loadProgress()
{
	var video = document.getElementById("videoPlay");
	if(video.buffered.length>0)
	{
	var loadPerc= (video.buffered.end(0)/video.duration)*100;
	document.getElementById("loadStatus").setAttribute("style","width :"+loadPerc +"%");
	};
};

function setTime(time){
var seconds= Math.round(time);
var minutes =Math.floor(seconds/60);
seconds=Math.floor(seconds%60);

minutes=(minutes>10)?minutes:'0'+minutes;
seconds=(seconds>10)?seconds:'0'+seconds;

return minutes+":"+seconds;
}
window.onload =function()
{
	videoPlayer();
	audioJuke();
}