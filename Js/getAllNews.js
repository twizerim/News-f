


const newsIndex = document.querySelector(".news")
const spinner = document.querySelector(".spinner");
spinner.style.display = "block";
newsIndex.style.display = "none";


fetch("https://stormy-plum-sawfish.cyclic.cloud/boy/news/news")

.then((Response)=>{
    return Response.json()
})

.then((Jant)=>{
    Jant.data.map((news)=>{
        spinner.style.display = "none";
        newsIndex.style.display = "grid";
       
        newsIndex.innerHTML +=`
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