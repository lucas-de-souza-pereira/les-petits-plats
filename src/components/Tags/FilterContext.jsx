"use client";
import { createContext, useContext, useState } from "react";

/* -------------------- CONTEXT SETUP -------------------- */

const TagsCtx = createContext(null)
export const useTags = () => useContext(TagsCtx)

/* -------------------- HELPERS -------------------- */

const lower = (s) => String(s ?? "").trim().toLowerCase()
const upper = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : s
const stripAccents = (s) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "")

const singularizeLastWord = (label) => {
    const parts = lower(label).split(/\s+/)  
    const last = parts.pop() || ""

    let s = last
    if (s.endsWith("es")) s = s.slice(0, -1)

    parts.push(s)
    return parts.join(" ")
}

const keyOf = (label) => singularizeLastWord(stripAccents(lower(label)))

/* -------------------- PROVIDER -------------------- */
export function TagsProvider({ data, children }) {
  const [selected, setSelected] = useState({
    ingredients: [],
    appliances : [],
    ustensils  : [],
    keywords : [], 
  })

  const [liveQ, setLiveQuery] = useState("")

  const uniqByKeyKeepLabel = (arr) => {
    const map = new Map()
    for (const raw of arr) {
      const label = String(raw ?? "").trim()
      const k = keyOf(label)
      if (!map.has(k)) map.set(k, label)
    }
    return {
      list: [...map.values()],  
      keys: new Set(map.keys()) 
    }
  }

  /* Filtrer les recettes */
  const filteredRecipes = data.filter((r) => {
    const ing = new Set(r.ingredients.map(i => keyOf(i.ingredient)))
    const app = keyOf(r.appliance)
    const ust = new Set(r.ustensils.map(keyOf))

    const searchable = [
      r.name, r.description,
      ...r.ingredients.map(i => i.ingredient)
    ].map(keyOf).join(" ")

    const sIng = new Set(selected.ingredients.map(keyOf))
    const sApp = new Set(selected.appliances.map(keyOf))
    const sUst = new Set(selected.ustensils.map(keyOf))
    const sKw = new Set(selected.keywords.map(keyOf))

    const okIng = [...sIng].every(k => ing.has(k))
    const okApp = [...sApp].every(k => app === k)
    const okUst = [...sUst].every(k => ust.has(k))
    const okKw = [...sKw].every(k => searchable.includes(k))

    const v = keyOf(liveQ)
    const okLive = v === "" || searchable.includes(v)

    return okIng && okApp && okUst && okKw && okLive
  })

  /* Collecter les tags depuis les recettes filtrées */
  const raw = { ingredients: [], appliances: [], ustensils: [] }
  for (const r of filteredRecipes) {
    r.ingredients.forEach(i => raw.ingredients.push(i.ingredient))
    raw.appliances.push(r.appliance)
    r.ustensils.forEach(u => raw.ustensils.push(u))
  }

  const ing = uniqByKeyKeepLabel(raw.ingredients)
  const app = uniqByKeyKeepLabel(raw.appliances)
  const ust = uniqByKeyKeepLabel(raw.ustensils)

  const selectedKeys = {
    ingredients: new Set(selected.ingredients.map(keyOf)),
    appliances : new Set(selected.appliances.map(keyOf)),
    ustensils  : new Set(selected.ustensils.map(keyOf)),
  }

  /* Dédoublonner + retirer ceux déjà sélectionnés */
  const available = {
    ingredients: ing.list.filter(lbl => !selectedKeys.ingredients.has(keyOf(lbl))),
    appliances : app.list.filter(lbl => !selectedKeys.appliances .has(keyOf(lbl))),
    ustensils  : ust.list.filter(lbl => !selectedKeys.ustensils  .has(keyOf(lbl))),
  }

  /* Actions */
  const addTag = (type, lbl) => {
    const k = keyOf(lbl)
    setSelected(s => s[type].some(x => keyOf(x) === k) ? s : ({ ...s, [type]: [...s[type], String(lbl).trim()] }))
  }

  const removeTag = (type, lbl) => {
    const k = keyOf(lbl)
    setSelected(s => ({ ...s, [type]: s[type].filter(x => keyOf(x) !== k) }))
  }

  const clearAll = () => setSelected({ ingredients: [], appliances: [], ustensils: [], keywords:[] })

  return (
    <TagsCtx.Provider value={{ selected, available, filteredRecipes, addTag, removeTag, clearAll, liveQ , setLiveQuery , upper}}>
      {children}
    </TagsCtx.Provider>
  )
}