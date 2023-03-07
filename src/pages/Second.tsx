import { Link, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import Section from "../components/Section"
import Code from "../components/Code"

export default function Second() {
    return (
        <Section title="Second Page">
            <Typography>
                Look carefully at the URL of this page. Do you notice the <Code>#</Code>?
            </Typography>
            <Typography>
                Click <Link component={RouterLink} to="/">here</Link> to go back.
            </Typography>
        </Section>
    )
}
