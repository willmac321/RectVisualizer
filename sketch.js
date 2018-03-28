
var w=80;
var r=[];
var canv;
var test;

function setup() {

  canv=createCanvas(400,400,WEBGL);
  ortho(-width, width+width/2, height*1.3, -height*1.3, -width*height, width*height*3);
  //test=new RectObj(0);
  for(let i=0;i<width/(w);i++){
    r.push(new RectObj(i));
  };
}

function draw(){
  background(51);
  // test.update();
  // test.show();
  //translate(width/2,0,0);
  //
  for(let i=0;i<r.length;i++){
    r[i].update();
    r[i].show();
  }


}
