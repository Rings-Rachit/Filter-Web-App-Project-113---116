noseX=0;
noseY=0;

function preload()
{
     loadImage('https://i.postimg.cc/vT8cxMXH/download.png');
}

function setup()
{
     canvas = createCanvas(300,300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300,300);
     video.hide();

     poseNet= ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
     console.log("PoseNet has been Initialized!");
}

function draw()
{
 image(video,noseX,noseY,30,30);
}

function takesnapshot()
{
 save('myfilterimage.png');
}

function gotPoses(results)
{
     if(results.length >0)
     {
          console.log(results);
          noseX=results[0].pose.nose.x-15;
          noseY=results[0].pose.nose.y-15;
          console.log("Nose x is = " +noseX);
          console.log("Nose y is = " +noseY);
          
     }
}
