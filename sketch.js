
var w=80;
var r=[];
var canv;
var test;
var res;
function setup() {
  canv=createCanvas(400,400,WEBGL);
  ortho(-width*1.5, width*1.5, height*1.5, -height*1.5, -width*height, width*height);
  //test=new RectObj(0);
//  r.push(new RectObj(0));
  //for(let i=0;i<width/(w*4);i++){
    //if(i!=0 ){
    res=floor(width/(w*1.5));
    for(let x=-res;x<=res;x++){
      for(let y=-res; y<=res;y++){

        //if(x!=0 || y!=0){
          r.push(new RectObj(x,y));
        //}
        //else if(x===0 && y===0){
          //r.push(new RectObj(0,0));
        //}
      }
    }

    //}
  //}
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
