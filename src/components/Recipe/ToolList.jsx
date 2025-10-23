
import s from "@/components/Recipe/RecipeList.module.css"


export default function ToolList({items, fontSize}) {
    const list = Array.isArray(items) ? items : (items ? [items] : [])
    return (
        <dl className={s.tools}>
            {list.map((item, index)=>(
                <div className={s.row} key={`${item}-${index+1}`}>
                    <dt className={s.name} style={{fontSize:fontSize}}>
                        {item[0].toUpperCase()}{item.slice(1)}
                    </dt>
                    <dd className={s.qty} style={{fontSize:fontSize}}>
                        1
                    </dd>
                </div>
            ))}
            </dl>
    )
}