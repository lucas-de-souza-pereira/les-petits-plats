import LoopCta from "./LoopCta"
import s from '@/components/UI/SearchBar/SearchBar.module.css'

export default function SearchBar({id, className}) {
  return (
      <form className={s.heroSearch}>
        <input
        type="search"
        id= {id}
        className={s[className]}
        placeholder="Rechercher une recette, un ingrédient, ..."
        />

        <LoopCta/>
      </form>
  )
}