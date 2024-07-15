
function isOddOrEven(num) {
    
    if (num % 2 == 0) {

       // console.log("the number is an Even number");
        return "the number is an Even number";

    }
    else {
        //console.log("the number is an odd number")
        return "the number is an odd number";
    }

}
const num = 24;
console.log(isOddOrEven(num));