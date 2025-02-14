const recherche = document.querySelector('#recherche')
const champrecherche = document.querySelector('#champrecherche')
const listeRecherche = document.querySelector('#listeRecherche')
recherche.addEventListener("click",()=>{
    if(champrecherche.value===""){
        alert("le champ est vide")
    }
    else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${champrecherche.value}`)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
})
