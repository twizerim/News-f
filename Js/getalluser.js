const token=window.localStorage.getItem("token")
const table = document.querySelector("table")



fetch(`https://gleaming-leggings-bee.cyclic.app/boy/user`,{
headers:{
    "auth-token":token
}
})
.then((resp)=>{
    return resp.json()
})
.then((data)=>{
    data.data.map((user,index)=>{
        table.innerHTML +=`
        <tr>
        <td>${index +1}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.role}</td>
        <td>${user.creatadAt}</td>
        <td><button class="update" id="${user._id}" style="color:green;padding:0.3rem;font-size:1.2rem" >Update</button></td>
        <td><button class="delete" style="color:red;padding:0.3rem;font-size:1.2rem">Delete</button></td>
        </tr>
        `
    })
    const updateselect =document.querySelectorAll(".update")
    const updateForm =document.querySelector(".updata")
    for(let i=0;i<updateselect.length;i++){
        updateselect[i].onclick=function(){
            updateForm.style.display = "block";

            let tr=this.parentElement.parentElement
            let td=tr.getElementsByTagName("td")
            let id=updateselect[i].getAttribute("id")
            update.value=td[5].innerHTML

            updateForm.addEventListener("submit",()=>{
                const datass={
                    role:update.value
                }
                const postman={
                    method:"PATCH",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(datass)

                }
                fetch(`https://gleaming-leggings-bee.cyclic.app/boy/user/${id}`,postman)
                .then((resp)=>{
                    return resp.json()
                })
                .then((data)=>{
                    alert(data.message)
                })
                .catch((err)=>{
                    alert(err)
                })
                
            })

        }
    }
})

.catch((err)=>{
    alert(err)
})


