
const message=document.querySelector(".message")

fetch(`https://gleaming-leggings-bee.cyclic.app/boy/message/message`,{
    headers:{
        "auth-token":token
    }  
}).then((resp)=>{
    return resp.json()
})
.then((data)=>{
    
    data.data.map((data)=>{

        message.innerHTML +=`
        <div class="card1">
        <p>${data.sendAt}</p>
        <h2>${data.names}</h2>
        <h3>${data.email}</h3>
        <span>${data.messages}</span>
        </div>
        `
    })
   
})
.catch((err)=>{
    alert(err)
})