
function submit(){

    const idParams=window.location.href.split("?id=")[1]
    const token=window.localStorage.getItem("token")

    const postman={
        headers:{
            "auth-token":token
        }
    }
    fetch(`https://gleaming-leggings-bee.cyclic.app/boy/news/like/${idParams}`,postman)
    .then((resp)=>{
        return resp.json()
    })
    .then((data)=>{
        alert(data.message)
    })
    .catch((err)=>{
        alert(err)
    })

}