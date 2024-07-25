
//Declare the String
let string = " fly me to the moon ";

//Trim the Whitespace and split it into an array
let trim = string.trimEnd().split(" ");
console.log (trim);

//count the lastword length
let lastwordCnt = trim.pop().length;
console.log(lastwordCnt);

