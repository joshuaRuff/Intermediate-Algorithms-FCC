function truthCheck(collection, pre) {
  //Test every element in the array with .every
  var bool = collection.every(function(x) {
    //Make sure each element has pre and that pre has a value
       return x.hasOwnProperty(pre) && Boolean(x[pre]);  
       });
  
  return bool;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
