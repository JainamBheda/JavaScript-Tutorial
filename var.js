//key features of var

//hoisting 
console.log(a); //undefined (hoisting but not intilization)
var a=10;

//functional scope
function func(){
    var x=10;
    console.log(x);
}
func();
//console.log(x); //functional scope

//no block scope 
if(true){
    var y=100;
    console.log(y);
}
console.log(y);