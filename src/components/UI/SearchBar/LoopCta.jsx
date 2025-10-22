import styles from "@/components/UI/SearchBar/LoopCta.module.css"

export default function LoopCta() {

  return (
    <button className={styles.searchCta}> 
        <svg
        viewBox="0 0 24 24"
        width="20" height="20"
        aria-hidden="true"
        >
        {/* cercle */}
        <circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* manche à -45° */}
        <line x1="15" y1="15" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    </button>
  )
}