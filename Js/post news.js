
const token = window.localStorage.getItem("token")
const form=document.querySelector(".news-form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const newsmaintytle =document.querySelector("#newsmaintytle").value
    const newstytle=document.querySelector("#newstytle").value
    const newssammary=document.querySelector("#newssammary").value
    const newsdiscription=document.querySelector("#newsdiscription").value
    const newsimage=document.querySelector("#newsimage").value
    const categorys=document.querySelector("#categorys").value
    const publishername=document.querySelector("#publishername").value
    
    const data={
        newsmaintytle,
        newstytle,
        newssammary,
        newsdiscription,
        newsimage,
        categorys,
        publishername
    }

    const postman={
        method:"POST",
        headers:{
            "auth-token":token,
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    }

    fetch("https://gleaming-leggings-bee.cyclic.app/boy/news/news",postman)
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