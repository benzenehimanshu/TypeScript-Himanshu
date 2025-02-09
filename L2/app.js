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
var favourite1;
favourite1 = ["Playing", "Riding"];
favourite1[0] = "Racing";
//in the use of any we loose the power of typescript
var favourite2; //avoid using any
favourite2 = ["Racing", 1, true];
favourite2[1] = "Mining";
// console.log(person.address.city);
// console.log(person.skills);
//introduction to tuples
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Author"] = 1] = "Author";
    Role[Role["READ_ONLY_USER"] = 2] = "READ_ONLY_USER";
})(Role || (Role = {}));
var person = {
    name: "Yadav",
    age: 21,
    skills: ["Watching movies", "Coding"],
    product: [10, "Macbook Air M2"],
    role: Role.READ_ONLY_USER,
};
if (person.role === Role.Admin) {
    console.log("Admin");
}
else if (person.role === Role.Author) {
    console.log("Author");
}
else if (person.role === Role.READ_ONLY_USER) {
    console.log("Read user only");
}
