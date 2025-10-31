"use client";

import FilterCard from "./FilterCard";
import Tag from "../Tags/Tag";
import { useTags } from "./FilterContext";
import { useState } from "react";
import RecipesCount from "../RecipeCard/RecipesCount";
import s from "@/components/Tags/FiltersBar.module.css"

export default function FiltersBar() {
  const { selected } = useTags();
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(curr => (curr === id ? null : id));


  return (
    <>
      <div className={s.filters}>
        <div className={s.column}>
          <div className={s.row}>
            <FilterCard
              type="ingredients"
              label="Ingrédients"
              isOpen={openId === "ingredients"}
              onToggle={() => toggle("ingredients")}
            />
            <FilterCard
              type="appliances"
              label="Appareils"
              isOpen={openId === "appliances"}
              onToggle={() => toggle("appliances")}
            />
            <FilterCard
              type="ustensils"
              label="Ustensiles"
              isOpen={openId === "ustensils"}
              onToggle={() => toggle("ustensils")}
            />
          </div>

          {/* rangée des tags sélectionnés */}
          <div className={s.tags}>
            {selected.ingredients.map((v) => (
              <Tag key={`ing-${v}`} type="ingredients">{v}</Tag>
            ))}
            {selected.appliances.map((v) => (
              <Tag key={`app-${v}`} type="appliances">{v}</Tag>
            ))}
            {selected.ustensils.map((v) => (
              <Tag key={`ust-${v}`} type="ustensils">{v}</Tag>
            ))}
          </div>
          </div>
        <div className={s.counter} style={{ minWidth: 120, textAlign: "right" }}>
          <RecipesCount />
        </div>
      </div>


    </>
  );
}
