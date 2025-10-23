import Hero from "@/components/Header/Hero";
import Footer from "@/components/Footer/Footer";


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