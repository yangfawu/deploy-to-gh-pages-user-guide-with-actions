import { Box, Breadcrumbs, Chip, Stack, Typography } from "@mui/material"
import { AccessTime } from "@mui/icons-material"

export default function Header() {
    return (
        <Stack spacing="16px">
            <Typography variant="h2" marginTop="25%">
                User Guide: Deploying React app to GitHub Pages using GitHub Actions
            </Typography>
            <Box display="flex" gap="8px" flexWrap="wrap">
                <Chip icon={<AccessTime/>} label="10 min read" variant="outlined"/>
                <Chip label="React"/>
                <Chip label="GitHub Pages"/>
                <Chip label="GitHub Actions"/>
                <Chip label="Deployment"/>
            </Box>
            <Breadcrumbs separator={`\u2022`} sx={{ marginTop: "25%" }}>
                <Typography variant="body1" color="text.primary">
                    Yangfa Wu
                </Typography>
                <Typography variant="body1" color="text.primary">
                    March 7, 2023
                </Typography>
            </Breadcrumbs>
        </Stack>
    )
}
