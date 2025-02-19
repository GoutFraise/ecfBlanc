const recherche = document.querySelector('#recherche')
const champrecherche = document.querySelector('#champrecherche')
const listeRecherche = document.querySelector('#listeRecherche')
recherche.addEventListener("click",()=>{
    if(champrecherche.value===""){
        alert("le champ est vide")
    }
    else{
        listeRecherche.innerHTML = "";
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${champrecherche.value}`)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                champrecherche.value=""
                for(let i=0;i<data.meals.length;i++){
                    if(data.meals[i].strMealThumb!=null){
                        const article=document.createElement('article');
                        const titre=document.createElement('h3');
                        const img=document.createElement('img');
                        const listeRecherche=document.querySelector("#listeRecherche");
                        titre.textContent=data.meals[i].strMeal;
                        img.setAttribute("src", data.meals[i].strMealThumb);
                        article.appendChild(titre);
                        article.appendChild(img);
                        article.addEventListener("click", ()=>{
                            window.location.replace(`./meal.html?i=${data.meals[i].idMeal}`)
                        })
                        listeRecherche.appendChild(article);
                        
                    }
                } 
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
})
