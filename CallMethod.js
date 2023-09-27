const per1={
    name:"vishal",
    age:23,
    about:function(gender,class1){
        console.log(`Name : ${this.name} And Age : ${this.age}  Gender: ${gender} Class : ${class1}`)
    }
}

const per2={
    name:"karan",
    age:34
}

per1.about.call(per2,"male","mscca-l");