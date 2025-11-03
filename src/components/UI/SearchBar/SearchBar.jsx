"use client"

import s from '@/components/UI/SearchBar/SearchBar.module.css'
import { useState } from 'react'

export default function SearchBar() {
  const[q,setQ] = useState("")
  return (
      <form className={s.heroSearch}
          onSubmit={(e)=>{
            e.preventDefault()
            console.log(q)}}
      >

        <input
        type="search"
        id= "search-bar"
        value={q}
        className={s.searchBar}
        placeholder="Rechercher une recette, un ingrédient, ..."
        onChange={(e) => setQ(e.target.value)}
        />
        <button 
        className={s.searchCta}
        type='submit'
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9.5" stroke="currentColor"/>
            <line x1="18.3536" y1="18.6464" x2="27.3536" y2="27.6464" stroke="currentColor"/>
          </svg>
        </button>
      </form>
  )
}