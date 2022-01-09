img = "";
status1 = "";

function preload(){
    img = loadImage("background.jpg");
}

function draw()
{
   fill("#ff0000");
   image(img, 0 , 0 , 640 , 420);
   text("Book" , 45, 75);
   noFill();
   stroke("#ff0000");
   rect(30,60,450,350);
}

function setup(){
   canvas = createCanvas(640, 420);
   canvas.center();

   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting objectes";
}

function modelLoaded(){
   console.log("Model Loaded");
   status1 = true;
   objectDetector.detect(img, gotResults);
}

function gotResults(error,results){
if(error){
    console.log(error);
}
else{
   console.log(results);
}
}

function Next(){
    console.log("Next");
    window.location = "book.html";

}