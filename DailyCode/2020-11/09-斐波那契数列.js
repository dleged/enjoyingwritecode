// 1 1 2 3 5 8 13
function fibonacci(index) {
  if (index === 1 || index === 2) {
    return 1;
  }

  return fibonacci(index - 2) + fibonacci(index - 1);
}

// OR

var queue = [1,1];
function fibonacci2(index) {
  if(index === 1 || index === 2) {
    return 1;
  }
  for(let i = 2; i < index; i++) {
    queue[i] = queue[i - 2] + queue[i - 1];
  }
  
  return queue[index-1];
}

console.log(fibonacci2(4));
