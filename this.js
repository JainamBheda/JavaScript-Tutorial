//this keyword
const person={
  name:"Jainam",
  func(){
    return `Welcome, my name is ${this.name}`;
  }
};
console.log(person.func());