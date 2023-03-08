import { ReactNode } from "react"
import { Box } from "@mui/material"

type Props = {
    children?: ReactNode
    disableOnSx?: boolean
}
export default function SidePad({ children, disableOnSx=false }: Props) {
    return (
        <Box sx={{
            paddingX: {
                sm: "32px",
                xs: disableOnSx ? 0 : "32px"
            }
        }}>{children}</Box>
    )
}
