var x = document.getElementById ("input");
var err1 = new RangeError ("The number bigger than range");
var err2 = new RangeError ("The number Smaller than range") ;
function add() {
    var y = x.value
if (y >100) { 
    onerror = run;
    throw err1;
}
else if (y<1) { 
    onerror = run;
    throw err2;
}
}
 function run (msg,err,col,li,url) {
    console.log (msg)
    console.log (err)
    console.log (col)
    console.log (li)
    console.log (url)
    return true ;
}