const head1=document.querySelector(".heading1")
const head2=document.querySelector(".heading2")
const head3=document.querySelector(".heading3")
const head4=document.querySelector(".heading4")
const head5=document.querySelector(".heading5")


setTimeout(() => {
    head1.textContent="Head 1"
    head1.style.color="red"
    setTimeout(() => {
        head2.textContent="Head 2"
        head2.style.color="orange"
        setTimeout(() => {
            head3.textContent="Head 3"
            head3.style.color="blue"
            setTimeout(() => {
                head4.textContent="Head 4"
                head4.style.color="green"
                setTimeout(() => {
                    head5.textContent="Head 5"
                    head5.style.color="yellow"
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);



function changeTheme(element,text,color,time,callback1,failcallback){
    setTimeout(() => {
        if(element){
        element.textContent=text;
        element.style.color=color;
        if(callback1){
            callback1()
        }
        }else{
            if(failcallback){
                failcallback()
            }else{
            console.log("Please Check Valid element")
            }
        }
    }, time);
}

changeTheme(head1,"Head 1","red",1000,()=>{
    changeTheme(head2,"Head2","orange",1000,()=>{
        changeTheme(head3,"Head 3","green",1000,()=>{
            changeTheme(head4,"Head 4","yellow",1000,()=>{
                changeTheme(head5,"Head 5","purple",1000,()=>{

                },()=>{console.log("Heading Are not Present")})
            },()=>{console.log("Headings Are Not Present")})
        },()=>{console.log("Headings Are Not Present")})
    },()=>{console.log("Headings Are Not Present")})
},()=>{console.log("Headings Are Not Present")})