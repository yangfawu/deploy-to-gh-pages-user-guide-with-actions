import Section from "../components/Section"
import { Typography } from "@mui/material"

export default function Introduction() {
    return (
        <Section title="Introduction">
            <Typography>
                React is a very popular web framework that many developers and companies use to build frontend
                applications. Even this page was built with React. Chances are you have probably already heard about or
                used it before coming to this page.
            </Typography>
            <Typography>
                Before you keep reading, <b>please note</b> that this user guide assumes that you already know the
                basics of React and Git. At the end of this user guide, you will know how to use Github Actions
                to <b>automatically</b> deploy your React app statically to Github Pages.
            </Typography>
        </Section>
    )
}