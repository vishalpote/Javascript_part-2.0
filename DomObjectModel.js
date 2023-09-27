console.log(window.document);
console.dir(window.document)

 const btn=document.querySelector(".btn")
console.log(btn)

const btn1=document.querySelectorAll(".btn")
console.log(btn1)

btn.addEventListener('click',()=>{
    alert("Hey.......")
})

const hello=document.getElementById("hello");
console.log(hello.textContent)
hello.textContent="Hello Vishal!"
console.log(hello.textContent)

console.log(hello.innerText)


const division=document.querySelector("div.classname1 h1")
console.log(division.style)

division.textContent="This is The H1 Tag"
division.style.color="red"

division.style.border="12px solid black"


// // this is the getAttribute method u can get any attribut inside tag
const link=document.querySelector("a")
console.log(link.getAttribute("href"))
console.log(link.getAttribute("href").slice(1))

// this is the setAttribute u can set any value of the any attribute in the tag
// eg:-

link.setAttribute("href","https://www.google.com")
console.log(link.getAttribute("href"))

const inputfield=document.querySelector("input")
console.log(inputfield.getAttribute("name"))
console.log(inputfield.getAttribute("placeholder"))
console.log(inputfield.getAttribute("id"))

// this method give the HTMLCOLLECTION
const navitem=document.getElementsByClassName("items")
console.log(navitem)
console.log(Array.isArray (navitem))


// this method gives the NodeList
const navitem1=document.querySelectorAll(".items")
console.log(navitem1)


for(let i=0;i<=navitem.length;i++)
{
   navitem[i].style.color="black";
   navitem[i].style.backgroundColor="red";
   navitem[i].style.fontWeight="bold";
   navitem[i].style.border="2px solid black";
}


for(let i of navitem)
{
    i.style.color="white"
    i.style.width="40"
    i.style.backgroundColor="green"

}


const items=document.querySelectorAll(".items")
console.log(items)

items.forEach((item)=>{
    item.style.color="black";
    item.style.backgroundColor="green"
    item.style.border="2px solid black"
    item.style.display="inline"
    item.style.alignItem="center"
    item.style.justifyContent="space-between"
})

const x=document.querySelector(".classname1")
console.log(x.innerHTML)
x.innerHTML="<h1>Hello This Is Me</h1>"
x.innerHTML+="<button class='btn'>Clicked</button>"
console.log(x.innerHTML)

const root1=document.getRootNode()
console.log(root1)
console.log(roo1t.childNodes)
console.log(roo1t.firstChild)
console.log(root1.lastChild)

console.log(root.cloneNode)
console.log(root.secondChild);


const root=document.getRootNode()
console.log(root)

const htmlnode=root.childNodes[0]
console.log(htmlnode)
console.log(htmlnode.childNodes)
console.log(htmlnode.parentNode)
console.log(root.nextElementSibling)


const h1=document.querySelector(".classname1 h1")
console.log(h1.parentNode)

const h1parent=h1.parentNode
console.log(h1.parentNode)

const head=document.querySelector("head")
const title=head.querySelector("title")
console.log("Title: "+title.childNodes)


const item=document.querySelector(".classname2")
console.log(item.classList)

item.classList.add("item1")
item.classList.remove("item1")

const btn2=document.querySelector(".btn")
console.log(btn2.classList)

btn2.classList.add("btn-primary")
btn2.classList.remove("btn-primary")
btn2.classList.toggle("btn-primary")
btn2.classList.toggle("btn-primary")

const ans=btn2.classList.contains("btn-primary")
console.log(ans)


const todoitem=document.querySelector(".todo-item")
console.log(todoitem.innerHTML)
for(let i=0;i<=10;i++)
{
todoitem.innerHTML +=`<li>New Todo ${i}</li>`
}

const newitem=document.createElement("li")
console.log(newitem)
newitem.textContent="Todo Items"
// todoitem.append(newitem)
todoitem.prepend(newitem)

const todoitem1=document.querySelector(".todo-item li")
todoitem.remove()


const todoitem2=document.createElement("li")
todoitem.textContent="Todo Lists"
console.log(todoitem2)
const todolist=document.querySelector(".todo-item")
todolist.before(todoitem2)
todolist.after(todoitem2)

todolist.insertAdjacentHTML("beforeend","<li>Todo Item 1</li>")
todolist.insertAdjacentHTML("beforebegin","<li>Todo Item 1</li>")
todolist.insertAdjacentHTML("afterbegin","<li>Todo Item 1</li>")
todolist.insertAdjacentHTML("afterend","<li>Todo Item 1</li>")

const li=document.createElement("li")
li.textContent="Todo item"
const li2=li.cloneNode(true)
todolist.append(li)
todolist.prepend(li2)
const ul=document.querySelectorAll(".todo-item li")
const sixthli=document.createElement("li")
sixthli.textContent="Todo item 6"
todolist.append(sixthli)
console.log(ul)


const liItem=todolist.getElementsByTagName("li")
const newItem=document.createElement("li")
newItem.textContent="Todo Item 6";
todolist.append(newItem);
console.log(liItem)


//how to get the dimesnsions of the element tag or section

const info1=todolist.getBoundingClientRect().width
const info2=todolist.getBoundingClientRect().height
console.log(info1)
console.log(info2)
