
img = "";
status1 = "";
objects = [];

function preload(){
    img = loadImage('clock.jpg');
   }

  function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objectes";
 }
 

   function draw()
   {
      image(img, 0 , 0 , 640 , 420);

      
if(status1 != ""){
    console.log(objects.length);
    for (i= 0; i < objects.length; i++) {
     
       document.getElementById("status").innerHTML = "Status : Objetct Detected";

       fill("#ff0000");
       percent = floor(objects[i].confidence*100);
       text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
       noFill();
       stroke("#FF0000");
       rect(objects[i].x-15,objects[i].y,objects[i].width,objects[i].height);
        
    
    }
}
else{
    console.log("else");
}
    
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
       objects = results;
   }
   }



function Next(){
    window.location = "dog_cat.html";
}
