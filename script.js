//Triangle

function countTriangle(rows){
  if(rows == 0){
    return 0;
  }
  return rows + countTriangle(rows - 1);


//Fibonacci

function countFibonacci(num){
  if(num == 0){
    return 1;
  }

  if(num == 1){
    return 1;
  }
  return countFibonacci(num - 1) + countFibonacci(num - 2);
}

//countHI

function countHI(string){
  if(string.length == 0){
    return 0;
  }

  return string.substring()
}
