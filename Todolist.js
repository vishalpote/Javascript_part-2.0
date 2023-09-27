const todoform=document.querySelector(".todo-form");
const todoinput=document.querySelector(".todo-form input[type='text']");
const todolist=document.querySelector(".todo-list")
todoform.addEventListener("submit",(e)=>{
    e.preventDefault()
    const todotext=todoinput.value;
    const newli=document.createElement("li");
    const newliinnerHtml=`
    <span>${todotext}</span>
    <button>Done</button>
    <button>Remove</button>
    `
    newli.innerHTML=newliinnerHtml;
    console.log(newli)
    todolist.append(newli)
    todoinput.value=""
})


const removebtn=document.querySelector(".remove")
todolist.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        const lispan=e.target.previousElementSibling;
        lispan.style.textDecoration="line-through"
        console.log(lispan)
        // console.log("Greate.......")
        // lispan.style.color="red"
    }

    if(e.target.classList.contains("remove")){
        const targetli=e.target.previousElementSibling.previousElementSibling;
        console.log(targetli)
        targetli.remove();
        console.log("you want to remove something..")
    }
})