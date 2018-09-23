//Create rest array with any number of additional params
function destroyer(arr, ...num) {
//create a holderArray to return
  let holderArray = [];
//Loop through initial array and test if each element can be found in the rest array
  for(let i = 0; i < arr.length; i++) {
//If element can't be found add this element to the holderArray
    if(num.indexOf(arr[i]) === -1) {
      holderArray.push(arr[i]);
    } 
  }
//Return holderArray
  return holderArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
