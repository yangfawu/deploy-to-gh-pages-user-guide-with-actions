import Section from "../components/Section"
import { Alert, Grid, Link, TextField } from "@mui/material"
import { useRepo } from "../context/RepositoryProvider"
import CodeBlock from "../components/CodeBlock"
import Code from "../components/Code"
import firstDeploy from "../assets/first-deploy.png"
import Image from "../components/Image"
import { useGithub } from "../context/GithubProvider"
import Paragraph from "../components/Paragraph"
import SidePad from "../components/SidePad"

const deployCommands = (v: string) => `
cd ${v}
npm install
npm run dev
`

export default function CreatingProject() {
    const {
        value: {
            raw: rawRepoName,
            parsed: parsedRepoName
        },
        update: updateRepoName
    } = useRepo()
    const {
        value: {
            raw: rawGithubUsername
        },
        update: updateGithubUsername
    } = useGithub()
    return (
        <Section title="Creating Project">
            <Paragraph>
                Start by creating a new <b>empty</b> repository on GitHub. To make following the user guide easier, please input your GitHub username and repository name below. This will tailor the rest of the guide to your project.
            </Paragraph>
            <SidePad>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="GitHub Username"
                            variant="outlined"
                            placeholder="yangfawu"
                            value={rawGithubUsername}
                            onChange={(event) => updateGithubUsername(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <TextField
                            fullWidth
                            label="Repository Name"
                            variant="outlined"
                            placeholder="deploy-to-gh-pages-user-guide-with-actions"
                            value={rawRepoName}
                            onChange={(event) => updateRepoName(event.target.value)}
                        />
                    </Grid>
                </Grid>
            </SidePad>
            <Paragraph>
                Next, create the React project on your machine using your favorite build tool (ex: <Link
                href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank">create-react-app</Link>).
                For this
                demonstration, I will be using <Link href="https://vitejs.dev/" target="_blank">Vite</Link>, but the
                concepts remain relatively the same regardless of what
                tool you use.
            </Paragraph>
            <Paragraph>
                Run the following command to get started. You will be prompted for a framework and variant. We will be
                going with <b>React</b> and <b>Typescript + SWC</b> respectively.
            </Paragraph>
            <CodeBlock value={`npm create vite@latest ${parsedRepoName}`}/>
            <Paragraph>
                Once Vite finishes setting up the project for you, you can view its contents by navigating
                to <Code>/{parsedRepoName}</Code>. Inside the project folder, run the following commands to install all
                necessary dependencies and spin up a development server. You should now be able to see a simple single-page app running at <Link href="http://localhost:5173/" target="_blank">localhost:5173</Link>.
            </Paragraph>
            <CodeBlock value={deployCommands(parsedRepoName)}/>
            <Image src={firstDeploy} alt="First Deploy"/>
            <SidePad>
                <Alert severity="info">
                    On default, Vite will prioritize making its development server listen to your localhost at
                    port <Code>5173</Code>. However, this may not be the case when another application is already using the
                    port. <Link href="https://vitejs.dev/config/server-options.html#server-port" target="_blank">Read
                    More</Link>
                </Alert>
            </SidePad>
        </Section>
    )
}
