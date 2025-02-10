//unkwnown,never ,any types
// let userInput: unknown;
// let userInput: any;
// let userName: string;
// userInput = 10;
// userName = userInput;
// userName = "Mamman Khan";
// userInput = userName;
// console.log(userInput);

function generateError(message: string, code: number): never {
  throw { message: message, statusCode: code };
}
const res = generateError("Internal Server Error", 400);
console.log(res);
