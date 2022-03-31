let refuse;
let reuse; 
let reduce; 
let recycle;
let straw;
let waterbottle;

function preload(){
  refuse = loadImage('refuse.png');
  reuse = loadImage('reuse.png');
  reduce = loadImage('reduce.png');
  recycle = loadImage('recycle.png');
  straw = loadImage('straw.png');
  waterbottle = loadImage('waterbottle.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}

function draw() {
background('rgba(1,78,184,0.2)');
  image(refuse, random(0, windowWidth), random(0, windowWidth));
  image(reuse, random(0,windowWidth),random(0, windowWidth));
  image(reduce, random(0,windowWidth),random(0, windowWidth));       image(recycle,random(0,windowWidth),random(0, windowWidth));
  image(straw, random(0,windowWidth),random(0, windowWidth));       image(waterbottle,random(0,windowWidth),random(0, windowWidth));
}