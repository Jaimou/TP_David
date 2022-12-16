import { useState } from "react";
import HomeMeal from "./HomeMeal";

const SearchedMeal = () => {

    const [meal, setMeal] = useState([]);
    const [searchedMeal, setSearchedMeal] = useState("");

    const handleClick = async() => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedMeal}`);
        const data = await response.json();
        setMeal(data.meals);
    };

    return (
        <div>
            <input type="text" placeholder="Le nom du plat recherché" size="25" onChange={e => setSearchedMeal(e.target.value)}/>
            <button onClick = {handleClick}>Chercher</button>
            <ul>
                {meal.map((meal) => (
                    <HomeMeal meal={meal}/>
                ))}
            </ul>
        </div>
    );
}

export default SearchedMeal;