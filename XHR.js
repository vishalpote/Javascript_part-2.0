
const url="https://jsonplaceholder.typicode.com/posts"
const xhr=new XMLHttpRequest()
// console.log(xhr)
xhr.open("GET",url)


// xhr.onreadystatechange=function(){
//     if(xhr.readyState===4){
//         const res=xhr.response;
//         const data=JSON.parse(res)
//         console.log(typeof data)
//     }
// }

xhr.onload=function(){
    const res=xhr.response;
    const data=JSON.parse(res);
    console.log(data);
    
}

xhr.send()