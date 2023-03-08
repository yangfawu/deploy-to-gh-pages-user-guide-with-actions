import { Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import Section from "../components/Section"
import Code from "../components/Code"
import Paragraph from "../components/Paragraph"

export default function Second() {
    return (
        <Section title="Second Page">
            <Paragraph>
                Look carefully at the URL of this page. Do you notice the <Code>#</Code>?
            </Paragraph>
            <Paragraph>
                Click <Link component={RouterLink} to="/">here</Link> to go back.
            </Paragraph>
        </Section>
    )
}
