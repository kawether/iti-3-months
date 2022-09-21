var err = new RangeError()
function add() {
    var sum = 0
   try{

       if (arguments.length===0) {
           err.message= "please add numbers"
           throw err}
           else {
               for ( i= 0 ; i<arguments.length ; i++) {
                   if(isNaN(arguments[i])){
                       err.message= "add numbers only"
                       throw err
                       
                    }else{
                        sum +=arguments [i] 
                        
                    }
                }
            }


        }catch(error)
        {console.log(error)   }


    // return (sum)
}


add("h")
add()