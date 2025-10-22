import s from "@/components/Recipe/IngredientList.module.css"

export default function IngredientList({items,columns}) {
  console.log(items)
  return (
    <dl 
        className={s.ingredients}
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`}}
        >
      
      {items.map(({ ingredient, quantity, unit }, i) => (
        <div className={s.row} key={`${ingredient}-${i}`}>
          <dt className={s.name}>{ingredient}</dt>
          <dd className={s.qty}>{formatQty(quantity, unit)}</dd>
        </div>
      ))}
    </dl>
  );
}



function formatQty(q, unit) {
  if (q == null && !unit) return "";
  const u = normalizeUnit(unit);
  if (q == null) return u ?? "";


  if (!u) return String(q);
  if (u === "g") return `${q}g`;
  if (u === "L") return `${q}L`;
  if (u === "ml" || u === "cl") return `${q}${u}`;
  return `${q} ${u}`; 
}

function normalizeUnit(u) {
  if (!u) return null;
  const s = String(u).trim().toLowerCase();
  if (["gramme", "grammes", "g"].includes(s)) return "g";
  if (["l", "litre", "litres"].includes(s)) return "L";
  if (["ml", "cl"].includes(s)) return s;
  return u; 
}