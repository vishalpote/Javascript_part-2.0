const url="https://jsonplaceholder.typicode.com/posts"

function sendrequest(method,url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()

        xhr.open(method,url);
            xhr.onload=()=>{
                if(xhr.status<=200 && xhr.status<300){
                    // const data=JSON.parse(xhr.response);
                    resolve(xhr.response)
                }
                else{
                    reject("Error Occured")
                }
            }
            xhr.onerror=function(){
                reject(new Error("Something went wrong"))
            }
        xhr.send()
    })
}

// console.log(sendrequest("GET",url))
const xyz=sendrequest("GET",url)
xyz.then((response)=>{
   const data=JSON.parse(response)
//    console.log(data)
   return data

})
.then((data)=>{
   const id=data[3].id;
   return id
}).then((id)=>{
    const url2=`${url}/${id}`;
    return sendrequest("GET",url2)
}).then((newresp)=>{
    const data2=JSON.parse(newresp)
    console.log(data2)
})