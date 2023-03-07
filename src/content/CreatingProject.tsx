import Section from "../components/Section"
import { Alert, Box, Grid, Link, TextField, Typography } from "@mui/material"
import { useRepo } from "../context/RepositoryProvider"
import CodeBlock from "../components/CodeBlock"
import Code from "../components/Code"
import firstDeploy from "../assets/first-deploy.png"
import Image from "../components/Image"
import { useGithub } from "../context/GithubProvider"

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
            <Typography>
                Start by creating a new <b>empty</b> repository on GitHub. To make following the user guide easier, please input your GitHub username and repository name below.
            </Typography>
            <Box>
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
            </Box>
            <Typography>
                Next, create the React project on your machine using your favorite build tool (ex: <Link
                href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank">create-react-app</Link>).
                For this
                demonstration, I will be using <Link href="https://vitejs.dev/" target="_blank">Vite</Link>, but the
                concepts remain relatively the same regardless of what
                tool you use.
            </Typography>
            <Typography>
                Run the following command to get started. You will be prompted for a framework and variant. We will be
                going with <b>React</b> and <b>Typescript + SWC</b> respectively.
            </Typography>
            <CodeBlock value={`npm create vite@latest ${parsedRepoName}`}/>
            <Typography>
                Once Vite finishes setting up the project for you, you can view its contents by navigating
                to <Code>/{parsedRepoName}</Code>. Inside the project folder, run the following commands to install all
                necessary dependencies and spin up a development server. You should now be able to see a simple single-page app running at <Link href="http://localhost:5173/" target="_blank">localhost:5173</Link>.
            </Typography>
            <CodeBlock value={deployCommands(parsedRepoName)}/>
            <Image src={firstDeploy} alt="First Deploy"/>
            <Alert severity="info">
                On default, Vite will prioritize making its development server listen to your localhost at
                port <Code>5173</Code>. However, this may not be the case when another application is already using the
                port. <Link href="https://vitejs.dev/config/server-options.html#server-port" target="_blank">Read
                More</Link>
            </Alert>
        </Section>
    )
}
