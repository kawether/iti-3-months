var parameters = function () { 
    var error= new RangeError();

 try {
    if (arguments.length == 2) {
        console.log ("length : " + arguments.length)
    }else{ 
        error.message = "you should add 2 parameters";
        throw error;
    }
}
catch (error) {
console.log(error.message)
 }    
} 


