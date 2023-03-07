import { Box, Stack } from "@mui/material"
import { ReactNode } from "react"
import Progress from "../components/Progress"

type Props = {
    children?: ReactNode
}
export default function RootLayout({ children }: Props) {
    return (
        <Box sx={{
            margin: "auto",
            maxWidth: "764px",
            position: "relative",
        }}>
            <Box sx={{
                position: "sticky",
                top: 0,
                zIndex: 99,
            }}>
                <Progress/>
            </Box>
            <Stack spacing="32px" sx={{
                backgroundColor: "#eee",
                minHeight: "100vh",
                padding: "32px",
                boxSizing: "border-box",

            }}>
                {children}
            </Stack>
        </Box>
    )
}
