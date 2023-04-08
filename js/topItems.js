import {random} from './main.js';


//for the top showslide item
let topItem = document.querySelector(".topItems")
//left and right button
const buttonleft  = document.querySelector(".button-left").addEventListener('click',() =>{
  plusDivs(-1)
})
const buttonRight = document.querySelector(".button-right").addEventListener('click', () => {
    plusDivs(1)
})

//random(container its stored in,
//cssNumber,
//number of times you want to run it,
//description constraints
//title constraints

//the random items
random(topItem, 1, 5,200,30)

//for the buttons to scroll the slde
function plusDivs(direction){
    let width = topItem.offsetWidth
   // console.log("width"+width )
    //console.log("full width" + topItem.offsetWidth)
    //console.log(topItem.scrollLeft);
   if (direction == 1){
       if (topItem.scrollLeft == 0) {
        topItem.scrollLeft = width*2;
       }else{
           topItem.scrollLeft -= 1778;
        
       }
        
   }
   else if (direction == -1){
       if (topItem.scrollLeft >= width*2) {
            
           topItem.scrollLeft =  0;
       } else {
           topItem.scrollLeft += 1778;

       }
   }
}


setInterval(function () { plusDivs(-1)}, 8000);