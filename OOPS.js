//object creation using object literal
let person = {
    f_name :  "Jainam",
    getFunction : function(){
        return (`${person.f_name}`);
    },
    ph_number : {
        mobile : 123456,
        age : 23
    }
}
console.log(person.getFunction());
console.log(person.ph_number.mobile);

//object creation using constructors
function persona(first_name,last_name){
    this.first_name=first_name;
    this.last_name=last_name;
}
let person1=new persona("Jainam","Bheda");
let person2=new persona("Jainam","Shah");
console.log(`${person2.first_name} ${person2.last_name}`);

//classes using ES6
class Vehicle{
    constructor(name,maker,engine){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
    }
    getDetails(){
        return (`The name of bike is ${this.name}`);
    }
}
let bike1=new Vehicle('Hayabusa','Suziki','1300cc');
console.log(bike1.getDetails());


//inheritance and polymorphism
// Inheritance example
class person4 {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return (`Name of person: ${this.name}`);
    }
}
class student extends person4 {
    constructor(name, id) {
        // super keyword for calling the above 
        super(name);
        this.id = id;
    }
    toString() {
        return (`${super.toString()},
        Student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul', 22);
console.log(student1.toString());



