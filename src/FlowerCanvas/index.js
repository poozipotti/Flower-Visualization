import React, { Component } from 'react';
const sentiment = require('sentiment');
//this is an array of the colors that a flower could be, the first being very negative and the last very
//positive
const colors = [
    "#ff3030","#ff6430","#ff9e30","#ffc130","#ffd530", //negative
    "#d4d4d4", //netural
    "#94ff30","#30ff4f","#30ffc4","#30dcff","#3037ff"];//positive

class FlowerCanvas extends Component {

   constructor(props){
        super(props);
        this.updateCanvas = this.updateCanvas.bind(this);
   }
   drawFlower(x,y,width,height,curveWeight,number,color,context){
        var TO_RADIANS = Math.PI/180;
       context.translate(x,y); 
        context.fillStyle= "#00FF00";
        context.fillRect(-5,0,(400-y)*.015,800-y);
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
  sentimentToFlower(sentimentAnalysis,context){
      let color =(colors[Math.round(sentimentAnalysis.comparative)+5]); 
      let number =Math.round(sentimentAnalysis.tokens.length/4)+3;
      console.log(`number = ${number}`);
      let curve = sentimentAnalysis.words.length/sentimentAnalysis.tokens.length;
      console.log(`curve = ${curve}`);
      this.drawFlower(400,150,120,30,curve,number,color,context);
  }
  updateCanvas(){
    if(this.props.textValue){
        let sentimentAnalysis = sentiment(this.props.textValue);
        var context = this.refs.canvas.getContext('2d');
        context.clearRect(0,0,this.refs.canvas.width,this.refs.canvas.height);
        this.sentimentToFlower(sentimentAnalysis,context);
    }
  } 
  componentDidMount(){
    if(this.props.textValue){
        this.updateCanvas();
    }
  }
  componentDidUpdate(){
    if(this.props.textValue){
        this.updateCanvas();
    }
  }
  render() {
    let sentimentAnalysis = sentiment(this.props.textValue);
    return (
        <div className="row">
            <div className="col-12 text-center mt-5">
               <h2>Garden</h2>
            </div>
            <div className="col-12 mt-5">
               <h3>text input</h3>
            </div>
            <div className="col-4">
               <p>Text: {this.props.textValue.toString()}</p>
            </div>
            <div className="col-4">
                <p>Sentiment: {sentimentAnalysis.comparative}</p>
            </div>
            <div className="col-12">
                <canvas ref="canvas" width={1600} height={400}/>
            </div>            
        </div>
    );
  }
}


export default FlowerCanvas;
