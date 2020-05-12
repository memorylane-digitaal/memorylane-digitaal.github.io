


var pSpeed=20;
var pageBackgroundColor="#F9E6BB"
var pageBorderColor="rgba(0,0,0,0)",pageBorderStyle="solid",pageBorderWidth="10";


var pWidth=document.getElementsByClassName('navbar')[0].offsetWidth*0.15;
var pHeight=document.getElementsByClassName('navbar')[0].offsetWidth*0.72*0.3;

ini();

currentVideo = 0
videoList = [
    './images/television/tele7.gif',
    './images/television/tele6.gif',
    './images/television/tele2.gif',
    './images/television/tele5.gif',
    './images/television/tele4.gif',
    './images/television/tele3.gif'
]
function switchVideo(){
    console.log('switching')
    document.getElementById('tv-source').src = './images/television/static.gif'
    
    currentVideo += 1
    if (currentVideo == videoList.length){ currentVideo = 0 }
    
    setTimeout(function() {
        document.getElementById('tv-source').src = videoList[currentVideo]
    }, 300);
}