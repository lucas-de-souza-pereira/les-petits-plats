"use client";
import { useTags } from "@/components/Tags/FilterContext";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import s from "./RecipesGrid.module.css";

export default function RecipesGrid() {
  const { filteredRecipes, selected ,liveQ } = useTags()

  const queryNotFound = (liveQ && liveQ.trim()) || (selected.keywords.at(-1) ?? ""); 
  return (
    <>
    {filteredRecipes.length === 0 && (<p style={{textAlign:"center"}}>Aucune recette ne contient "{queryNotFound}", vous pouvez chercher « tarte aux pommes », « poisson », etc. </p>)}
    <div className={s.grid}>
      {filteredRecipes.map(r => <RecipeCard key={r.id} {...r} />)}
    </div>
    </>
  )
}
