
"use client";

import s from "@/components/Tags/Tag.module.css";
import { useTags } from "@/components/Tags/FilterContext"

export default function Tag({ type, children }) {
  const { removeTag } = useTags()
  return (
    <span className={s.labelSearch} title={`${children}`}>
      {children}
      <button onClick={() => removeTag(type, children)} aria-label="Supprimer le tag">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M11.0833 11.0833L6.08325 6.08331M6.08325 6.08331L1.08325 1.08331M6.08325 6.08331L11.0833 1.08331M6.08325 6.08331L1.08325 11.0833"
            stroke="#1B1B1B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </span>
  );
}
