
const accountId = 123456789;
let accountEmail = "mudit.shar31@gmail.com";
var accountPassword = "12345";

/*
Prefer not to use var as it is function scoped and can lead 
to unexpected behavior. Use let or const instead.
*/

accountCity = "New York";
let accountState;

// accountId = 987654321; // accountId is a constant and cannot be reassigned

accountEmail = "test@test.com";
accountPassword = "54321";
accountCity = "Los Angeles";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
