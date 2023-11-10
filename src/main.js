function buttonOnclicked() {
    var food = document.getElementById("food_input").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            var strMealThumb = data.meals[0].strMealThumb;
            var mealImage = document.createElement("img");
            mealImage.src = strMealThumb;
            var strSource = data.meals[0].strSource;
            var sourceLink = document.createElement("a"); // Create an anchor element
            sourceLink.href = strSource; // Set the href attribute to the source URL
            sourceLink.textContent = "Click here"; // Set the link text
            sourceLink.target = "_blank"; // Open the link in a new window or tab

            if (data.meals) {
                var recipe = data.meals[0].strInstructions;
                var ingredients = [];

                // Collect all the ingredients
                for (let i = 1; i <= 20; i++) {
                    const ingredient = data.meals[0][`strIngredient${i}`];
                    if (ingredient) {
                        ingredients.push(ingredient);
                    }
                }

                document.getElementById("foodName").innerHTML = `Food name : ${data.meals[0].strMeal} <br>`;
                document.getElementById("foodName").appendChild(mealImage);
                document.getElementById("foodRecipe").innerHTML = `Recipe : <br> ${recipe}`;
                document.getElementById("foodIngredients").innerHTML = `Ingredients: ${ingredients.join(', <br>')}`;
                document.getElementById("foodURL").innerHTML = `Source : <br> ${strSource}`;
                document.getElementById("foodURL").innerHTML = "Source: ";
                document.getElementById("foodURL").appendChild(sourceLink); 

            } else {
                document.getElementById("foodName").innerHTML = "Food not found.";
                document.getElementById("foodRecipe").innerHTML = "Recipe not found.";
                document.getElementById("foodIngredients").innerHTML = "Ingredients not found.";
                document.getElementById("foodURL").innerHTML = `Source not found`;
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

function displayfood(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=sushi`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);


            var strCategory = data.meals[0].strCategory;
            var strArea = data.meals[0].strArea;
            var strMealThumb = data.meals[0].strMealThumb;
            var mealImage = document.createElement("img");
            mealImage.src = strMealThumb;


                document.getElementById("displayName1").innerHTML = `Name : ${data.meals[0].strMeal} <br>`;
                document.getElementById("displayName1").appendChild(mealImage);
                document.getElementById("displayCategory1").innerHTML = `Category : ${data.meals[0].strCategory} <br>`;
                document.getElementById("displayArea1").innerHTML = `Made by : ${data.meals[0].strArea} <br>`;
        }) 
}

function displayfood2(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=lasagna`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);


            var strCategory = data.meals[0].strCategory;
            var strArea = data.meals[0].strArea;
            var strMealThumb = data.meals[0].strMealThumb;
            var mealImage = document.createElement("img");
            mealImage.src = strMealThumb;


                document.getElementById("displayName2").innerHTML = `Name : ${data.meals[0].strMeal} <br>`;
                document.getElementById("displayName2").appendChild(mealImage);
                document.getElementById("displayCategory2").innerHTML = `Category : ${data.meals[0].strCategory} <br>`;
                document.getElementById("displayArea2").innerHTML = `Made by : ${data.meals[0].strArea} <br>`;

        }) 
}

function displayfood3(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=nasi_lemak`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);


            var strCategory = data.meals[0].strCategory;
            var strArea = data.meals[0].strArea;
            var strMealThumb = data.meals[0].strMealThumb;
            var mealImage = document.createElement("img");
            mealImage.src = strMealThumb;


                document.getElementById("displayName3").innerHTML = `Name : ${data.meals[0].strMeal} <br>`;
                document.getElementById("displayName3").appendChild(mealImage);
                document.getElementById("displayCategory3").innerHTML = `Category : ${data.meals[0].strCategory} <br>`;
                document.getElementById("displayArea3").innerHTML = `Made by : ${data.meals[0].strArea} <br>`;
        }) 
}

function toggleNav() {
    var sidenav = document.getElementById("sidenav");
    if (sidenav.style.width === "0px" || sidenav.style.width === "") {
        sidenav.style.width = "250px";
    } else {
        sidenav.style.width = "0";
    }
}
  