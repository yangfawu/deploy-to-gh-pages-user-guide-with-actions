import SidePad from "./SidePad"
import { Typography } from "@mui/material"
import { ReactNode } from "react"

type Props = {
    children?: ReactNode
}
export default function Paragraph({ children }: Props) {
    return (
        <SidePad>
            <Typography>{children}</Typography>
        </SidePad>
    )
}
