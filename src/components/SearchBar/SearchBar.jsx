import LoopCta from "./LoopCta"

import s from '@/components/SearchBar/SearchBar.module.css'
export default function SearchBar({

}) {
  return (
      <form className={s.heroSearch}>
        <input
        type="search"
        id= "search-bar"
        className={s.searchBar}
        placeholder="Rechercher une recette, un ingrédient, ..."
        />

        <LoopCta/>
      </form>
  )
}