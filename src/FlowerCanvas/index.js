import React, { Component } from 'react';

class FlowerCanvas extends Component {
    drawFlower(x,y,width,height,curveWeight,number,color,context){
        var TO_RADIANS = Math.PI/180;
       context.translate(x,y); 
        context.fillStyle= "#00FF00";
        context.fillRect(-5,0,(800-y)*.015,800-y);
        var rotation = 0;    
       for(var i=0; i<number; i++){
           context.fillStyle = color;
            //console.log(i*(360/number));
            context.beginPath();
            context.moveTo(0,0);
            context.quadraticCurveTo(curveWeight*width,height,width,0);
            context.moveTo(0,0);
            context.quadraticCurveTo(curveWeight*width,-1*height,width,0);
            context.fill();
            context.rotate(TO_RADIANS * (360/number));
        } 
        context.rotate(TO_RADIANS*(360-((360/number)*i)));
        context.fillStyle= "yellow";
        context.beginPath(); 
        context.arc(0,0,10,0,2*Math.PI);
        context.fill();
       context.translate(-x,-y); 


  }
  updateCanvas(){
    var context = this.refs.canvas.getContext('2d');
    var numberOfFlowers = 10;
    //console.log(numberOfFlowers);
    //for testing
    for(var j=0;j<numberOfFlowers;j++){
        var yPos = 600-(Math.random()*400);
        //minimum width is 50 max is 300
        var maxNumber = 20;
        var number = Math.floor(2 + (Math.random() * (maxNumber-2)));
        if(number>15){
            var height =  8*(1+maxNumber-number);
        }else{
            var height =  3*(1+maxNumber-number);
        }
        var width = 50 + (100*Math.random());
        var curve = Math.random();
        var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16); 
        this.drawFlower((1200/numberOfFlowers*(j+1)),yPos,width,height,curve,number,color,context);
    }
  } 
  componentDidMount(){
    this.updateCanvas();
  }
  render() {
       
    return (
        <div className="row">
            <div className="col-12 text-center mt-5">
               <h2>Garden</h2>
            </div>
            <div className="col-12">
                <canvas ref="canvas" width={1600} height={800}/>
            </div>            
        </div>
    );
  }
}


export default FlowerCanvas;
