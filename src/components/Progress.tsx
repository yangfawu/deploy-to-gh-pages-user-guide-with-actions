import { LinearProgress } from "@mui/material"
import { useEffect, useState } from "react"

export default function Progress() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        function update() {
            requestAnimationFrame(() => {
                const documentHeight = Math.max(
                    document.body.scrollHeight,
                    document.body.offsetHeight,
                    document.body.clientHeight
                )
                const raw = (window.pageYOffset ?? 0)/(documentHeight - window.innerHeight)
                const parsed = isNaN(raw) || !isFinite(raw) ? 0 : raw
                setValue(parsed * 100)
            })
        }
        document.addEventListener("scroll", update)
        return () => document.removeEventListener("scroll", update)
    }, [])

    return (
        <LinearProgress variant="determinate" value={value} sx={{ height: 10, }}/>
    )
}
