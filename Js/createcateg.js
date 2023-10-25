
const token=window.localStorage.getItem("token")
let foram=document.querySelector(".category")
// let forma =document.querySelector(".user")

foram.addEventListener("submit",(e)=>{
    e.preventDefault()

    const categoryName=document.getElementById("categori").value;
    const data={
        categoryName
    }

    const postman={
        method:"POST",
       headers: {
        "auth-token":token,
        "Content-Type": "application/json",
       },
       body:JSON.stringify(data)
    }

    fetch("https://gleaming-leggings-bee.cyclic.app/boy/category",postman)

    .then((resp)=>{
        return resp.json()
    })

    .then((data)=>{
        alert(data.message)
    })
    .catch((error)=>{
        alert(error)
    })
    
})