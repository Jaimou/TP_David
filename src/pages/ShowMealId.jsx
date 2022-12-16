import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowMealId = () => {

    const { id } = useParams();
    const [meal, setMeal] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            setMeal(data.meals[0]);
        })();
    }, [id]);

    return (
        <div>
            <h1>Détails du plat :</h1>
            {meal && (
                <div>
                    <h2>{meal.strMeal}</h2>
                    <h3>{meal.strCategory}</h3>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <p>{meal.strInstructions}</p>
                </div>
            )}
        </div>
    );
}

export default ShowMealId;