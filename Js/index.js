const Password=document.querySelector("#password")
const togglepassword=document.querySelector("#togglepassword")

togglepassword.addEventListener("click",function(e){
    
    const type = password.getAttribute("type")==="password" ? "text":"password";
    password.setAttribute("type",type);


})
function ye(){
     const comment = document.querySelector('.comment').style.display="block"
   
}