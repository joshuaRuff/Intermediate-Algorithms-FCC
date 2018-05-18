function dropElements(arr, func) {
//Test if our function within a function is false
  while(func(arr[0]) === false) {
// while it is false shift array
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
