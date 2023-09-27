class createuser{
    constructor(name,sname,age,phone){
        console.log("Constructor is Called");
        this.name=name
        this.sname=sname
        this.age=age
        this.phone=phone
    }

    about(){
        console.log(this.name,this.age,this.sname,this.phone)
    }

    is18(){
        return this.age>=18
    }
}

const user1=new createuser("vishal","pote",3,999999)
console.log(user1)
user1.about()
console.log(user1.is18())