"use client";

import s from "@/components/Tags/FilterCard.module.css"
import { useState} from "react"
import { useTags } from "./FilterContext"

export default function FilterCard({  type, label, isOpen, onToggle }) {
  const [q, setQ] = useState("")
  const { available, selected, addTag, removeTag } = useTags()

  const list = available[type].filter(v =>
    v.toLowerCase().includes(q.trim().toLowerCase())
  )

  const selectedList = selected[type]

  return (
    <div className={s.filterCard}>
      <button className={s.labelSearch} onClick={onToggle}>
        {label}
        {isOpen ? (
          // up
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 6.68045L7 0.68045L13.5 6.68045" stroke="#1B1B1B" strokeLinecap="round"/>
          </svg>
        ) : (
          // down
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0.5L7 6.5L13.5 0.5" stroke="#1B1B1B" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className={s.searchBar}>
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          <button className={s.cross} onClick={() => setQ("")} aria-label="Effacer la recherche">
            {/* cross */}
            {q && (
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 6.5L3.5 3.5M3.5 3.5L0.5 0.5M3.5 3.5L6.5 0.5M3.5 3.5L0.5 6.5"
                stroke="#7A7A7A" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>)}
          </button>
          {/* loop */}
          <svg className={s.loop} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="4.75" stroke="#7A7A7A" strokeWidth="0.5"/>
            <line x1="9.17678" y1="9.32322" x2="13.6768" y2="13.8232" stroke="#7A7A7A" strokeWidth="0.5"/>
          </svg>
                {/* élement sélectioné */}
                {selectedList.length > 0 && (
            <ul className={s.selectedList}>
              {selectedList.map((v) => (
                <li key={`sel-${v}`} className={s.selectedItem}>
                  <span className={s.selectedLabel}>{v}</span>
                  <button
                    className={s.removeBtn}
                    onClick={() => removeTag(type, v)}
                    aria-label={`Retirer ${v}`}
                  >
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
                      <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
          {/* listes d'item */}
          <ul className={s.list}>
            {list.length === 0 && <li style={{ color: "#7A7A7A" }}>Aucun résultat…</li>}
            {list.map(v => (
              <li
                key={v}
                className={s.item}
                onClick={() => addTag(type, v)}
                style={{ cursor: "pointer" }}
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
