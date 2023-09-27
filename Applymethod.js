const pers1={
    name:"vishal",
    age:23,
    about:function(gender,class1){
        console.log(`Name:${this.name} Age:${this.age} Gender:${gender} Class:${class1}`)
    }
}

const per2={
    name:"karan",
    age:22
}

pers1.about.apply(per2,["Female","Msc(CA)-II"])