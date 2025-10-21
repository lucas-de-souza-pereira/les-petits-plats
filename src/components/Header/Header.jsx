"use client";

import Image from "next/image"
import Link from "next/link"
import styles from "@/components/Header/Header.module.css"

import SearchBar from "../SearchBar/SearchBar";

export default function Header(){
    return (
    <header className={styles.hero}>

        <Image
        src={"/images/header/hero-header.jpg"}
        alt="hero-header"
        fill
        priority
        className={styles.heroBg}
        sizes="100vw"
        />

        <div className={styles.heroOverlay} aria-hidden="true" />

        <Link  href="/">
        <Image
        src={"/images/header/Logo.svg"}
        alt="logo"
        width={207} height={25.26}
        className={styles.logo}
        />
        </Link>

        <div className={styles.heroContent}>
            <h1 className={styles.titleH1}>
                DÉCOUVREZ NOS RECETTES
                <br/>
                DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES
            </h1>

            <form className={styles.heroSearch}>
                <SearchBar/>
            </form>

        </div>
</header>
)}

