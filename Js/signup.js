
let form=document.querySelector(".form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let firstName=document.querySelector("#firstName").value;
    let lastName=document.querySelector("#lastName").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    let confirmpassword=document.querySelector("#confrimpassword").value
    const data={

        firstName,
        lastName,
        email,
        password,
        confirmpassword
    }
    const postman={
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
    fetch(`https://gleaming-leggings-bee.cyclic.app/boy/user/user`,postman)
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