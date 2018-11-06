'use strict'

function sort(input) {
  let temp;
	for(let i = 0;i< input.length -1 ;i++ ){
		for (let j = i; j < input.length; j++)
		{
			if(input[i]>input[j]){
				temp = input[i];
				input[i] = input[j];
				input[j] = temp;
			}
		}
  }
  return input;
}

module.exports = sort
