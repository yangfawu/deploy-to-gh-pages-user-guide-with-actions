import { Link, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import Section from "../components/Section"

export default function NotFound() {
    return (
        <Section title="Error 404: Page Not Found">
            <Typography>
                Click <Link component={RouterLink} to="/">here</Link> to go back.
            </Typography>
        </Section>
    )
}
