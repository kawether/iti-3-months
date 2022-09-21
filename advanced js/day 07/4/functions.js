function rectangle (width , height) {
this.width = width
this.height = height    

this.calcArea = function (){
    return width*height
}
this.calcPerimeters = function(){
    return (width+height)*2
}
this.displayInfo = function (){
 return {
    width:width,
    height:height,
    calcArea:this.calcArea(width,height),
   calcPerimeters:this.calcPerimeters(width,height) ,
 }
}
}

var x = new rectangle(2,2)
