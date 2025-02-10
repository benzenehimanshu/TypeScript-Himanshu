//hi there this is lecture 4 practice session of typescript
function sum(num1: number, num2: number): string {
  return (num1 + num2).toString();
}
function sum2(num1: number, num2: number): number {
  return num1 + num2;
}

function greet(name: string): string {
  return `Hi ${name}`;
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

let combineFunctions: (a: number, b: number) => number;
combineFunctions = sum2;
type CB = (n: number) => void;
function addHandle(num1: number, num2: number, cb: CB) {
  let result = num1 + num2;
  cb(result);
}

addHandle(10, 45, (result) => {
  console.log(result);
});
