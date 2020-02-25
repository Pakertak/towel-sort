
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined||matrix.length == 0) return [];
  let arr = []; 
  let count1 = matrix.length;
  for(let i=0; i < count1; i++){
  let count2 = matrix[i].length;
    for(let j=0; j < count2; j++){
      arr.push(matrix[i][j]);  
    }
    i++;
    if(i < count1){
      count2=matrix[i].length; 
      for(let j=count2-1; j >= 0; j--){
        arr.push(matrix[i][j]);  
      }
    }
  }    
  return arr;
}
