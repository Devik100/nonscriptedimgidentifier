risalts = []
function setup() {
    console.log("setup setup");
    ObjectDetector = ml5.objectDetector("cocossd", modelLoaded);
    console.log("setup setup setup");
}
function draw() {
    console.log(risalts)
    if(risalts.length > 0) {
        console.log(risalts.length)
        for(let i = 0; i < risalts.length; i++) {
            label = risalts[i].label;
            x = risalts[i].x;
            y = risalts[i].y;
            w = risalts[i].width;
            h = risalts[i].height;
            console.log(label + " " + x + " " + y + " " + w + " " + h)
            noFill()
            stroke(225, 0, 0)
            rect(risalts[i].x, risalts[i].y, risalts[i].width, risalts[i].height)
            noStroke()
            fill(255, 0, 0)
            textSize(25)
            text(risalts[i].label, risalts[i].x, risalts[i].y)
        }
    }
}
function preload() {
    img = loadImage("../images/IMG20230804103637.jpg")
}
function modelLoaded() {
    console.log("The model has been loaded in the past");
    status_1=true;
    ObjectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        risalts=results;
    }
}
