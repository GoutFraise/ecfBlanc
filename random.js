
const boutonPlat = document.querySelector('#PlatAleatoire')
const NomPlat = document.querySelector('#NomPlat')
const DetailPlat = document.querySelector('#DetailPlat')
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
            NomPlat.textContent=data.meals[0].strMeal
            DetailPlat.textContent=data.meals[0].strInstructions
        })
        .catch(error => {
            console.error('Error:', error);
        });
})
