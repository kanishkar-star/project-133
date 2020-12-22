function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    background("lightgreen")
stroke(0, 0, 0);
fill(66, 135, 245);
circle(50, 50, 80);

stroke(0, 0, 0);
fill(153, 144, 245);
rect(37, 87.5, 30, 350);

stroke(0, 0, 0);
fill(73, 245, 239);
circle(590, 50, 80);

stroke(0, 0, 0);
fill(255, 249, 161);
rect(580, 87.5, 30, 350);

stroke(0, 0, 0);
fill(66, 245, 81);
circle(590, 430, 80);

stroke(0, 0, 0);
fill(171, 249, 255);
rect(90, 420, 460, 30);

stroke(0, 0, 0);
fill(247, 126, 126); 
circle(50, 430, 80);

stroke(0, 0, 0);
fill(174, 255, 171);
rect(90, 35, 460, 30);

stroke(0, 0, 0);
fill(225, 0, 0);
ellipse(150, 150, 25, 75)

stroke(0, 0, 0);
fill(225, 0, 0);
ellipse(500, 300, 25, 65)

image(video, 195, 115, 250, 250);
}

function take_snapshot(){
    save('student_img.png')
}
