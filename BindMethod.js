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

const func1=per1.about.bind(per2,"male","mscca-l");
func1()