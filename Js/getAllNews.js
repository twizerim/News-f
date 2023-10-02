

const spinner = document.querySelector(".spinner")
const NewsIndex = document.querySelector(".news")
spinner.style.disply= "block";
NewsIndex.style.disply= "none";

fetch("https://stormy-plum-sawfish.cyclic.cloud/boy/news/news")

.then((Response)=>{
    return Response.json()
})

.then((Jant)=>{
    Jant.data.map((news)=>{
        spinner.style.disply= "none";
        NewsIndex.style.disply= "grid"

        NewsIndex.innerHTML +=`
        <div class="card">
        <img src="${news.newsimage[0]}"/>
        <div class="text">
            <i>
            <p class="data">${news.publishedDate}</p> 
            </i>
            <h3>${news.newstytle}</h3>
            <p>${news.newssammary}</p>
        </div>
        <div class="butt">
        <a href="../Newsletter/SiNews.html?id=${news._id}">Read more..</a>
        </div>
         </div>
        `;
    })
})