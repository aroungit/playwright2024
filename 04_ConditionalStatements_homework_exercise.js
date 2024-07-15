function launchBrowser(browserName){

    if (browserName == "chrome") {

        console.log("The browsername is " + browserName);
        
    } else {
        console.log ("The browsername is " + browserName);
        
    }

}

function runTests(testType){

    switch (testType) {
 
        case "sanity":
            console.log ("the test is  " + testType);
            //return testType;
            break;
        case "regression":
                console.log ("the test is  " + testType);
                //return testType;
                break;
        default:
            console.log ("the test is Smoke");

            break;
    }


}
let browserName = "safari";
launchBrowser(browserName);
let testType = "regression";
//console.log(runTests(testType));
runTests(testType);