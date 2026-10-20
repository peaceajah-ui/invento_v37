import { Nav } from "./mealdb_components/Nav";
import { Meal } from "./mealdb_components/Meal";
import { useEffect, useState } from "react";

const MealDb = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);

  function fetchMeals() {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.meals)) {
          setMeals(data.meals);
          setError(false);
        } else {
          setMeals([]);
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setMeals([]);
        setError(true);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <div className="py-10 bg-blue-100 text-center min-h-100">
      <h1>Welcome To MealDb App</h1>
      <Nav />
      <Meal error={error} loading={loading} meals={meals} />
    </div>
  );
};

export default MealDb;