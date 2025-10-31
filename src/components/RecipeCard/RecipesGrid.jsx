"use client";
import { useTags } from "@/components/Tags/FilterContext";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import s from "./RecipesGrid.module.css";

export default function RecipesGrid() {
  const { filteredRecipes } = useTags()
  return (
    <div className={s.grid}>
      {filteredRecipes.map(r => <RecipeCard key={r.id} {...r} />)}
    </div>
  )
}
