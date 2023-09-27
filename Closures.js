// clousers:- is nothing but the innerfunction can be accesss the properties of the outerfunction and function can be return function 


// eg:-

function outer(){
    function inner(){
        console.log("Hello Vishal!");
    }
    return inner
}

const ans=outer()
// console.log(ans)
ans()


function display(name,sname){
    function details(age){
        console.log(name,sname,age);
         function clasname(){
            console.log("my class is :- mscca-ll")
         }
         return clasname
    }
    return details
}

const ans1=display("vishal","pote")
ans1(23)()



function fullname(name,sname){
    this.name=name;
    this.sname=sname;
    console.log(name,sname)
    function ageofper(name){
        console.log(name);
        function classname(class1){
            console.log(class1);
        }
        return classname
    }return ageofper
}

const ans2=fullname("balu","pote")
ans2("vishal")
ans2("mscca-ll")


function outerfuc(){
    const name="vishal"
    console.log("this is the outer function");
    function innerfunc(){
        console.log("This is the inner function"  + " "+name)
    }
     return innerfunc
}

const ans3=outerfuc()
ans3()


const func=(p)=>{
    const myfunc=(n)=>{
        console.log( n**p)
    }
    return myfunc
}
const ans4=func(3)
ans4(3)



const myfunc1=p=>n=>n**p;

const ans5=myfunc1(3)
const ans6=ans5(2)
console.log(ans6)


function func3(){
    console.log("Hii You Called Me!")
    function xyz(){
        console.log("Already Called !");
    }return xyz
}

const ans7=func3()
ans7()




