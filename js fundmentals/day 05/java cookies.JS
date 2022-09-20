var NameInput = document.getElementsByTagName("input")[0];
var AgeInput = document.getElementsByTagName("input")[1];
function logIn() {
  var myDate = new Date();
  myDate.setMonth(myDate.getMonth()+1)
  document.cookie = "userName=" + NameInput.value + ";expires=" + myDate ;
  document.cookie = "userAge=" + AgeInput.value + ";expires=" + myDate ; 
document.write(
" <br> welcome " + document.cookie.split(";")[0].split ("=")[1] + 
"<br> <br> your Age is " + document.cookie.split(";")[1].split ("=")[1])
}
function getAllCookies(){
  var allOfCookies=[]
  var keyvalCookies= document.cookie.split(";");
  for (let i = 0; i < keyvalCookies.length; i++) {
    allOfCookies[keyvalCookies[i].split("=")[0]]= keyvalCookies[i].split("=")[1];
  }
  return allOfCookies ;
}
function getCookie(cookieName){
var all = getAllCookies();
for (i in all){
  if (i==cookieName){
    return all[i];
  }
}
}
function deleteCookies(cookieName) {
// var specificCookie = getCookie(cookieName)
    document.cookie = cookieName + "=;expires=1-1-2020"
    // document.cookie = "userAge"  + "=;expires=1-1-2020"
  
}

