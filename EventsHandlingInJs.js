//events:-

//Evenets jab hum kisi button ya kisi element pe click ya hover karte he us time jo html pe changes hote he use event kahte he

//their are three type of evenet handling
//1] aap direct html file me event add kare javascript code likh sakte ho
//2] aap classname select karke uspe event laga sakte hoo

//3] addEvenetlistener method u can used all the event in this method



// const btn=document.querySelector(".btn-primary")
// btn.onclick=function()
// {
//     console.log("Hello World!!!")
// }

// btn.addEventListener("click",()=>{
//     console.log("Hello World!")
// })

// btn.addEventListener("click",function(){
//     console.log("value of This")
//     console.log(this)
// })


const one=document.querySelector("#one")
// const two=document.querySelector("#two")
// const three=document.querySelector("#three")


// one.addEventListener("click",()=>{
//     console.log("One Number Button");
// })


// two.addEventListener("click",()=>{
//     console.log("Two Number Button");
// })


// three.addEventListener("click",()=>{
//     console.log("Three Number Button");
// })


const allbutton=document.querySelectorAll("button")
// console.log(allbutton)

// for(let btn of allbutton)
// {
//     btn.addEventListener("click",function(){
//         console.log(this.textContent)
//     })
// }


// for(let i=0;i<allbutton.length;i++)
// {
//     allbutton[i].addEventListener("click",function(){
//         console.log(this.textContent)
//     })
// }


allbutton.forEach((ele)=>{
    ele.addEventListener("dblclick",function(e){
        // console.log(this.textContent)
        console.log(e.currentTarget)
    })
})

// function hello(e){
//     console.log(e)
// }

// hello({name:"vishal"})


