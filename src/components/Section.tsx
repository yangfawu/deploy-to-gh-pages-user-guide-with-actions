import { Stack, Typography } from "@mui/material"
import { ReactNode } from "react"

type Props = {
    title: string
    children?: ReactNode
}
export default function Section({ title, children }: Props) {
    return (
        <Stack spacing="16px">
            <Typography variant="h4">{title}</Typography>
            {children}
        </Stack>
    )
}
