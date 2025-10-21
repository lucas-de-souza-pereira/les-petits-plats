import LoopCta from "../LoopCta/LoopCta"
import styles from "@/components/SearchBar/SearchBar.module.css"

export default function SearchBar() {
  return (
    <>
        <input
        type="search"
        id= "search-bar"
        className={styles.searchBar}
        placeholder="Rechercher une recette, un ingrédient, ..."
        />

        <LoopCta/>
    </>
  )
}