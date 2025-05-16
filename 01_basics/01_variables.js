const accountID=144553
let accountEmail="nagesh@goggle.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

//accountID=2 //not allowed

accountEmail="np@gmail.com"
accountPassword="001"
accountCity="Nanded"

/*
prefer not to use var
bcz of issue in block scope and functional scope
*/
// console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
