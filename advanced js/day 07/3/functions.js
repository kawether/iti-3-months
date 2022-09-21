// function arrReverse() {
//     return [].reverse.call(arguments);
// }
// console.log(arrReverse(1,2,3))

var x = function () {
    return [].reverse.apply(arguments);
}
console.log(x(1,2,3))