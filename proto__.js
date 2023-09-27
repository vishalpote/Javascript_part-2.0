// const obj1={
//     key1:"value1",
//     key2:"value2"
// }
// const obj2=Object.create(obj1)
// obj2.key3="value3"
// // obj2.key2="unique"
// console.log(obj2.key2)
// console.log(obj2.__proto__)
// console.log(obj2.__proto__)



//javascript function is nothing but the object 

function x()
{
    console.log("Hello !")
}

// console.log(x.name)

// x.age="my age is 23"

// console.log(x.age)


// x()


// PROTOTYPE  is nothing but the empty {} objects

if(x.prototype)
{
    console.log("prototype is present")
}
else{
    console.log("prototype is not present")
}


x.prototype.abc="abc"

console.log(x.prototype)