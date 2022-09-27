var box= function(h , w, l , mat , con)
{
    this.height = h ;
    this.width = w ;
    this.length = l ;
    this.material = mat ;
    this.content = con ;
    numberOfBooks = con.length ;
   
    this.deleteBook = function(del){
        for (var i = 0; i <con.length; i++){
            if (con[i].title==del){
        con.splice(i,1);
            }
        }
    }
}

function book (title,numOfChapters,author,numOfPages,puplisher,numOfCopies){
   book.count++
this.title = title;
this.numOfChapters= numOfChapters;
this.author = author;
this.numOfPages = numOfPages;
this.puplisher = puplisher;
this.numOfCopies = numOfCopies;
book.getCount =function(){return(book.count)}
}
book.count = 0

var a = new book ("police story",10,"ahmed",100,"el-sherok",3);
var b = new book ("drama story",4,"mohamed",60,"asier elkotob",2);
var c = new book ("cartoon story",2,"ali",80,"el-sherok",4);
var d = new book ("romance story",6,"taha",100,"asier elkotob",7);
var s = new book ("romance story",6,"taha",100,"asier elkotob",7);

console.log(book.count);
var mybox = new box (50,60,30,"wood",[a,b,c,d])