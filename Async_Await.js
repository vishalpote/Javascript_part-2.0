const url="https://jsonplaceholder.typeicode.com/posts"

async function getposts(){
    const response=await fetch(url)
    if(!response.ok){
        throw new Error("Something Went Wrong")
    }
    const data=await response.json()
    // console.log(data)
    return data
}

getposts().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})