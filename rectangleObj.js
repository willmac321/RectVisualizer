function RectObj(x,y){
  this.rotation= .523599; //0.523599 is 30 deg
  this.offset=Math.max(abs(x),abs(y));
  this.angle=0;
  rectMode(CENTER);

  this.calcAngle=function(x,y){
    //  this.d=0;
    this.rectCount=this.offset*8;
    this.ofs=0;
    if(x!=0 || y!=0){
      this.rectCount=1;
      this.ang=2*Math.PI/this.rectCount;
      this.radius=dist(x,y,0,0);
      this.ofs=(map(this.radius,0,this.offset/2,-1,1));
    }
    //*sqrt(2);//sqrt(2*pow(w*this.offset,2));
    //this.x=this.radius*(cos(this.ang)/(abs(cos(this.ang))+abs(sin(this.ang))));
    //this.z=this.radius*(sin(this.ang)/(abs(cos(this.ang))+abs(sin(this.ang))));
    //this.d=dist(this.x,this.z,0,0);

    //this.angle+=this.ofs;
  }

  this.show = function(){
    this.makeBoxes(x,y);
  }

  this.makeBoxes=function(x,y){
    fill(255);
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
    this.h = map(sin(this.angle+this.ofs),-1,1,1,100);
  };

  this.incAngle=function(){
    //this.calcAngle();
    this.angle+=radians(5);
  };
}
