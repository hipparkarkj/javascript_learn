const accountID = 144553
let accountEmail = "kailas@gmail.com"
var accountPassword = "123456"
accountCity = "Ratnagiri"
let accountState;
// accountID = 2 // not allwoed to assign to const variable


accountEmail = "kh@kh.com"
accountPassword = "12121212121"
accountCity = "Sangli"

console.log(accountID)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])