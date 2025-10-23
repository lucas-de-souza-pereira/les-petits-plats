
import s from "@/components/Header/Hero.module.css"
import Brand from "./Brand"
import Image from "next/image"

export default function Hero({
    title,
    children,
    size ="md", // "sm" | "md" | "full"
    titleStyle = "homePage", // "homepage" | "notFound"
}) {

    return (
        <header className={`${s.hero} ${s[size]}`}>

        <Image
        src={"/images/header/hero-header.jpg"}
        alt="hero-header"
        fill
        priority
        className={s.heroBg}
        sizes="100vw"
        />

        <div className={s.heroOverlay} aria-hidden="true" />

        <Brand/>

        {(title || children) && (
            <div className={s.heroContent}>
                {title && <h1 className={s[titleStyle]}>{title}</h1>}
                {children}
            </div>
        )}
        </header>
  )
}