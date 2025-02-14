const recherche = document.querySelector('#recherche')
const champrecherche = document.querySelector('#champrecherche')
const listeRecherche = document.querySelector('#listeRecherche')
recherche.addEventListener("click",()=>{
    if(champrecherche.value===""){
        alert("le champ est vide")
    }
    else{
        alert("le champ n'est pas  vide")
    }
})
