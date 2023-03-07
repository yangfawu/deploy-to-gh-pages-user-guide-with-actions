import Section from "../components/Section"
import { Alert, Link, TextField, Typography } from "@mui/material"
import { useRepo } from "../context/RepositoryContext"
import CodeBlock from "../components/CodeBlock"
import Code from "../components/Code"
import firstDeploy from "../assets/first-deploy.png"
import Image from "../components/Image"

const deployCommands = (v: string) => `
cd ${v}
npm install
npm run dev
`

export default function CreatingProject() {
    const { value: { raw, parsed }, update } = useRepo()
    return (
        <Section title="Creating Project">
            <Typography>
                Start by creating a new <b>empty</b> repository on Github. To make following the user guide easier, you
                can
                input the name of your Github repository below.
            </Typography>
            <TextField
                label="Repository Name"
                variant="outlined"
                placeholder="deploy-to-gh-pages-user-guide-with-actions"
                value={raw}
                onChange={(event) => update(event.target.value)}
            />
            <Typography>
                Next, create the React project on your machine using your favorite build tool (ex: <Link
                href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank">create-react-app</Link>).
                For this
                demonstration, I will be using <Link href="https://vitejs.dev/" target="_blank">Vite</Link>, but the
                concepts remains relatively the same regardless of what
                tool you use.
            </Typography>
            <Typography>
                Run the following command to get started. You will be prompted for a framework and variant. We will be
                going with <b>React</b> and <b>Typescript + SWC</b> respectively.
            </Typography>
            <CodeBlock value={`npm create vite@latest ${parsed}`}/>
            <Typography>
                Once Vite finishes setting up the project for you, you can view its contents by navigating
                to <Code>/{parsed}</Code>. Inside the project folder, run the following commands to install all
                necessary dependencies and spin up a development server. You should now be able to see a simple single
                page app running at <Link href="http://localhost:5173/" target="_blank">localhost:5173</Link>.
            </Typography>
            <CodeBlock value={deployCommands(parsed)}/>
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
