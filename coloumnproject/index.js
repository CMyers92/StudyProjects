//col array sum
let sum = 0;

//canvas vars
let canvas = document.getElementById('grid');
let ctx = canvas.getContext('2d');



function Run(){
     //Use the array figure out size of each coloumn as the numbers relate to each other
let col = [2,1,4,3];

//dimensions of box
let maxHeight = 16;
let maxWidth = 500;

//store prior points
let lastPointX = 0;
let lastPointY = 0;

//calculate sum
for (let i = 0; i < col.length; i++){
    sum += col[i];
   
}
console.log("Sum: " + sum);



}

//line dimensions
function DrawTool(_x,_y,_x2,_y2){
    console.log(_x+","+ _y + " "+_x2+","+_y2);
    
    //just going to actually draw lines cause fuck it
    ctx.beginPath();
    ctx.moveTo(_x, _y); //startpoint - drawTool x & y ?   
    ctx.lineTo(_x2,_y2);//End Point - drawTool x2 & y2 ?
    ctx.stroke();
    //draw x,y text
    ctx.font = '10px comic-sans';
    ctx.fillText("(" + _x + " , " + _y + ")",_x + 5,_y + 20);
    ctx.fillText("(" + _x2 + " , " + _y2 + ")",_x2 + 5,_y2);
}



//percentage calculator
function percentCalc(preVal, sumVal){
    result = (preVal/sumVal) * sum;
    return result;
}

//forgot what I was planning here
function percentIndexCal(index,perc){
    result = (index)
}

//cuz fuck it
function DrawLine(spx,spy,epx,epy){
    //spx = startpointx,spy = startpointY,epx = endpointX, epy = endpointY
    ctx.beginPath();
    ctx.moveTo(spx, spy); //startpoint - drawTool x & y ?
    ctx.lineTo(epx,epy);//End Point - drawTool x2 & y2 ?
    ctx.stroke();
    //draw x,y text
    ctx.font = '10px comic-sans';
    ctx.fillText("(" + spx + " , " + spy + ")",spx + 5,spy + 20);
    ctx.fillText("(" + epx + " , " + epy + ")",epx + 5,epy);
} 


Run();






















