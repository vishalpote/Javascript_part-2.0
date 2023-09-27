// settimeout:-its take some time to excute the code inside the settime out function its take two parameters first is callback function another is time in mili sceond

// settimeout excute only once settieout always return the some id 

//cleareTimeout are use for the stop excution of the settimeout function using id of settimeout



//eg:-

// console.log("Start")
// setTimeout(() => {
//     console.log("Hello!")
// }, 1000);

// console.log("End")


console.log("Start Programing")
const id=setTimeout(() => {
    console.log("Hello World!");
}, 1000);
console.log("The settimeout id Is:",id)
clearTimeout(id)
console.log("End Programing")