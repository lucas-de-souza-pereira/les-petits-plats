'use client';

import s from "@/components/RecipeCard/RecipeCard.module.css"
import Image from "next/image"
import Link from "next/link"
import { IMAGE_PATH } from "@/utils/config"
import IngredientList from "../Recipe/IngredientList"
import TimeBadge from "../UI/TimeBadge/TimeBadge";

export default function RecipeCard({slug,image,name,time,description, ingredients}) {
    return (
    <article className={s.recipeCard}>
        <Link href={`recette/${slug}`}>
            <div className={s.headCard}>
                <Image 
                src={IMAGE_PATH+image}
                alt={name}
                fill
                className={s.imageCard}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={s.time}>
                    <TimeBadge time={time} size={"sm"}/>
                </div>
            </div>

            <div className={s.recipeCardContent}>

                <h2>{name}</h2>

                <h3>Recette</h3>

                <p className={s.description}>{description}</p>

                <h3>Ingrédients</h3>

                <div className={"ingredientItem"}>
                    {ingredients.map((item,index)=>(
                        <IngredientList key={index} item={item} index={index}/>
                    ))}
                </div>
            </div>
        </Link>
    </article>
  )
}