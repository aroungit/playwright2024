
//Declaring a String
let Str = "Today is a great day";

//String is splitted into an Array using Split command
let splitStr = Str.split(" ");
console.log(splitStr);

//Retriving the last word using pop command
let lastword = splitStr.pop();
console.log(lastword);

//Retriving the length of the lastword
let lstWrdCnt = lastword.split("").length;
console.log(lstWrdCnt);