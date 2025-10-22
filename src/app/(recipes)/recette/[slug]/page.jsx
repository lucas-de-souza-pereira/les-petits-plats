import recipes from  "@/data/recipes.json"

export default async function RecipePage({params}) {
    
    const {slug} = await params
    const r = recipes.find(x => x.slug === slug)

  console.log("bb"+r.id)
    return (
    <div>page</div>
  )
}