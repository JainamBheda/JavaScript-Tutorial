//Types of Function in JS 

//Name function 
function sum(a,b){
    return a+b;
}
console.log(sum(10,20));

//Anonymus function 
let diff = function(x,y){
    return x-y;
}
console.log(diff(10,10));

//Nested function 
function func(mssg){
    function hey(){
        console.log("Hello my name is " + mssg);
    }
    hey();
}
func("Jainam Bheda");

//Immediated invoked function expressioin 
let mssg2=(function(){
    return "Hey i from EXTC branch" ;
})();
console.log(mssg2);