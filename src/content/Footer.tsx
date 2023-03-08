import { Breadcrumbs, Link, Stack, Typography } from "@mui/material"
import SidePad from "../components/SidePad"

export default function Footer() {
    return (
        <>
            <SidePad>
                <Typography variant="body1" textAlign="center">
                    {`\u2022 \u2022 \u2022`}
                </Typography>
            </SidePad>
            <SidePad>
                <Stack alignItems="center">
                    <Typography variant="body1" textAlign="center">
                        User Guide: Deploying React app to GitHub Pages using GitHub Actions
                    </Typography>
                    <Breadcrumbs separator="|" sx={{ "& ol": { justifyContent: "center" } }}>
                        <span>Yangfa Wu</span>
                        <span>March 7, 2023</span>
                        <Link href="https://github.com/yangfawu/deploy-to-gh-pages-user-guide-with-actions"
                              target="_blank">GitHub Repository</Link>
                    </Breadcrumbs>
                </Stack>
            </SidePad>
        </>
    )
}
