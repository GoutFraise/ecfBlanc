
const boutonPlat = document.querySelector('#PlatAleatoire');
const NomPlat = document.querySelector('#NomPlat');
const DetailPlat = document.querySelector('#instruction');
const categorie = document.querySelector('#categorie');
const region = document.querySelector('#region');
const img = document.querySelector('#img');
boutonPlat.addEventListener('click',async()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            NomPlat.textContent=data.meals[0].strMeal;
            DetailPlat.textContent=data.meals[0].strInstructions;
            region.textContent=data.meals[0].strArea;
            categorie.textContent=data.meals[0].strCategory;
            img.setAttribute("src", data.meals[0].strMealThumb);
        })
        .catch(error => {
            console.error('Error:', error);
        });
})
