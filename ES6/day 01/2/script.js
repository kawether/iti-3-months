let arr1 =[5,9,18,4,55];
console.log(arr1)
console.log(Math.max(...arr1));
console.log(Math.min(...arr1));

function rest(x,y,...restparam){
console.log(restparam)
console.log(Math.max(...restparam));
console.log(Math.min(...restparam));
}
 rest(...arr1);