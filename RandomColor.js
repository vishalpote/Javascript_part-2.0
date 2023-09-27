const btn=document.querySelector("button")
const body=document.body
const currentcolor=document.querySelector(".currentcolor")
// console.log(currentcolor)

function genrateRandomColor(){
    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)
    const randomcolor=`rgb(${red},${green},${blue})`
    return randomcolor
}

btn.addEventListener("mouseover",()=>{
    randomcolor=genrateRandomColor()
    body.style.background=randomcolor
    btn.style.background=randomcolor
    // btn.style.textContent.fontWeight="600"
    currentcolor.textContent=randomcolor
})


// body.addEventListener("keypress",(e)=>{
//     console.log(e.key)
// })