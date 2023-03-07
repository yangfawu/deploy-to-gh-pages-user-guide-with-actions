import { Stack } from "@mui/material"
import { ReactNode } from "react"
import RepositoryProvider from "../context/RepositoryContext"

type Props = {
    children?: ReactNode
}
export default function MainLayout({ children }: Props) {
    return (
        <RepositoryProvider>
            <Stack spacing="48px">
                {children}
            </Stack>
        </RepositoryProvider>
    )
}
