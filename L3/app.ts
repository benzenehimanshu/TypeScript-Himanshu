//union
//literal types
//types alias/custom types

//lets learn union concept
// UNION -> PIPE IN TYPESCRIPT |||||||
// function combine(num1: string | number, num2: string | number) {
//   let result = 0;
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else {
//     return num1.toString() + num2.toString();
//   }
// }

// const sum = combine(10, 20);
// const sum2 = combine("Himanshu", " Yadav");
// const sum3 = combine("Himanshu", 69);
// console.log(sum, sum2, sum3);
// console.log(sum2);
// console.log(sum3);
//LITERAL TYPES

// function combine(
//   num1: string | number,
//   num2: string | number,
//   conversionType: "as-number" | "as-string"
// ) {
//   let result = 0;
//   if (
//     typeof num1 === "number" &&
//     typeof num2 === "number" &&
//     conversionType === "as-number"
//   ) {
//     return +num1 + +num2;
//   } else if (
//     typeof num1 === "number" &&
//     typeof num2 === "number" &&
//     conversionType === "as-string"
//   ) {
//     return num1.toString() + num2.toString();
//   } else {
//     return num1.toString() + num2.toString();
//   }
// }

// const sum = combine("10", "20", "as-number");
// const sum2 = combine(10, 20, "as-string");
// console.log(sum2);

//   const sum2 = combine("Himanshu", " Yadav", "as-string");
//   const sum3 = combine("Himanshu", 69, "as-number");

//types alias // custom types
// type Combinable = number | string;
// function combine(
//   num1: Combinable,
//   num2: Combinable,
//   conversionType: "as-number" | "as-string"
// ) {
//   let result = 0;
//   if (conversionType === "as-number") {
//     return +num1 + +num2;
//   } else {
//     return num1.toString() + num2.toString();
//   }
// }

// const sum = combine("10", "20", "as-number");
// const sum2 = combine(10, 20, "as-string");
// // const sum3=combine()
// console.log(sum);
// console.log(sum2);

//some more examples of type alias

type User = {
  name: string;
  age: number;
  address: [number, string];
  skills: string[];
};
const man: User = {
  name: "Himanshu Singh Yadav",
  age: 21,
  address: [5, "Desh Ratna Marg"],
  skills: ["TypeScript", "Redis", "Kubernetes", "Microservices"],
};

function greet(man: User) {
  console.log(`Hi Mr ${man.name}`);
}
greet(man);
console.log(man.name);
console.log(man.address);
console.log(man.skills);
