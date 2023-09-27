// function createuser(name,age)
// {
//     this.name=name
//     this.age=age
// }
// createuser.prototype.about=function(){
//     console.log(this.name,this.age)
// }

// const user1=new createuser("vishal",22)
// console.log(user1)
// user1.about()


function createuser(name,sname,age,phone){
    this.name=name
    this.sname=sname
    this.age=age
    this.phone=phone
}
createuser.prototype.about=function(){
    console.log(`Name :${this.name} Age:${this.age}`)
}
const user1=new createuser("vishal","pote",23,9999);
const user2=new createuser("balu","pote",23,9999);
console.log(user1)
user1.about()
console.log(user2)
user2.about()

for (let k in user1){
    console.log(k)
}


const arr=new Array(1,2,3)
console.log(arr)