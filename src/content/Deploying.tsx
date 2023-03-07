import Section from "../components/Section"
import { Link, Typography } from "@mui/material"
import Code from "../components/Code"
import Image from "../components/Image"
import githubRepoActions from "../assets/github-actions-tab.png"
import githubPages from "../assets/github-pages-settings.png"
import { useRepo } from "../context/RepositoryProvider"
import { useGithub } from "../context/GithubProvider"
import { useMemo } from "react"

export default function Deploying() {
    const { value: { parsed: repoName } } = useRepo()
    const { value: { parsed: username } } = useGithub()

    const deployedLink = useMemo(() => `https://${username}.github.io/${repoName}/`, [repoName, username])

    return (
        <Section title="Deploying">
            <Typography>
                We are now ready to deploy. In your project, add the Git remote to your repository, commit everything, and push to the <Code>main</Code> branch. Afterward, navigate to the <b>Actions</b> tab of your repository on GitHub and you should be able to see a GitHub Action running. This is the action that we defined earlier in <Code>main.yml</Code>.
            </Typography>
            <Image src={githubRepoActions} alt="github-repo-actions"/>
            <Typography>
                Once the action finishes running, navigate to the <Code>gh-pages</Code> branch of your repository to see the content of your built React app. However, before you can see your app, you still need to configure your repository settings to make GitHub Pages deploy from your <Code>gh-pages</Code> branch. You can do this by going to the same place where you modified permissions for Actions earlier and visiting the <b>Pages</b> tab in the sidebar.
            </Typography>
            <Image src={githubPages} alt="GitHub Pages settings"/>
            <Typography>
                With this, navigate back to the <b>Actions</b> tab of your repository and you should be able to see a new GitHub action running. When it finishes running, you can now view your deployed app at <Code><Link href={deployedLink} target="_blank">{deployedLink}</Link></Code>.
            </Typography>
        </Section>
    )
}
