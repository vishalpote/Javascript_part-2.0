// prototype is nothing but the {} object

function createuser(name,surname,email,age,phone){
    const user=Object.create(createuser.prototype)
    user.name=name
    user.surname=surname
    user.email=email
    user.age=age
    user.phone=phone

    return user
}
createuser.prototype.about=function ()
{
    return `Name : ${this.name} And Age : ${this.age}`
}
createuser.prototype.is18=function (){
    return this.age>=18
}
const user1=createuser("vishal","pote","abc@gmail.com",23,3333333)
console.log(user1)
console.log(user1.about())
console.log(user1.is18())