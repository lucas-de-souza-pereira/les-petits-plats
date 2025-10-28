'use client'

import s from "@/components/FilterCard/LabelSearch.module.css"


export default function LabelSearch({children}) {
    return (
    <span className={s.labelSearch}>
        {children}
        <button onClick={()=>console.log("clickkk")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M11.0833 11.0833L6.08325 6.08331M6.08325 6.08331L1.08325 1.08331M6.08325 6.08331L11.0833 1.08331M6.08325 6.08331L1.08325 11.0833" stroke="#1B1B1B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    </span>
    )
}