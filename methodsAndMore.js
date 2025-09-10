const decreaseBtn = document.getElementById("decreaseBtn"); 
const resetBtn = document.getElementById("resetBtn"); 
const increaseBtn = document.getElementById("increaseBtn"); 
const countLabel = document.getElementById("countLabel"); 

let count = 0; 

//increase function
increaseBtn.onclick = function(){
  count++; 
  countLabel.textContent = count; 
}

decreaseBtn.onclick = function(){
  count--; 
  countLabel.textContent = count; 
}

resetBtn.onclick = function(){
  count = 0; 
  countLabel.textContent = count; 
}

//math functions 
/*
let x = 3.21; 
let y = 2; 
let z; 

//z = Math.round(x); 
//z = Math.floor(x); 
//z = Math.ceil(x); 
//z = Math.trunc(x); 
//z = Math.pow(x,y); 
// z = Math.sqrt(x); 
z = Math.log(x); 
z = Math.sin(x); 
z = Math.cos(x); 
z = Math.tan(x); 
z = Math.abs(x); 
z = Math.sign(x); 

let max = Math.max(x,y,z); 
let min = Math.min(x,y,z); 


console.log(z);  
*/