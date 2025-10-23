
import Image from "next/image"
import { IMAGE_PATH } from "@/utils/config"

export default function RecipeImage({image, name}) {
  return (
        <Image 
                src={IMAGE_PATH+image}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit:"cover"}}
                />
  )
}