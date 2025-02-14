const listLettre = document.querySelector("#first-letter");
const navletter = document.querySelector("#navletter")
for(let i =0;i <26;i++){
    let lettre=String.fromCharCode(97+i);
    const span = document.createElement("span");
    span.textContent=`${lettre} `;
    navletter.appendChild(span);
    span.addEventListener("click",()=>{
        listLettre.innerHTML = "";
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${lettre}`)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                for(let j=0;j<data.meals.length;j++){
                    console.log(data.meals[j].strMeal);
                    console.log(data.meals[j].strMealThumb);
                    const article = document.createElement("article");
                    const h3 = document.createElement("h3");
                    const img = document.createElement("img");
                    h3.textContent=data.meals[j].strMeal;
                    img.setAttribute("src", data.meals[j].strMealThumb);
                    article.appendChild(h3);
                    article.appendChild(img);
                    listLettre.appendChild(article);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    })  
}
   