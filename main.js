function preload()
{

}

function draw()
{
    background("grey");
    textSize(Distance_rounded);
fill("red");
text("Chloe", 150, 400);
}

PoseX=0;
PoseY=0;
leftWrist=0;
rightWrist=0;
Distance=0;
Distance_rounded=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(550,550);
    canvas.center;
    background("#495459");
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", getPoses);
   
}

function getPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    leftWrist=results[0].pose.leftWrist.x;
    rightWrist=results[0].pose.rightWrist.x;
    Distance=leftWrist-rightWrist;
    Distance_rounded=Math.floor(Distance);
    console.log(leftWrist);
    console.log(rightWrist);
    document.getElementById("font_size").innerHTML=Distance_rounded;
}
}

function modelLoaded()
{
    console.log("poseNet is loaded");
}