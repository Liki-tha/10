function setup(){
    video = createCapture(VIDEO);
    video.size(300,300);
    canvas = createCanvas(500,500);
    canvas.position(560,120);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);  
    video.position(210,120)
}

function draw() {
   background(247, 220, 144);
}
function modelLoaded(){
    console.log("MODEL LOADED !")
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
    }
}
