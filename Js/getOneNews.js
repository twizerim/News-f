
const getOneNews = document.querySelector(".singleNews-container")
const navcategory =document.querySelector(".category")
const commentss =document.querySelector(".comment-card")
const likes=document.querySelector(".counting")
const dislikes =document.querySelector(".countin")
const comm =document.querySelector(".counti")
const comment = document.querySelector(".comment-card")
const idParams=window.location.href.split("?id=")[1]
const spinner = document.querySelector(".spinner")
spinner.style.display="block"
getOneNews.style.display="none"
navcategory.style.display="none"
commentss.style.display="none"

fetch(`https://gleaming-leggings-bee.cyclic.app/boy/news/${idParams}`)

.then((resp)=>{
    return resp.json()
})

.then((data)=>{
    spinner.style.display="none"
    getOneNews.style.display="block"
    navcategory.style.display="block"
    commentss.style.display="grid"

    
    getOneNews.innerHTML = `
    <div class="communit">
    <div class="news-container">
    <img src="${data.data.newsimage[0]}"/>
    <div class="smaller">
    <p class="date">${data.data.publishedDate}</p>
    <h1 class="mainTytle">${data.data.newsmaintytle}</h1>
    <p class="sammury">${data.data.newssammary}</p>
    </div>
    </div>
    <div class="text">
    <h1 class="tytle">${data.data.newstytle}</h1>
    <p>${data.data.newsdiscription}</p>
    </div>
    </div>
    `
    likes.innerHTML=`<li>${data.data.likes.length}</li>`
    dislikes.innerHTML=`<li>${data.data.dislikes.length}</li>`
    comm.innerHTML=`<li>${data.data.comments.length}</li>`
    navcategory.innerHTML =`<div class="category">${data.data.categorys.categoryName}</div>`

    data.data.comments.map((date)=>{

        comment.innerHTML+=`
    <div class="onecomment">
         <p>${date.postedAt}</p>
         <span>${date.comment}</span>
         </div>
    `
    })
})
