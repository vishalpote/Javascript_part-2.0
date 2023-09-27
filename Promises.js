// const arr=["a","b","c","d"]
// // console.log("Start")

// const newprom1=new Promise((res,rej)=>{
//     if(arr.includes("a") && arr.includes("b")){
//         res("The Element Is Present")
//     }
//     else{
//         rej("The Element Is Not Present")
//     }
// })


// newprom1.then((ele)=>{
//     console.log("My Element:",ele)
// }).catch((error)=>{console.log(error)
// })
// setTimeout(() => {
//     console.log("Hello")
// }, 1000);
// console.log("End")


// const newprom2=new Promise((res,rej)=>{
//     if(arr.includes("a") && arr.includes("b")){
//         setTimeout(() => {
//             res("The Element Is Present")
//         }, 1000);
//     }
//     else{
//         setTimeout(() => {
//             rej("The Element Is Not Present")
//         }, 2000);
//     }
// })


// newprom2.then((ele)=>{
//     console.log("My Element:",ele)
// }).catch((error)=>{console.log(error)
// })


// function resolvepromise(){
//     return new Promise((res,rej)=>{
//         const value=true;
//         setTimeout(() => {
//             if(value){
//                 res("Element is Present")
//             }else{
//                 rej("Element is not present")
//             }
//         }, 1000);
//     })
// }
// resolvepromise().then((ele)=>{console.log(ele)})
// .catch((err)=>{console.log(err)})


// //.then():- always return the new promise

// //promise chaing :- means that the promise return the promise

// //eg:-


// function x(){
//     return new Promise(res=>{
//         res("Hii ")
//     })
// }
// x().then((ele)=>{
//     console.log(ele);
//     ele+="vishal";
//     return ele;
// }).then((ele)=>{
//     console.log(ele)
//     ele+=" pote";
//     return ele
// }).then((ele)=>{
//     console.log(ele)
// })



const head1=document.querySelector(".heading1")
const head2=document.querySelector(".heading2")
const head3=document.querySelector(".heading3")
const head4=document.querySelector(".heading4")
const head5=document.querySelector(".heading5")



function changeColorAndText(ele,text,color,time){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            ele.textContent=text;
            ele.style.color=color;
            res()
        }, time);
    })
}

const x=changeColorAndText(head1,"Head 1","orange",1000)
x.then(()=>{
    return changeColorAndText(head2,"Head 2","red",1000)
}).then(()=>{
    return changeColorAndText(head3,"Head 3","yellow",1000)
}).then(()=>{
    return changeColorAndText(head4,"Head 4","purple",1000)
}).then(()=>{
    return changeColorAndText(head5,"Head 5","green",1000)
})