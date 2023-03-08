import Section from "../components/Section"
import { Link } from "@mui/material"
import Code from "../components/Code"
import { useRepo } from "../context/RepositoryProvider"
import { useGithub } from "../context/GithubProvider"
import { useMemo } from "react"
import { Link as RouterLink } from "react-router-dom"
import Paragraph from "../components/Paragraph"

const EXAMPLE_NESTED_PATH = "path/to/nested/page"
export default function ExtraRouting() {
    const { value: { parsed: repoName } } = useRepo()
    const { value: { parsed: username } } = useGithub()

    const deployedLink = useMemo(() => `https://${username}.github.io/${repoName}/`, [repoName, username])

    return (
        <Section title="Extra: Routing">
            <Paragraph>
                If you are making a multi-page React app using <Code>react-router</Code>, you may discover that your routing system stops functioning on GitHub Pages even though it was working perfectly fine on your machine during development. This is caused by how GitHub serves static pages from repositories. You can read more about it <Link href="https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing" target="_blank">here</Link>.
            </Paragraph>
            <Paragraph>
                A quick workaround for this issue is by swapping your <Code>BrowserRouter</Code> with a <Code>HashRouter</Code>. This way, when you try to visit <Code><Link>{deployedLink}{EXAMPLE_NESTED_PATH}</Link></Code>, you will navigate to <Code><Link>{deployedLink}<b>#</b>/{EXAMPLE_NESTED_PATH}</Link></Code> instead. This will let GitHub know that you want to serve that route using the same repository code in your <Code>gh-pages</Code> branch.
            </Paragraph>
            <Paragraph>
                Click <Link component={RouterLink} to="second-page">here</Link> to see a demo of this workaround on this web app.
            </Paragraph>
        </Section>
    )
}
