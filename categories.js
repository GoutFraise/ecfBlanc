
const listcate = document.querySelector("#categories");
const listPlat = document.querySelector("#ListePlat");
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
                const p = document.createElement("p");
                p.textContent=data.categories[i].strCategory;
                listcate.appendChild(p);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
categorielist()
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
             let parametre=(window.location.search);
            for(let i=0;i<data.categories.length;i++){
                if(parametre.includes(data.categories[i].strCategory)){
                    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.categories[i].strCategory}`)
                        .then(response => {
                            if (!response.ok) {
                            throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then(vignette => {
                            for(let j=0;j<vignette.meals.length;j++){
                                const article = document.createElement("article");
                                const h3 = document.createElement("h3");
                                const img = document.createElement("img");
                                h3.textContent=vignette.meals[j].strMeal;
                                img.setAttribute("src", vignette.meals[j].strMealThumb);
                                article.appendChild(h3);
                                article.appendChild(img);
                                listPlat.appendChild(article);
                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
