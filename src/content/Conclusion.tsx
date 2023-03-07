import Section from "../components/Section"
import { Typography } from "@mui/material"
import Code from "../components/Code"

export default function Conclusion() {
    return (
        <Section title="Conclusion">
            <Typography>
                Congratulations! You now have a React app project that automatically deploys to GitHub Pages using
                GitHub Actions. If you make another commit and push it to the <Code>main</Code> branch, you will notice
                that GitHub automatically runs another job to build and deploy your updated app.
            </Typography>
        </Section>
    )
}