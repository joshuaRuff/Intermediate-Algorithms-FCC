function binaryAgent(str) {
  //split str up into a workable array
  str = str.split(" ");
  //make an array we can push to
  var holderArray = [];

  //loop through our str array, convert binary to decimal and push to holderArray
  for(var i = 0; i < str.length; i++) {
      holderArray.push(String.fromCharCode(parseInt(str[i], 2)));  
  }
  //revert array back to a string
  holderArray = holderArray.join("");
  return holderArray;
}
//user can input binary code to convert into a readable string
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
