import logo from './logo.svg';
import './App.css';
import FoodCategories from './components/FoodCategories'
import RecipeContainer from './components/RecipeContainer'

function App() {
  return (
    <div className="App">
      <FoodCategories />
      <RecipeContainer />
      
    </div>
  );
}

export default App;
