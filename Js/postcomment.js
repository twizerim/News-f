const idparams=window.location.href.split("?id=")[1]
const token =window.localStorage.getItem("token")
form =document.querySelector(".ini")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const comment=document.querySelector("#sendcomm").value
    const data={
        comment
    }
    console.log(data)
    const postman={
        method:"POST",
        headers:{
            "auth-token":token,
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    }

    fetch(`https://gleaming-leggings-bee.cyclic.app/boy/comment/${idparams}`,postman)
    .then((resp)=>{
        return resp.json()
    })
    .then((data)=>{
        window.location.href="./SiNews.html"
    })
    .catch((err)=>{
        alert(err)
    })
})