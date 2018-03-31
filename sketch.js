
var w=80;
var r=[];
var canv;
var test;

function setup() {
  canv=createCanvas(400,400,WEBGL);
  ortho(-width, width, height, -height, -width*height, width*height);
  //test=new RectObj(0);
  r.push(new RectObj(0));
  for(let i=0;i<width/(w);i++){
    if(i!=0 ){
      r.push(new RectObj(i));
    }
  }
}

function draw(){
  background(51);
  // test.update();
  // test.show();
  //translate(width/2,0,0);
  for(let i=0;i<r.length;i++){
    r[i].update();
    r[i].show();
  }
}
