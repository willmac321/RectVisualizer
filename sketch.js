
var w=10;
var r=[];
var canv;

function setup() {

  canv=createCanvas(400,400);


  for(let i=0;i<w*width/2;i++){
    r.push(new RectObj(i));
  };
}

function draw(){
  background(51);
translate(width/2,height/2);
  for(let i=0;i<r.length;i++){
    r[i].update();
    r[i].show();
  }


}
