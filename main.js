song= "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
status ="";

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}    

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}


function draw()
{
    image(video, 0, 0 , 600, 500);

    document.getElementById("status").innerHTML = "Status = Song 1 Playing";
    document.getElementById("song").innerHTML = "Song is playing "+song;

    
    fill ("#FF0000");
    stroke ("#FF0000");

    circle(rightWristX,rightWristY,20);

    if(scoreLeftWrist > 0.2)
    {
    circle (leftWristX, leftWristY, 20);
    InNumberleftWristY = Number(leftWristY);
    stop(song2);
    }
    if(status != "");
    var song = new Audio('BadBoy.mp3')
    song.play()
    document.getElementById('heading').innerHTML = "Badboy by Tungevaag";

    if(scorerightWrist > 0.2)
    {
    circle (rightWristX, rightWristY, 20);
    InNumberrightWristY = Number(reftWristY);
    stop(song2);
    }
    if(status != "");
    var song = new Audio('ShellShocked.mp3')
    song.play()
    document.getElementById('heading').innerHTML = "ShellShocked by Juicy J, Wiz Khalifa, Ty Dolla $ign ";
}    

function preload()
{
    song = loadSound("BadBoy.mp3");
    song2 = loadSound("ShellShocked.mp3");
}

function play()
{
    song.play();
    song2.play();
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = "+ leftWristY );

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = "+ rightWristY );

    }
}
