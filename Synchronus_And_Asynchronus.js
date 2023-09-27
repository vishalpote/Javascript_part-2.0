//synchronus and asynchronus programing

//synchronus:- mean it's block the next task upto first task complted

//asynchronus:- it's doesn't block any task 

//javascript is the synchronus and the single threaded language 

//eg of synchronus:-

// console.log("Hello World!");

// for(let i=0;i<10;i++){
//     console.log("inside for ")
// }

// console.log("Bye world!");



//eg of asynchronus:-


// console.log("script start")

// setTimeout(() => {
//     console.log("Hello World!")
// }, 1000);

// console.log("script end");



console.log("hiii")

const id =setTimeout(() => {
    console.log("what are you doing")
}, 0);
console.log("settimeout id:",id)
for(let i=0;i<=100;i++){
    console.log("How are you")
}
console.log("Bye")

clearTimeout(id)