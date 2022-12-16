import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import HomeMeal from "./HomeMeal";
import ListMeals from "./ListMeals";
import RandomMeal from "./RandomMeal";
import '../components/CSS/global.css';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <RandomMeal />
                <div class="toutesLesRecettes">
                    <h1>Toutes les recettes</h1>
                </div>
                <HomeMeal />
            </main>
            <Footer />
        </>
    );
}

export default Home;