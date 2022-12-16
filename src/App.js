import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListMeals from "./pages/ListMeals";
import ShowMealId from "./pages/ShowMealId";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/meals" element={<ListMeals/>}/>
        <Route path="/meals/:id" element={<ShowMealId/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;