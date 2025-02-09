//object array tuple
// const person: {
//   name: string;
//   age: number;
//   Gender: string;
//   //this is an example of nested object
//   address: {
//     city: string;
//   };
//   skills: string[];
// } = {
//   name: "Himanshu",
//   age: 15,
//   Gender: "Male",
//   address: {
//     city: "Mumbai",
//   },
//   skills: ["Reactjs", "Nodejs", "TypeScript"],
// };

let favourite1: string[];
favourite1 = ["Playing", "Riding"];
favourite1[0] = "Racing";
//in the use of any we loose the power of typescript
let favourite2: any[]; //avoid using any
favourite2 = ["Racing", 1, true];
favourite2[1] = "Mining";
// console.log(person.address.city);
// console.log(person.skills);

//introduction to tuples
enum Role {
  Admin,
  Author,
  READ_ONLY_USER,
}
const person: {
  name: string;
  age: number;
  skills: string[];
  product: [number, string]; //order maintaining is necessary and mandatory and its a fixed array
  role: Role;
} = {
  name: "Yadav",
  age: 21,
  skills: ["Watching movies", "Coding"],
  product: [10, "Macbook Air M2"],
  role: Role.READ_ONLY_USER,
};
if (person.role === Role.Admin) {
  console.log("Admin");
} else if (person.role === Role.Author) {
  console.log("Author");
} else if (person.role === Role.READ_ONLY_USER) {
  console.log("Read user only");
}
