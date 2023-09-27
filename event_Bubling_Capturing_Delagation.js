const grantp=document.querySelector(".grantparentclass")
const parent=document.querySelector(".parentclass")
const child=document.querySelector(".childclass")


child.addEventListener("click",()=>{
    console.log("Child Class")
})

grantp.addEventListener("click",()=>{
    console.log("grant Class")
})

parent.addEventListener("click",()=>{
    console.log("parent Class")
})

document.body.addEventListener("click",()=>{
    console.log("body")
})


child.addEventListener("click",()=>{
    console.log("capture !!!!!!!!!!!!  Child Class")
},true)

grantp.addEventListener("click",()=>{
    console.log("capture !!!!!!!!!!!!  grant Class")
},true)

parent.addEventListener("click",()=>{
    console.log("capture !!!!!!!!!!!!  parent Class")
},true)

document.body.addEventListener("click",()=>{
    console.log("capture !!!!!!!!!!!!  body")
},true)


grantp.addEventListener("click",(e)=>{
    console.log(e.target.textContent)
})