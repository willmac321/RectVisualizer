function RectObj(x,y){
  this.rotation= .523599; //0.523599 is 30 deg
  this.offset=Math.max(abs(x),abs(y));
  this.angle=0;
  rectMode(CENTER);

  this.calcAngle=function(x,y){
    this.rectCount=this.offset*8;
    this.ofs=sin((this.rectCount)/(w*4));
    if(x!=0 || y!=0){
      this.ang=2*Math.PI/this.rectCount;
      this.radius=dist(x,y,0,0);
      this.ofs=(map(this.radius/(w*sin(this.ang)),0,this.ofs,-1,1));
    }
  }

  this.show = function(){
    this.makeBoxes(x,y);
  }

  this.makeBoxes=function(x,y){
    push();
    rotateX(this.rotation);
    rotateY(this.rotation);
    translate(x*w,0,y*w);
    normalMaterial();
    box(w,this.h,w);
    pop();
  };

  this.update = function(){
    this.calcAngle(x,y);
    this.incAngle();
    this.calcH();
  };

  this.calcH=function(){
    this.h = map(w*sin(this.angle+this.ofs),-w,w,1,150);
  };

  this.incAngle=function(){
    this.angle+=radians(5);
  };
}
