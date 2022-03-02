//col array sum
let sum = 0;

//canvas vars
let canvas = document.getElementById('grid');
let ctx = canvas.getContext('2d');


//


function Run(){
     //Use the array figure out size of each line as the numbers relate to each other
     //run each col index thru percent calc, previous index are previous nums
let col = [2,1,4,3];

//dimensions of line
let maxHeight = 16;
let maxWidth = 500;

//store prior points
let lastPointX = 0;
let lastPointY = 0;
let newPointX = 0;
let newPointY = 0;

//calc sum
for(i = 0;i < col.length; i++){
    sum += col[i];
    
}


//apply sum to maxLength / macHeight
for(i = 0; i < col.length; i++){
    //draw initial point, calc new point draw repeat

    DrawTool(lastPointX,0,lastPointX,maxHeight);
    newPointX = lastPointX;
    lastPointX += percentCalc(lastPointX,sum);



}




}








//line dimensions
function DrawTool(_x,_y,_x2,_y2){
    console.log(_x+","+ _y + " "+_x2+","+_y2);
    




    //my extra - ignore for now
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
    //
    result = (preVal/sumVal) * 100;
    return result;
}

Run();






















