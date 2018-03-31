function RectObj(offSet){
  this.rotation= .523599; //0.523599 is 30 deg
  this.offset=offSet;
  this.rectCount=this.offset*8;
  rectMode(CENTER);
  if(this.offset>0){
    this.ang=2*Math.PI/this.rectCount;
    this.radius=w*this.offset*sqrt(2);//sqrt(2*pow(w*this.offset,2));
    this.x=this.radius*(cos(this.ang)/(abs(cos(this.ang))+abs(sin(this.ang))));
    this.z=this.radius*(sin(this.ang)/(abs(cos(this.ang))+abs(sin(this.ang))));
    this.d=dist(this.x,this.z,0,0);
    this.ofs=map(this.x,0,width/2,-1,1);
    this.angle=this.ofs;
  }else{
    this.x=0;
    this.z=0;
    this.d=0;
    this.ofs=0;
    this.radius=0;
    this.angle=0;
  }


    this.show = function(){

      if (this.offset===0){this.makeBoxes(0,0);}
      for(let x=-this.offset;x<=this.offset;x++){
        for(let y=-this.offset; y<=this.offset;y++){
          if(x!=0 || y!=0){
            this.makeBoxes(x,y);
          }
        }
      }
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

      this.calcH();
      this.incAngle();
    };

    this.calcH=function(){
      this.h = map(sin(this.angle),-1,1,0,100);
    };

    this.incAngle=function(){
      this.angle+=radians(5);
    };
}
