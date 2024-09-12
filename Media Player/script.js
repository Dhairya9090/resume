var arr = [
    {Songname:"Circle", url:"./Songs/Post_Malone-Circles.mp3",img:"./Images/post.jpg",time:"4:00"},
    {Songname:"295", url:"./Songs/295_ Sidhu Moose Wala .mp3",img:"./Images/Sidhu.jpg",time:"4:32"},
    {Songname:"Bachke Bachke", url:"./Songs/Bachke Bachke .mp3",img:"./Images/karan.jpg",time:"4:43"},
    {Songname:"Reminder", url:"./Songs/The Weeknd - Reminder.mp3",img:"./Images/weekend.jpg",time:"4:40"},
    {Songname:"Brown Munde", url:"./Songs/BROWN MUNDE - AP DHILLON .mp3",img:"./Images/ap.jpg",time:"4:14"}
]

var allSongs=document.querySelector("#List-song")
var poster= document.querySelector("#left")
var play= document.querySelector("#play")
var forward= document.querySelector("#forward")
var backward= document.querySelector("#backward")

var audio= new Audio()
var selectedSong=0;

function mainFunction(){
    var clutter=""
    arr.forEach(function(elem,index){
        clutter= clutter + `<div class="song-card" id=${index}>
        <div class="part1">
            <img src=${elem.img}>
         <h2>${elem.Songname}</h2>
        </div>
     <h5>${elem.time}</h5>
    </div>`
})
audio.src=arr[selectedSong].url
allSongs.innerHTML=clutter
poster.style.backgroundImage= `url(${arr[selectedSong].img})`
}
mainFunction()

allSongs.addEventListener("click",function(dets){
    selectedSong= dets.target.id
    play.innerHTML= `<i class="ri-pause-mini-fill"></i>`
    flag=1
    mainFunction()
    audio.play()
})

var flag= 0
play.addEventListener("click",function(){
    if(flag==0){
        play.innerHTML= `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag= 1
    }else{
        play.innerHTML= `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause
        flag= 0
    }
})
forward.addEventListener("click",function(){
    if(selectedSong< arr.length -1){
        selectedSong++
        mainFunction()
        audio.play()
        play.innerHTML= `<i class="ri-pause-mini-fill"></i>`
        flag=1
    }else{
        forward.style.opacity=0.4
    }   
})
backward.addEventListener("click",function(){
    if(selectedSong >= 0){
        selectedSong--
        mainFunction()
        audio.play()
        backward.style.opacity=100
    }else{
        backward.style.opacity=0.4
    }   
})

