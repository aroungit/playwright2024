
console.log("------------------------Function Declaration-------------")

function userProfile(name) {

    console.log(`Hello ${name}`);

}
let name = "Aroun";
userProfile(name);

console.log("------------------------Arrow Function------------------")

const double = number =>{
    return +number;
}
console.log(double(3));

console.log("------------------------Anonymous Function---------------")

setTimeout(function(){
        console.log("This message is delayed by 2 seconds")},2000
    );

console.log("------------------------Callback Function-----------------")


function getUserData(callback){
    setTimeout(function user(){
        console.log("userobject")
    },3000)
    callback();}

    function details(){
        console.log("The user name is Aroun");
        console.log ("The age is 25");
    }

    getUserData(details);

