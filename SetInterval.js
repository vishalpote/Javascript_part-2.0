//setInterval:- setinterval always return the id and excute after one second repet 







const buttons=document.querySelector("button")
const body=document.body

const id=setInterval(()=>{
    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)
    const rgb=`rgb(${red},${green},${blue})`
    console.log(rgb)
    body.style.background=rgb;
},1000)

buttons.addEventListener("click",()=>{
    clearInterval(id);
})