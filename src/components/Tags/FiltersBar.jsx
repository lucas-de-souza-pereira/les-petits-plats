"use client";

import FilterCard from "./FilterCard";
import Tag from "../Tags/Tag";
import { useTags } from "./FilterContext";
import RecipesCount from "../RecipeCard/RecipesCount";
import s from "@/components/Tags/FiltersBar.module.css"

export default function FiltersBar() {
  const { selected, upper } = useTags()

  return (
    <>
      <div className={s.filters}>
          <div className={s.row}>
            <FilterCard
              type="ingredients"
              label="Ingrédients"
            />
            <FilterCard
              type="appliances"
              label="Appareils"
            />
            <FilterCard
              type="ustensils"
              label="Ustensiles"
            />
          </div>

          {/* rangée des tags sélectionnés */}
          <div className={s.tags}>
            {selected.ingredients.map((v) => (
              <Tag key={`ing-${v}`} type="ingredients">{upper(v)}</Tag>
            ))}
            {selected.appliances.map((v) => (
              <Tag key={`app-${v}`} type="appliances">{upper(v)}</Tag>
            ))}
            {selected.ustensils.map((v) => (
              <Tag key={`ust-${v}`} type="ustensils">{upper(v)}</Tag>
            ))}
            {selected.keywords.map((v) => (
              <Tag key={`ust-${v}`} type="keywords">{upper(v)}</Tag>
            ))}
          </div>

        <div className={s.counter} >
          <RecipesCount />
        </div>
    </div>

    </>
  );
}
