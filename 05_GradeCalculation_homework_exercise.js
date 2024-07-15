function stdGrade(stdScore) {

    switch (true) {
        case stdScore >= 80:
            //console.log("the Std grade is A");
            return "A";
            break;

        case stdScore >= 60 && stdScore <= 79:
            //console.log("the Std grade is B");
            return "B";
            break;

        case stdScore >= 40 && stdScore <= 59:
           // console.log("the Std grade is C");
            return "C";
            break;

        default:
           // console.log("the Std grade is D");
            return "D";
            break;
    }

}

let stdScore =90;
console.log(stdGrade(stdScore));