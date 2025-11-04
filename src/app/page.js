
import RecipesGrid from "@/components/RecipeCard/RecipesGrid";

import recipes from "@/data/recipes.json"


import Hero from "@/components/Header/Hero";
import SearchBar from "@/components/UI/SearchBar/SearchBar";

import { TagsProvider } from "@/components/Tags/FilterContext"; 
import Filtersbar from "@/components/Tags/FiltersBar";

export default function Home() {
  return (
  <>
    <TagsProvider data={recipes}>
      <Hero title={<>DÉCOUVREZ NOS RECETTES<br/>DU QUOTIDIEN, SIMPLES ET DÉLICIEUSES</>}>
        <SearchBar />
      </Hero>

      <main>
        < Filtersbar />
        <RecipesGrid />
      </main>
    </TagsProvider>
  </>
  );
}
