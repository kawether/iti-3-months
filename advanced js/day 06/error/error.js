var x = document.getElementById ("input");
var err1 = new RangeError ("The number bigger than range");
var err2 = new RangeError ("The number Smaller than range") ;
function add(){
    var y = x.value
    try {
        if (y >100) { throw err1;
        }
        else if (y<1) { throw err2;
        }
    } 
    catch (error) { console.log(error.message)
        
    }
    finally { 
        document.getElementById("num").innerHTML=y
 }
}
