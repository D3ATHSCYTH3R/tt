o=[];
s="";
baby=document.getElementById("bd");
function preload(){
    b=loadAudio('2.mp3');
}
function setup(){
    canvas=createCanvas(480,460);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,460);
    video.hide();
    c=ml5.objectDetector('cocossd', o);
    document.getElementById("status").innerHTML="PROGRESS : DETECTING";
}
function o(){
    console.log("good");
    s="true";
    c.detect(video, gotResults)
}
function draw(){
    image(video ,0,0, 480,460);

    if(s != ""){
        for(i=0; i<o.length; i++){
            document.getElementById("status").innerHTML="STATUS = OBJECT DETCTED";
            document.getElementById("bd").innerHTML="BABY IS DETECTED";


        }
    }
    else{
        document.getElementById("status").innerHTML="STATUS = OBJECT NOT DETCTED";
        document.getElementById("bd").innerHTML="BABY IS NOT DETECTED";
    }
    if(baby="BABY IS DETECTED"){
        b.play();
    }
}
function stop(){
    b.stop();
}