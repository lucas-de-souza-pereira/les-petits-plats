

export default function IngredientList({item, index}) {
let u
if (!item.unit){u=null}
if (item.unit){
    if (item.unit === "gramme") {u = "g"}
    if (item.unit.toLowerCase() === "litre" || item.unit.toLowerCase() === "litres") {u = "l"}
    if (item.unit ==="ml" || item.unit === "cl") {u = item.unit}
    else {u = " " + item.unit}
}
  return (
        <div className={"ingredientItemContent"} data-index={index}>
            <p className={"item"}>{item.ingredient}</p>
            <p className={"quantity"}>{item.quantity}{u}</p>
        </div>
  )
}