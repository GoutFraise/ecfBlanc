
const boutonPlat = document.querySelector('#PlatAleatoire');
const recette=document.querySelector("#recetteAleatoire");
boutonPlat.addEventListener('click',async()=>{
    recette.innerHTML = "";
    recette.style.display = 'grid'
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if(data.meals[0].strMealThumb!=null){
                const titre=document.createElement('h2');
                const region=document.createElement('span');
                const categorie=document.createElement('span');
                const preparation=document.createElement('p');
                const img=document.createElement('img');
                titre.textContent=data.meals[0].strMeal;
                region.textContent="Region : "+data.meals[0].strArea;
                region.setAttribute("id","regionRandom")
                categorie.setAttribute("id","categorieRandom")
                categorie.textContent="Categorie : " +data.meals[0].strCategory;
                preparation.textContent=data.meals[0].strInstructions;
                img.setAttribute("src", data.meals[0].strMealThumb);
                recette.appendChild(titre);
                recette.appendChild(region);
                recette.appendChild(categorie);
                recette.appendChild(preparation);
                recette.appendChild(img);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
})
