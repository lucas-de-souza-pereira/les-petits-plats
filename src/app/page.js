
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import FilterCard from "@/components/FilterCard/FilterCard";

import RecipeCard from "@/components/RecipeCard/RecipeCard";

import recipes from "@/data/recipes.json"

import "./styles.css";


export default function Home() {
  return (
    <>
    <Header/>

    <main>
        <p>les petits plats home</p>
        <FilterCard/>

        <div className={styles.recipeCard}>
          
          {recipes.map((recipe)=>(
            <RecipeCard key={recipe.id} {...recipe}/>
          ))}

        </div>
    </main>

    <Footer/>
    </>
  );
}
