import Link from "next/link"
import Image from "next/image"
import s from "@/components/Header/Brand.module.css"

export default function Brand() {
  return (
    <Link  href="/">
        <Image
        src={"/images/header/Logo.svg"}
        alt="Les Petits Plats"
        aria-label="Acceuil"
        width={207} height={25.26}
        className={s.brand}
        />
    </Link>
  )
}