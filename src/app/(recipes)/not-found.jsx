import Hero from "@/components/Header/Hero";


export default function NotFound() {
  return (
    <Hero 
    size="full"
    title={<>404 :(<br/><small>La page que vous demandez est introuvable.</small></>}
    titleStyle="notFound"
    />
  )
}