let fruits = ["apple","strawberry","banana","orange","mango"];

let isString = fruits.every(function(elem){
return typeof elem == "string"
});
console.log(isString);

let startA = fruits.some(function(elem){
return elem.startsWith("a")
});
console.log(startA);

let startBS = fruits.filter(function(elem){
return elem.startsWith("b") || elem.startsWith("s");
});
console.log(startBS);

let iLike = fruits.map((elem)=>{
    return `I like ${elem}`
});
console.log(iLike);

iLike.forEach(elem => {
console.log(elem);
});
