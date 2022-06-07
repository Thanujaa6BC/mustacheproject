function preload() {

}

function setup() {
    canvas = createCanvas(400,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    posenet = ml5.poseNet(video, modalLoaded);
    posenet.on('pose',gotPoses);

}

function draw() {
    image(video, 0, 0, 400, 400);
}

function take_snapshot() {
save("mustache_tie_filter.png");
}

function modalLoaded() {
    console.log("PoseNet Initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose x position is" + results[0].pose.nose.x);
        console.log("nose y position is" + results[0].pose.nose.y);
    }
}