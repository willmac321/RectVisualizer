function RectObj(offSet){
  this.rotation= .523599; //0.523599 is 30 deg
  this.h=10;
  this.offset=offSet;
  this.rectCount=this.offset*8;
  rectMode(CENTER);
  this.angle=this.offset/.000030;

    this.show = function(){
      //for (let z=0;z<width/(w);z++){

      if (this.offset===0){
          this.makeBoxes(0,0);
      }
      //this.makeBoxes(0,80);
      for(let p=-this.rectCount/2;p<this.rectCount/2+1;p++){

      let x =(sqrt(2*pow(w*this.offset,2))*cos(Math.PI*2/p));
      let z =(sqrt(2*pow(w*this.offset,2))*sin(Math.PI*2/p));

        this.makeBoxes(x,z);
      }
    };

    this.makeBoxes=function(x,z){
      fill(255);
      push();
      //rotateZ(this.rotation);
      rotateX(radians(90));//this.rotation);
    //  rotateY(this.rotation);
      translate(x,0,z);
      //this.angle+=Math.PI/100;

      this.calcH();
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
      this.angle+=Math.PI*2/128;//this.offset*Math.PI*2/180;
    };
}
