import { useEffect, useState } from "react";
import HomeMeal from "./HomeMeal";
import '../components/CSS/global.css';

const ListMeals = () => {

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
            <div class="tousLesPlats">
                {meals.map((meal) => (
                    <>
                    <img src={meal.strMealThumb}/>
                    <h1>{meal.strMeal}</h1>
                    <h3>{meal.strCategory}</h3>
                    </>
                ))}
            </div>
        </>
    );
}

export default ListMeals;