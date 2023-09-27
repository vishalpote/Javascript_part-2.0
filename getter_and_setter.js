class person{
    constructor(name,sname){
        this.name=name;
        this.sname=sname;
    }
    static prop="this is the static properties of the persone class";
    static classInfo(){

        return `this is the static method`
    }
    get fullname(){
        console.log( `${this.name}  ${this.sname}`)
    }
    set fullname(fullname){
        const [name,sname]=fullname.split(" ")
        this.name=name;
        this.sname=sname;
        console.log(name,sname)
    }
}

const per1=new person("vishal","pote")
per1.fullname
per1.fullname="karan chavan"
const info=person.classInfo()
console.log(info)
console.log(person.prop)
