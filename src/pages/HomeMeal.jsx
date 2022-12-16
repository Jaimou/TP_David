import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../components/CSS/global.css';
import ListMeals from "./ListMeals";

const HomeMeal = () => {

    const [meals, setMeals] = useState([]);
    
    useEffect(() => {
        (async () => {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
            const data = await response.json();
            setMeals(data.meals);
        })();
    }, []);

    return (
        <>
            <div class="troisPlatsDuHome">
                {meals.slice(0, 3).map((meal) => (
                    <Link to={"/meals/" + meal.idMeal}>
                        <img src={meal.strMealThumb} />
                        <h1>{meal.strMeal}</h1>
                        <h3>{meal.strCategory}</h3>
                    </Link>
                ))}
            </div>
                
            <div class="buttonRecettes">
                <Link to={"/meals/"}>
                    <button id="buttonRecettes">Voir toutes les recettes</button>
                </Link>
            </div>
        </>
    );
}

export default HomeMeal;