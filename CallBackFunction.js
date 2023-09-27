//callback function:- we can pass the function as parameter in another function call callback function


//eg:-

function x(a){
    console.log("Hello !");
    a()
}

x(()=>{
    console.log("Vishal")
})


function addTwoNumber(n1,n2,callback){
    console.log("Addition Of Number Is:");
    if(typeof n1==="number" && typeof n2==="number"){
    callback(n1,n2)
    }
    else{
        console.log("Wrong Input")
    }
}

function add(num1,num2){
    console.log(num1*num2)
}

addTwoNumber(9,5,add)



function addtowo(n1,n2,success,failure){
    if(typeof n1==="number" && typeof n2==="number"){
        success(n1,n2)
    }
    else{
        failure()
    }
}

addtowo(5,"7",(n1,n2)=>{
    console.log(n1+n2)
},
()=>{
    console.log("Wrong Input");
    console.log("Please Enter The Valid Data");
})