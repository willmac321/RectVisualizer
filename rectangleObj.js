function RectObj(offSet){

  this.h=10;
  this.offset=offSet;
  rectMode(CENTER);
  this.angle=0;
    this.show = function(){
      fill(255);
      box(w);

     // if (this.offset%2===0){
     //    rect(this.offset*w,0,w,this.h);
     //  }
     //  else{
     //    rect(-this.offset*w,0,w,this.h);
     //  }

    };

    this.update = function(){
       this.h = map(sin(this.angle),-1,1,1,100);
       this.angle+=.1;
       rotateX(this.angle);
    };
}
