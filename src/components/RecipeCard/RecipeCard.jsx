'use client';

import s from "@/components/RecipeCard/RecipeCard.module.css"
import Image from "next/image"
import Link from "next/link"
import { IMAGE_PATH } from "@/utils/config"
import IngredientList from "../Recipe/IngredientList"
import TimeBadge from "../UI/TimeBadge/TimeBadge";
import RecipeImage from "../Recipe/RecipeImage";

export default function RecipeCard({slug,image,name,time,description, ingredients}) {
    return (
    <article className={s.recipeCard}>
        <Link href={`recette/${slug}`}>
            <div className={s.headCard}>
                <RecipeImage image={image} name={name}/>
                <div className={s.time}>
                    <TimeBadge time={time} size={"sm"}/>
                </div>
            </div>

            <div className={s.recipeCardContent}>

                <h2>{name}</h2>

                <h3>Recette</h3>

                <p className={s.description}>{description}</p>

                <h3>Ingrédients</h3>
                <IngredientList items={ingredients} columns={2} fontSize={14} />

            </div>
        </Link>
    </article>
  )
}