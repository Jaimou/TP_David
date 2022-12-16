import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../components/CSS/global.css';

const RandomMeal = () => {

    const [meal, setMeal] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const data = await response.json();
            setMeal(data.meals);
        })();
    }, []);

    return (
        <div>
            {meal.map((meal) => {
                return (
                    <div class="random" key={meal.idMeal}>
                        <h2>La recommandation du jour :</h2>
                        <Link to={"/meals/" + meal.idMeal}>
                            <img src={meal.strMealThumb}/>
                        </Link>
                        <Link to={"/meals/" + meal.idMeal}>
                            <h2>{meal.strMeal}</h2>
                        </Link>
                        <h3>{meal.strCategory}</h3>
                    </div>
                );
            })}
        </div>
    );
}

export default RandomMeal;