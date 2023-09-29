const password=document.querySelector("#password")
const togglepassword=document.querySelector("#togglepassword")

togglepassword.addEventListener("click",function(e){
    
    const type = password.getAttribute("type")==="password" ? "text":"password";
    password.setAttribute("type",type);


})