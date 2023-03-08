import Section from "../components/Section"
import Paragraph from "../components/Paragraph"

export default function Introduction() {
    return (
        <Section title="Introduction">
            <Paragraph>
                React is a very popular web framework that many developers and companies use to build front-end applications. Even this page was built with React. Chances are you have probably already heard about or used it before coming to this page.
            </Paragraph>
            <Paragraph>
                Before you keep reading, <b>please note</b> that this user guide assumes that you already know the
                basics of React and Git. At the end of this user guide, you will know how to use GitHub Actions
                to <b>automatically</b> deploy your React app to GitHub Pages.
            </Paragraph>
        </Section>
    )
}