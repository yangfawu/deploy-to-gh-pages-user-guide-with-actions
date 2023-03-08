import { Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import Paragraph from "../components/Paragraph"
import Section from "../components/Section"

export default function NotFound() {
    return (
        <Section title="Error 404: Page Not Found">
            <Paragraph>
                Click <Link component={RouterLink} to="/">here</Link> to go back.
            </Paragraph>
        </Section>
    )
}
