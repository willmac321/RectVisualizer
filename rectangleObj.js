function RectObj(offSet){
  this.rotation= .523599; //0.523599 is 30 deg
  this.h=10;
  this.offset=offSet;
  rectMode(CENTER);
    this.angle=this.offset/.000039;

    this.show = function(){
      //for (let z=0;z<width/(w);z++){


        for(let p=0;p<width/w;p++){
          for (let i=-1; i<2;i=i+2){
            if(this.offset===0){
                this.makeBoxes(0,i*p);

            }
            else{
                this.makeBoxes(i,i*p);

                this.makeBoxes(i,p);

                this.makeBoxes(i*i,i*p);

            }
          }
        }

  //  }
     // if (this.offset%2===0){
     //    rect(this.offset*w,0,w,this.h);
     //  }
     //  else{
     //    rect(-this.offset*w,0,w,this.h);
     //  }

    };
    this.makeBoxes=function(i,p){
      fill(255);
      push();
      //rotateZ(this.rotation);
      rotateX(this.rotation);
      rotateY(this.rotation);
//this.offset*w
      translate(w*this.offset*i,0,p*w);
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
      this.angle+=.1//this.offset*Math.PI*2/180;
    };
}
