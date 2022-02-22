Nose_X = 0;
Nose_Y = 0;

function preload(){
mustache = loadImage("https://i.postimg.cc/JhrLNQbv/mustache.png");
}

function setup(){
canvas= createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', GotPoses);
}

function draw(){
  image(video,0,0,300,300);
  image(mustache, Nose_X, Nose_Y, 45, 45)
}

function take_snapshot(){
save("filter_selfie.png");
}

function modelLoaded(){
    console.log("Model Loaded :)")
    }
    
    function GotPoses(results){
    
      if( results.length > 0){
        console.log(results);
        Nose_X = results[0].pose.nose.x - 22;
        Nose_Y = results[0].pose.nose.y - 15;
        console.log("The X Position of Nose = "+ Nose_X );
        console.log("The Y Position of Nose = "+ Nose_Y );
      }
        
    }

