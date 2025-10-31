"use client";
import { createContext, useContext, useState } from "react";

const TagsCtx = createContext(null)
export const useTags = () => useContext(TagsCtx)

/* -------------------- helpers -------------------- */

const lower = (s) => String(s ?? "").trim().toLowerCase()
const upper = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : s

const singularizeLastWord = (label) => {
    const txt = lower(label)
    const txtNorm = upper(txt)
    const parts = txtNorm.split(/\s+/)  
    const last = parts.pop() || ""

    let s = last;
    if (s.endsWith("es")) s = s.slice(0, -1)

    parts.push(s);
    return parts.join(" ")
}

const canon = singularizeLastWord;
const dedupe = (arr) => [...new Set(arr)];

/* -------------------- Provider -------------------- */
export function TagsProvider({ data, children }) {
  const [selected, setSelected] = useState({
    ingredients: [],
    appliances : [],
    ustensils  : [],
  });

  /* Filtrer les recettes */
  const filteredRecipes = data.filter((r) => {
    const ing = new Set(r.ingredients.map(i => canon(i.ingredient)))
    const app = canon(r.appliance)
    const ust = new Set(r.ustensils.map(canon))

    const sIng = new Set(selected.ingredients)
    const sApp = new Set(selected.appliances)
    const sUst = new Set(selected.ustensils)

    const okIng = [...sIng].every(k => ing.has(k))
    const okApp = [...sApp].every(k => app === k)
    const okUst = [...sUst].every(k => ust.has(k))
    return okIng && okApp && okUst
  });

  /* Collecter les tags depuis les recettes filtrées */
  const raw = { ingredients: [], appliances: [], ustensils: [] }
  for (const r of filteredRecipes) {
    r.ingredients.forEach(i => raw.ingredients.push(canon(i.ingredient)))
    raw.appliances.push(canon(r.appliance))
    r.ustensils.forEach(u => raw.ustensils.push(canon(u)))
  }

  /* Dédoublonner + retirer ceux déjà sélectionnés */
  const available = {
    ingredients: dedupe(raw.ingredients).filter(lbl => !selected.ingredients.includes(lbl)),
    appliances : dedupe(raw.appliances ).filter(lbl => !selected.appliances .includes(lbl)),
    ustensils  : dedupe(raw.ustensils  ).filter(lbl => !selected.ustensils  .includes(lbl)),
  }

  /* Actions */
  const addTag = (type, lbl) => {
    const v = canon(lbl);
    setSelected(s => s[type].includes(v) ? s : ({ ...s, [type]: [...s[type], v] }))
  }

  const removeTag = (type, lbl) => {
    const v = canon(lbl);
    setSelected(s => ({ ...s, [type]: s[type].filter(x => x !== v) }))
  }

  const clearAll = () => setSelected({ ingredients: [], appliances: [], ustensils: [] })

  return (
    <TagsCtx.Provider value={{ selected, available, filteredRecipes, addTag, removeTag, clearAll }}>
      {children}
    </TagsCtx.Provider>
  )
}