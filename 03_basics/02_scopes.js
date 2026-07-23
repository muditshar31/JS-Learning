let a = 300 // Global Scope

if (true){
    let a = 10 // Block Scope 
    const b = 20 // Block Scope 
    //var c = 30
    console.log("Inner value of : ", a)
}

console.log(a)
// console.log(b)
// console.log(c)