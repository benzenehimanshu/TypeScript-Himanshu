//hi there this is lecture 4 practice session of typescript
function sum(num1, num2) {
    return (num1 + num2).toString();
}
function sum2(num1, num2) {
    return num1 + num2;
}
function greet(name) {
    return "Hi ".concat(name);
}
//below is the bad practice for copying functions
// let combineFunctions: Function;
// combineFunctions = sum2;
// console.log(combineFunctions(10, 5555));
// combineFunctions = greet;
// console.log(combineFunctions("Namami Devi Narmade"));
// combineFunctions=10 -> this is invalid
// combineFunctons=function(){}  -> this is valid
// console.log(greet("Jadoji"));
// console.log(sum(10, 15));
// console.log(sum2(10, 15));
//lets follow good practice for functions
var combineFunctions;
combineFunctions = sum2;
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 45, function (result) {
    console.log(result);
});
