'use strict'

function search(input, target) {
  
  let a = 0;
  for(var i = 0; i<input.length;i++){
    
    if(input[i] == target){
      a++;
      return i;
    }
  }
  if(a == 0){
      return -1;
    }
  // return  input.indexOf(target);  // Remove this line and change to your own algorithm
}

module.exports = search
