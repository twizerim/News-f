
// const idparams = window.location.href.split("?id=")[1]

// function put(){
//     const like=document.querySelector(".likes")
//     if(like){
//         alert("birakunda")
//     }
  
// }

function putt(){
    const like=document.getElementById("likes");
    const idparams = window.location.href.split("?id=")[1]
    const postman={
        method:"PUT",
        headers:{
            "auth-token":token
        }
    }
    if(like){
        
        fetch(``)
    }
}