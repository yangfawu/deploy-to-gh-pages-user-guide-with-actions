import Section from "../components/Section"
import { Alert, Link } from "@mui/material"
import CodeBlock from "../components/CodeBlock"
import Code from "../components/Code"
import { useRepo } from "../context/RepositoryProvider"
import { javascript } from "@codemirror/lang-javascript"
import Image from "../components/Image"
import githubActionSettings from "../assets/github-action-settings.png"
import githubActionWorkflow from "../assets/github-action-settings-2.png"
import { useGithub } from "../context/GithubProvider"
import { useMemo } from "react"
import Paragraph from "../components/Paragraph"
import SidePad from "../components/SidePad"

const fileStructure = `
| public/
| src
    | assets/
    | App.tsx
    | ...
| package.json
| vite.config.ts
| ...
`

const viteConfig = (v: string) => `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/${v}/"
})
`

const fileStructureAfterGithub = `
| public/
| src
    | assets/
    | App.tsx
    | ...
| package.json
| vite.config.ts
| .github
    | workflows
        | main.yml
| ...
`

const githubMainYml = `
name: Generate a build from main and push to gh-pages

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    name: build and push to gh-pages
    steps:
      - name: git-checkout
        uses: actions/checkout@v3.3.0
      
      - name: install node modules
        run: npm i
        
      - name: build vite + react app
        run: npm run build
      
      - name: push build to gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
`

export default function SettingUpConfigs() {
    const { value: { parsed: parsedRepoName } } = useRepo()
    const { value: { parsed: parsedGithubName } } = useGithub()

    const rootGithubURL = useMemo(() => `https://${parsedGithubName}.github.io/`, [parsedGithubName])
    const appGithubURL = useMemo(() => `${rootGithubURL}${parsedRepoName}/`, [rootGithubURL, parsedRepoName])

    return (
        <Section title="Setting Up Configs">
            <Paragraph>
                By now, your project directory should look something like this:
            </Paragraph>
            <CodeBlock disableCopy value={fileStructure}/>
            <Paragraph>
                In your <Code>vite.config.ts</Code> file, add a new field <Code>base</Code> to tell Vite that your project will be built at this base URL <Code>/{parsedRepoName}/</Code>. By default, Vite will build your React app to be served from the root URL <Code><Link href={rootGithubURL} target="_blank">{rootGithubURL}</Link></Code>. However, due to the way GitHub Pages work, we need to deploy our app at <Code><Link href={appGithubURL} target="_blank">{appGithubURL}</Link></Code> instead.
            </Paragraph>
            <CodeBlock value={viteConfig(parsedRepoName)} extensions={[javascript({ typescript: true })]}/>
            <Paragraph>
                In your root project directory, create a new file at <Code>.github/workflows/main.yml</Code>. Your project directory should now look something like this:
            </Paragraph>
            <CodeBlock disableCopy value={fileStructureAfterGithub}/>
            <Paragraph>
                Next, inside your newly created <Code>main.yml</Code> file, paste in the following script. This is where the magic happens. Every time you push a commit to the <Code>main</Code> branch, GitHub will automatically build your project and copy the contents of the built app into the <Code>gh-pages</Code> branch. (The <Code>gh-pages</Code> branch is where GitHub will serve statically for GitHub Pages.)
            </Paragraph>
            <CodeBlock value={githubMainYml}/>
            <SidePad>
                <Alert severity="info">
                    If you are not using Vite, the project build command may not be <Code>npm run build</Code>. You can check by looking at your npm scripts in <Code>package.json</Code>. Additionally, the output directory of your built app may not be <Code>./dist</Code> like Vite. Make the necessary changes to <Code>main.yml</Code> to support your build tool.
                </Alert>
            </SidePad>
            <Paragraph>
                Once you have that setup, navigate to the <b>Settings</b> page of your repository on GitHub and look for the <b>Actions</b> tab in the sidebar. At the very top of the page, you should be able to see the Actions permissions. For this user guide, you need to select the first option <Code>Allow all actions and reusable workflows</Code>. However, you can also opt for the fourth option if your project will be open-sourced to prevent malicious actions. We need this enabled because our <Code>main.yml</Code> is using a public GitHub Action (<Code><Link href="https://github.com/peaceiris/actions-gh-pages" target="_blank">peaceiris/actions-gh-pages@v3</Link></Code>) to help us deploy.
            </Paragraph>
            <Image src={githubActionSettings} alt="github-action-permissions"/>
            <Paragraph>
                While you are still on that page, scroll down a bit and you should see the Workflow permissions. You need to select <Code>Read and write permissions</Code>. GitHub needs those permissions to read from your <Code>main</Code> branch and push the built app into <Code>gh-pages</Code> branch for you.
            </Paragraph>
            <Image src={githubActionWorkflow} alt="github-action-workflow"/>
        </Section>
    )
}
