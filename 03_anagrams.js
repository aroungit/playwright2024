//Declare the strings

let str1 = "listen";
let str2 = "silent";

//Sort the sting by splitting them into string literals
let sortStr1 = str1.split("").sort();
let sortStr2 = str2.split("").sort();

//declare an Anagaram function
function isAnagram() {

//iterate first string
    for (i = 0; i <= sortStr1.length - 1; i++) {
//iterate second string and perform comparison with first string return the output
        for (j = 0; j <= sortStr2.length - 1; j++) {

            if (sortStr1[i] === sortStr2[j]) {
                return true;
            }
            else {
                return false;
            }

        }
    }

}
console.log(isAnagram());
