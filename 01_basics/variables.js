const AccountId = 89672384
let AccountEmail = "simrit@gmail.com"
var AccountPassword = "1238829"
AccountCity = "Sangrur" // possible but don't use it is not a good practice
let AccountState;

// AccountId  = 2394821 // not allowed, we can't change value of const variable
console.log(AccountId)

AccountEmail = "s@gmail.com"
AccountPassword = "sim@123"
AccountCity = "Patiala"

// Instead of printing again and again using console.log we can use console.table to print all in one go
console.table([AccountEmail,AccountPassword,AccountCity,AccountState])  // AccountState will give the undefined value

/* to declare constant variable, we use const.
 To declare variable we use let and var
 But we don't use var because of issue in block scope and functional scope
*/