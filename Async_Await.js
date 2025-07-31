//Async -> allows us to write promise based code as if they were Synchronus
//Async always return promises indirectly

const getdata=async ()=>{
    let data="Hello my name is jainam bheda";
    return data;
}
getdata().then(data=>console.log(data));

//Await -> waits until promises return any result
const jainam=async ()=>{
    let x=await "Hello my fathers name is Mitesh";
    console.log(x);
}
console.log(10);
jainam();
console.log(20);