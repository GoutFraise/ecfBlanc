let parametre=window.location.search;
fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php${parametre}`)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            if(data.meals[0].strMealThumb!=null){
                const article=document.createElement('article');
                const titre=document.createElement('h2');
                const region=document.createElement('span');
                const categorie=document.createElement('span');
                const preparation=document.createElement('p');
                const img=document.createElement('img');
                const recette=document.querySelector("#recette");
                titre.textContent=data.meals[0].strMeal;
                region.textContent=data.meals[0].strArea;
                categorie.textContent=data.meals[0].strCategory;
                preparation.textContent=data.meals[0].strInstructions;
                img.setAttribute("src", data.meals[0].strMealThumb);
                article.appendChild(titre);
                article.appendChild(region);
                article.appendChild(categorie);
                article.appendChild(preparation);
                article.appendChild(img);
                recette.appendChild(article);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
/*detail
strArea
strCategory
strInstructions
strMeal
strMealThumb
*/