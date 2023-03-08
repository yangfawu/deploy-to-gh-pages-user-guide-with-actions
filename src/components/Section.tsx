import { Stack, Typography } from "@mui/material"
import { ReactNode } from "react"
import SidePad from "./SidePad"

type Props = {
    title: string
    children?: ReactNode
}
export default function Section({ title, children }: Props) {
    return (
        <Stack spacing="16px">
            <SidePad>
                <Typography variant="h4">{title}</Typography>
            </SidePad>
            {children}
        </Stack>
    )
}
