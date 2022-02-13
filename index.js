//Use the array figure out size of each coloumn as the numbers relate to each other

function Run(){
let col = [2,1,4,3];

//dimensions of box
let maxHeight = 16;
let maxWidth = 500;

//finding the sum to find each col value percent
let sum = 0;


//Keep track of last x coord
let lastPointX = 0;
//let lastPointY = 0;



//Calculate Sum / Percentage
for (let i = 0; i < col.length; i++) {
    sum += col[i];
    console.log("Sum:" + sum);
}
//getting perctage of each value of col in relation to the sum(redundant?)
/*
 for(let i = 0; i < col.length; i++){
    
    
    result = percent(col[i],sum);
    //console.log(result);

}*/
//imput decimal value into draw function, increase last value variables, repeat.
for(let i = 0; i < col.length; i++){
    
    //DrawTool(_x,_y,_x2,_y2)
    /*DrawTool(
        x = currentWidth
        y = currentHeight
        x2 = currentHeight + (col[i] sum)
        y2 = currentHeight
    )
      increase increaseLastValues based on currentWidth / sum
    */
   lastPointX += percent(col[i], sum); 
    DrawTool(lastPointX, maxHeight,);
}
}

//percentage calculator
function percent(parVal, totVal){
    result = (parVal / totVal) ;
   // console.log("%" + result*100);
    return result;
}



//box dimensions, fill in the blank
function DrawTool(_x,_y,_x2,_y2){
    console.log(_x+","+ _y + " "+_x2+","+_y2);
}


function increaseLastValues(curVal, newVal){
    result = curVal + newVal;
    return result;
}


Run();
