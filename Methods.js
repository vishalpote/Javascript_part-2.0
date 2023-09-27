function personinfo()
{
    console.log(`Name : ${this.name} And Age: ${this.age}`)
}

const per1={
    name:"vishal",
    age:23,
    about:personinfo
}


const per2={
    name:"karan",
    age:13,
    about:personinfo
}


const per3={
    name:"sagar",
    age:24,
    about:personinfo
}

per1.about()
per2.about()
per3.about()

