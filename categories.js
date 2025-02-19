
const listcate = document.querySelector("#categories");

const nomCategorie = document.querySelector("#NomCategorie");

function categorielist(){
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            
            for(let i=0;i<data.categories.length;i++){
                const article=document.createElement('article');
                const titre=document.createElement('h2');
                const img=document.createElement('img');
                titre.textContent=data.categories[i].strCategory;
                img.setAttribute("src", data.categories[i].strCategoryThumb);
                article.appendChild(titre);
                article.appendChild(img);
                console.log(data.categories[i].strCategory)
                article.addEventListener("click", ()=>{
                    
                    window.location.replace(`./categorie.html?c=${data.categories[i].strCategory}`)

                })
                listcate.appendChild(article);
                
            }/*strCategoryThumb*/
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
categorielist()


