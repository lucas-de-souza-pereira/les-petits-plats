import recipes from  "@/data/recipes.json"
import { notFound } from "next/navigation"

import s from '@/app/(recipes)/(with-hero)/recette/[slug]/recipe.module.css'

import RecipeImage from "@/components/Recipe/RecipeImage"
import TimeBadge from "@/components/UI/TimeBadge/TimeBadge"
import IngredientList from "@/components/Recipe/IngredientList"
import ToolList from "@/components/Recipe/ToolList"

export default async function RecipePage({params}) {
    
    const {slug} = await params
    const r = recipes.find(x => x.slug === slug)

    if (!r) {return notFound()}

    return (
    <article className={s.page}>

        <div className={s.grid}>

            <div className={s.image}>
            <RecipeImage image={r.image} name={r.name}/>
            </div>

            <div className={s.info}>

                <h1 className={s.title}>{r.name}</h1>

                <section>
                    <h2 className={s.sectionTitle}>Temps de préparation</h2>
                    <TimeBadge time={r.time} size={"lg"}/>
                </section>

                <section>
                    <h2 className={s.sectionTitle}>Ingrédients</h2>
                    <IngredientList items={r.ingredients} columns={3} fontSize={16}/>
                </section>

                <section>
                    <h2 className={s.sectionTitle}>Ustensiles nécessaires</h2>
                    <ToolList items={r.ustensils} fontSize={16}/>
                </section>

                <section>
                    <h2 className={s.sectionTitle}>Appareils nécessaires</h2>
                    <ToolList items={r.appliance} fontSize={16}/>
                </section>

                <section>
                    <h2 className={s.sectionTitle}>Recette</h2>
                    <p>{r.description}</p>
                </section>
            </div>
        </div>
    </article>

  )
}