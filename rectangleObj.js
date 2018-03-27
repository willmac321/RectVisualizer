function RectObj(offSet){
  this.angle=0;
  this.h=10;
  this.offset=offSet+1;
  rectMode(CENTER);

    this.show = function(){
      fill(255);
      if (this.offset%2===0){
        rect(this.offset*w,0,this.offset*w,this.h);
      }
      else{
        rect(-this.offset*w,0,this.offset*w,this.h);
      }

    };


    this.update = function(){

       this.h = map(sin(this.angle),-1,1,1,100);
       this.angle+=.1+this.offset/1000;

    };
}
