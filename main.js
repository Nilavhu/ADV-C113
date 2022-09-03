function preload(){

}
function takesnapshot(){
    save("myframedselfie.png");

}
function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();
}
function draw(){
    image(video,50,50,400,300);
    fill("lightblue");
    circle(0,0,100);
    circle(500,400,100);
    circle(500,0,100);
    circle(0,400,100);
}