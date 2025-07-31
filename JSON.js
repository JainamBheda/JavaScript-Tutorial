//JSON - JavaScript Object Notation 


//Accessing JSON objects values 
let myorder,i;
myorder={
    "name" : "Jainam",
    "order" : "Earbuds",
    "cost" : 3000
};
i=myorder.name;
console.log(i);


//Converting JSON Text to JavaScript Object
//using JSON.parse() method

const jsonString = '{"name": "jainam bheda", "age": 30}';
const jsonobj=JSON.parse(jsonString);
console.log(jsonobj.name);