function diffArray(arr1, arr2) {
  const newArr = [];
  let longerArr, shorterArr;

    //Compare the length of the arrays and set them as new variables
    if(arr1.length >= arr2.length) {
      longerArr = arr1;
      shorterArr = arr2;
    } else {
      longerArr = arr2;
      shorterArr = arr1
    }

  //Use indexOf to test the longerArr against the shorterArr pushing differences to newArr
  for(let i = 0; i < longerArr.length; i++) {
    if(shorterArr.indexOf(longerArr[i]) === -1) {
      newArr.push(longerArr[i]);
    }
  }

  //Use indexOf to test the shorterArr against the longerArr pushing differences to newArr
  for(let i = 0; i < shorterArr.length; i++) {
      if(longerArr.indexOf(shorterArr[i]) === -1) {
      newArr.push(shorterArr[i]);
    }
  } 
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
