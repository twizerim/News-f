
const comment = document.querySelector(".comment-card")

fetch("https://gleaming-leggings-bee.cyclic.app/boy/comment")

.then((resp)=>{
    return resp.json()
})
.then((data)=>{
    data.data.map((date)=>{
        comment.innerHTML += `
        <div class="onecomment">
        <p>${date.postedAt}</p>
        <span>${date.comment}</span>
        </div>
        
        `
    })
})
