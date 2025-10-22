import s from "@/components/UI/TimeBadge/TimeBadge.module.css"

export default function TimeBadge({
    time,
    size
}) {
  return (
    <span className={`${s.timeBagde} ${s[size]}`}>{time+"min"}</span>
  )
}