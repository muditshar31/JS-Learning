// Date

let myDate = new Date();
// console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getTimezoneOffset());
console.log(myDate.toISOString());

let myCreatedDate = new Date(2026, 6, 21);
console.log(myCreatedDate.toDateString());

let myCreatedDate01 = new Date(2026, 6, 22, 0, 3, 0);
console.log(myCreatedDate01.toLocaleString());

let myCreatedDate02 = new Date("2026-07-22");
console.log(myCreatedDate02.toLocaleString());

let myCreatedDate03 = new Date("07-22-2026");
console.log(myCreatedDate03.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate03.getTime());

console.log(Math.floor(Date.now()/1000)); // seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // month starts from 0 i.e. January = 0
console.log(newDate.getDay() + 1); // day starts from 0 i.e. Sunday = 0