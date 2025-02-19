function meal(para){
fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${para}`)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            
            if(data.meals[0].strMealThumb!=null){
                const article=document.createElement('article');
                const titre=document.createElement('h3');
                const region=document.createElement('span');
                const categorie=document.createElement('span');
                const img=document.createElement('img');
                const recette=document.querySelector("#platFavori");
                titre.textContent=data.meals[0].strMeal;
                region.textContent="Region : "+data.meals[0].strArea;
                categorie.textContent="Categorie : " +data.meals[0].strCategory;
                region.setAttribute("id","regionFav")
                categorie.setAttribute("id","categorieFav")
                img.setAttribute("src", data.meals[0].strMealThumb);
                article.appendChild(titre);
                article.appendChild(region);
                article.appendChild(categorie);
                article.appendChild(img);
                recette.appendChild(article);
            }
        })
        .catch(error => {
            console.error('Error:', error);
                });
}
meal(52860)
meal(52813)
meal(53081)