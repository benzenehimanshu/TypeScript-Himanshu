function add(num1, num2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var printResult = true;
var someText = "Sum of two numbers is-> ";
add(78, 13, printResult, someText);
// console.log(ans);
