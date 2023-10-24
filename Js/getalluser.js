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
        <td class="data">${index +1}</td>
        <td class ="data">${user.firstName}</td>
        <td >${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.role}</td>
        <td>${user.creatadAt}</td>

        </tr>
        `
    })
})
.catch((err)=>{
    alert(err)
})