
let soundtrack;

let button1, button2;

function preload(){
soundtrack = new Tone.Players({
  bell: "audio/Cowbell.mp3",
  popcorn: "audio/popcorn.mp3"
}).toDestination();
}

function setup() {
  createCanvas(400, 400);
  
  button1 = createButton("cowbell");
  button1.position(100,100);
  button1.mousePressed(playBell);
  button2 = createButton("popcorn");
  button2.position(100,300);
  button2.mousePressed(playPop);
}

function draw() {
  background(220);
}

function playBell(){
  soundtrack.player("bell").start();
}

function playPop(){
  soundtrack.player("popcorn").start();
}




function keyPressed(){
  if(keyCode === 13){
     soundtrack.player("bell").start();
     }
  
  if(keyCode === 32){
     soundtrack.player("popcorn").start();
  }
}