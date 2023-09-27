console.log(window)
console.log(this)
myname()
console.log(myfun)
console.log(name)

//the above part is theexample of the hoisting
//hoisting means the function and variable are move to their
// top of the scope is called hoisting


//this is the function declartion 
function myname()
{
    console.log("this is the hoisting example")
}


//function expression 
var myfun=function(){
    console.log("this is the function expression")
}

var name="vishal"
var sname="pote"

console.log(name+ " " + sname);
console.log(myfun)


let x="hahahahah";
console.log(x)

function getname(fname,sname){
    console.log(arguments[1])
    var p="hihihi";
    console.log(p)
    return `${fname} and ${sname}`
}

const newmem=getname("vishal","pote")
console.log(newmem)


const lname="pote"

const fullname=function(){
    const fname="vishal"
    function getfull(){
        console.log(fname)
        console.log(lname)
    }getfull()
    
}
fullname()