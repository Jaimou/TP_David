const ShowMeal = () => {

    const mealData = props.meal;

    const getIngredients = () => {
        const ingredients = [];
        for (let i=1; i<=15; i++) {
            if (mealData['strIngredient'+i]) {
                ingredients.push(mealData['strIngredient'+i]);
            }
        }
        return ingredients;
    }

    return (
        <div>
            <h1>{mealData.strMeal}</h1>
            <h3>{mealData.strCategory}</h3>
            <img src={mealData.strMealThumb}/>
            <p>Liste des ingrédients du plat :</p>
            {getIngredients().map((ingredient, index) => {
                return (
                    <div key={index}>
                        <ul>
                            <li>{ingredient}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    );
}

export default ShowMeal;