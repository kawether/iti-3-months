var person= function(nm , age , add)
{var userName = nm ;
    this.userAge = age ;
    this.address = add ;
    this.displayName = function(){console.log(userName)}
this.setName = function(x) {  userName = x
    return x ;}
}

person.prototype.toString = function (){ 
    console.log(this.userName , this.userAge , this.address) ; 
}
var employee = new person ("kawether" , 23 , "benisuef")
