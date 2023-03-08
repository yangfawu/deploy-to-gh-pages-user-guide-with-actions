import { Box, CircularProgress, Stack } from "@mui/material"
import Progress from "../components/Progress"
import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import Header from "../content/Header"
import Footer from "../content/Footer"

export default function RootLayout()
{
    return (
        <Box sx={{
            margin: "auto",
            maxWidth: "764px",
            position: "relative",
        }}>
            <Suspense fallback={<CircularProgress/>}>
                <Box sx={{
                    position: "sticky",
                    top: 0,
                    zIndex: 99,
                }}>
                    <Progress/>
                </Box>
                <Stack spacing="32px" sx={{
                    backgroundColor: "#eee",
                    minHeight: "calc(100vh - 10px)",
                    padding: "32px",
                    paddingX: 0,
                    boxSizing: "border-box",
                }}>
                    <Header/>
                    <Outlet/>
                    <Footer/>
                </Stack>
            </Suspense>
        </Box>
    )
}
