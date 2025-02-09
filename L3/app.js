//union
//literal types
//types alias/custom types
var man = {
    name: "Himanshu Singh Yadav",
    age: 21,
    address: [5, "Desh Ratna Marg"],
    skills: ["TypeScript", "Redis", "Kubernetes", "Microservices"],
};
function greet(man) {
    console.log("Hi Mr ".concat(man.name));
}
greet(man);
console.log(man.name);
console.log(man.address);
console.log(man.skills);
