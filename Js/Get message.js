
const message=document.querySelector(".message")
const spinner = document.querySelector(".spinner");
spinner.style.display = "block";
message.style.display = "none";

fetch(`https://gleaming-leggings-bee.cyclic.app/boy/message/message`,{
    headers:{
        "auth-token":token
    }  
}).then((resp)=>{
    return resp.json()
})
.then((data)=>{
    
    data.data.map((date)=>{
        spinner.style.display = "none";
        message.style.display = "grid";

        message.innerHTML +=`
        <div class="card1">
        <p>${date.sendAt}</p>
        <h2>${date.names}</h2>
        <h3>${date.email}</h3>
        <span>${date.messages}</span>
        </div>
        `
    })
   
})
.catch((err)=>{
    alert(err)
})