
const getOneNews = document.querySelector(".singleNews-container")
const navcategory =document.querySelector(".category")
const commentss =document.querySelector(".comment-card")


const idParams=window.location.href.split("?id=")[1]
const spinner = document.querySelector(".spinner")
spinner.style.display="block"
getOneNews.style.display="none"
navcategory.style.display="none"
commentss.style.display="none"

fetch(`https://stormy-plum-sawfish.cyclic.cloud/boy/news/${idParams}`)

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
    <div class="discription">
    <div class="list">
                <div class="motion">
                <li><i class="fa-solid fa-thumbs-up" style="color: #ffffff;"></i></li>
                <li>50</li>
                <div class="moti">
                    <li><i class="fa-solid fa-thumbs-down" style="color: #ffffff;"></i></li>
                    <li>12</li>
                </div>
                </div>
                <div class="motion">
                <li><i class="fa-regular fa-comment" style="color: #ffffff;" onclick="ye()"></i></li>
                <li>23</li>
                </div>
            </div>
    <div class="text">
    <h1 class="tytle">${data.data.newstytle}</h1>
    <p>${data.data.newsdiscription}</p>
    </div>
    </div>
    </div>
    `
    navcategory.innerHTML =`<div class="category">${data.data.categorys.categoryName}</div>`
    commentss.innerHTML +=`
    <p>${data.data.comments.postedAt}</p>
    <span>${data.data.comments.comment}</span>
    `
})