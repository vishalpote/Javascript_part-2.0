const person=new Map()
person.set("name","vishal")
person.set("age",23)
// console.log(person)

// for(let key of person.keys())
// {
//     console.log(key)
// }

// console.log(person.get("name"))
// console.log(person.get("age"))

// for(let [key,value] of person)
// {
//     console.log(key,value)
// }


const person1={
    id:1,
    name:"vishal"
}

const user=new Map()
user.set(person1,{age:23,gender:"male"})


console.log(user)
console.log(person1.name)

console.log(user.get(person1).age)