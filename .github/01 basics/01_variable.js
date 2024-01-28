 const accountId= 1234
 let accountEmail="abhijeet@gmail.com"
 var accountPassword="12345"
 accountCity= "Kolkata"
let accountState;
//this is not allowed as const value cannot be changed
//accountId=23

console.log(accountId)
//In modern javascript always use let as there was issue in use of var for its scope problem
console.table([accountId,accountEmail,accountEmail,accountPassword,accountState,accountCity])
