function typeOfNumber(number){

    if (number>0) {
        return "The number is a positive number";
        
    } else if (number<0) {
        return "The number is a negative number";
    } else{
        return "The number is a neutral number";
    }

}
let number = 0;
console.log(typeOfNumber(number));