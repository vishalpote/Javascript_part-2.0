const url="https://jsonplaceholder.typicode.com/posts"

const xhr=new XMLHttpRequest()

xhr.open("GET",url)
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        const data=JSON.parse(xhr.response)
        // console.log(data)
        const id=data[3].id
        const xhr2=new XMLHttpRequest()
        const url2=`${url}/${id}`
        console.log(url2)
        xhr2.open("GET",url2)
        xhr2.onload=()=>{
           
                const data2=JSON.parse(xhr2.response)
                console.log(data2)
            
        }
        xhr2.send()
    }else{
        console.log("something went to wrong!");
    }
}


xhr.onerror=()=>{
    console.log("Network Error")
}
xhr.send()