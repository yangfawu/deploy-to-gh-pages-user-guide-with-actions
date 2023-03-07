import { Breadcrumbs, Link, Stack, Typography } from "@mui/material"

export default function Footer() {
    return (
        <Stack alignItems="center">
            <Typography variant="body1" textAlign="center">
                User Guide: Deploying React app to Github Pages using Github Actions
            </Typography>
            <Breadcrumbs separator="|">
                <span>Yangfa Wu</span>
                <span>March 7, 2023</span>
                <Link href="https://github.com/yangfawu/deploy-to-gh-pages-user-guide-with-actions" target="_blank">Github</Link>
            </Breadcrumbs>
        </Stack>
    )
}
