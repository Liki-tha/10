function setup(){
    video = createCapture(VIDEO);
    video.size(300,300);
    canvas = createCanvas(500,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
   
}

noseX= 0;
noseY= 0;
leftwristX= 0;
rightwristX= 0;
diffrence= 0;




function draw() {
   background('#fae');
   document.getElementById("square_side").innerHTML = "The height and width of the text = " + diffrence + "px";
   fill(132, 28, 213);
   stroke(167, 73, 240);
   text("Likitha",noseX,noseY)
   textSize(diffrence)
   
}
function modelLoaded(){
    console.log("Posenet is initialized !")
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX= "+noseX + "and noseY= " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX= results[0].pose.rightWrist.x;
        diffrence = floor(leftwristX - rightwristX);
        console.log("rightwristX= "+rightwristX + "and leftwristX= " + leftwristX + "and difference = " + diffrence);
    }
}

