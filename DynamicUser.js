function createUser(name,lastname,age,email,address){
    const user={}
    user.lastname=lastname
    user.age=age
    user.email=email
    user.address=address
    user.name=name
    user.about=function()
    {
        return `Name:${name} Age:${age}`
    }
    user.is18=function(){
        return this.age>=18
    }
    return user
}

const user1=createUser("vishal","pote",23,"vishal@gmail.com","jainpura paithan")
const user2=createUser("balu","pote",23,"vishal@gmail.com","jainpura paithan")
console.log(user1)
console.log(user2)

const is18=user1.is18()
console.log(is18)