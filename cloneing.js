const obj1={
    key1:"value1",
    key2:"value2",
    key3:"value3"
}

// const obj2={...obj1}
// or

const obj2=Object.assign({},obj1)
obj1.key4="value4"
console.log(obj1)
console.log(obj2)