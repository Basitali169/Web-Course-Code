console.log("This is tutorial 53")

function greet(name,greetText){
     console.log(greetText +" " + name);
     console.log(name +"  is a good boy");
}
function sum(a,b,c){
    let d = a+b+c;
    return d;
    // This line will never execute. (Unreachable Code)
    // console.log("Function is returned")
}
let name = "Harry";
let name1 = "Basit";
let name2 = "Wahaj";
let name3 = "Adnan";
let greetText = "Good morning";

greet(name,greetText);
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
let returnVal = sum(1,4,7);
console.log(returnVal);
// console.log(name +"is a good boy");
// console.log(name1 +"is a good boy");
// console.log(name2 +"is a good boy");
// console.log(name3 +"is a good boy");
