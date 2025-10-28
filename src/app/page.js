
import styles from "./page.module.css";

import FilterCard from "@/components/FilterCard/FilterCard";

import RecipeCard from "@/components/RecipeCard/RecipeCard";

import recipes from "@/data/recipes.json"

import "./styles.css";

import Hero from "@/components/Header/Hero";
import SearchBar from "@/components/UI/SearchBar/SearchBar";

import LabelSearch from "@/components/FilterCard/LabelSearch";

export default function Home() {
  return (
    <>
      <Hero title={<>DÉCOUVREZ NOS RECETTES<br/>DU QUOTIDIEN, SIMPLES ET DÉLICIEUSES</>}>
        <SearchBar/>
      </Hero>

    <main>
        <p>les petits plats home</p>
        <FilterCard/>
        <LabelSearch>Test</LabelSearch>
        <div className={styles.recipeCards}>
          
          {recipes.map((recipe)=>(
            <RecipeCard key={recipe.id} {...recipe}/>
          ))}

        </div>
    </main>

    </>
  );
}
