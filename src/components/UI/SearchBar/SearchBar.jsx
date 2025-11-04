"use client"

import s from '@/components/UI/SearchBar/SearchBar.module.css'
import { useEffect, useState, useRef } from 'react'
import { useTags } from '@/components/Tags/FilterContext'

/**
 * SearchBar.jsx
 * -------------
 * Barre de recherche principale (recherche live + validation par tag)
 * - Recherche "live" déclenchée après 300 ms d'inactivité
 * - Validation du formulaire crée un tag "keywords"
 */
export default function SearchBar() {
  const { addTag, setLiveQuery } = useTags()
  const [q, setQ] = useState("")
  const timerRef = useRef(null)

  const onChange = (e) => {
      const value = e.target.value
      setQ(value)

      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        const v = value.trim()
        setLiveQuery(v.length >= 3 ? v : "")
      }, 300)
    }

    const onSubmit = (e) => {
      e.preventDefault()
      const v = q.trim()
      if (!v) return

      addTag("keywords", v)      
      clearTimeout(timerRef.current)
      setLiveQuery("")
      setQ("")
    }

    const onClear = () => {
              clearTimeout(timerRef.current)
              setLiveQuery("")
              setQ("")}

    useEffect(() => () => clearTimeout(timerRef.current), [])

  return (
      <form className={s.heroSearch}
          onSubmit={onSubmit} >

        <input
        type="search"
        id= "search-bar"
        value={q}
        className={s.searchBar}
        placeholder="Rechercher une recette, un ingrédient, ..."
        onChange={onChange}
        />

        {/* loop */}
        <button 
        className={s.searchCta}
        type='submit'
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9.5" stroke="currentColor"/>
            <line x1="18.3536" y1="18.6464" x2="27.3536" y2="27.6464" stroke="currentColor"/>
          </svg>
        </button>

        {/* cross */}
        {q && (
              <button 
              className={s.cross} onClick={onClear}
              aria-label="Effacer la recherche"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0833 14.0833L7.58325 7.58334M7.58325 7.58334L1.08325 1.08334M7.58325 7.58334L14.0833 1.08334M7.58325 7.58334L1.08325 14.0833" stroke="#7A7A7A" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
          )}


      </form>
  )
}



