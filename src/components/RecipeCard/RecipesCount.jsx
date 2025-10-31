"use client";
import { useTags } from "../Tags/FilterContext";

export default function RecipesCount() {
  const { filteredRecipes } = useTags()
  const n = filteredRecipes.length

  if (n === 0) return <span>0 recette</span>
  return <span>{n} {n > 1 ? "recettes" : "recette"}</span>
}