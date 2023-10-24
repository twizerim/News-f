
const token=window.localStorage.getItem("token")
let foram=document.querySelector(".category")
let forma =document.querySelector(".user")

foram.addEventListener("submit",(e)=>{
    e.preventDefault()

    alert("bakunz")

    const categoryName=document.getElementById("categori").value;
    console.log(categoryName)
})

forma.addEventListener("submit",(e)=>{
    

    alert("sdddfff")
})