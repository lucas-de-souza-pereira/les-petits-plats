import Hero from "@/components/Header/Hero";


export default function RecipesLayout({children}) {
  return (
    <>
    <Hero size="sm"/>
    <main>
        {children}
    </main>
    </>
  )
}