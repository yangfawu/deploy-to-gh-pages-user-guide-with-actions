import Section from "../components/Section"
import { Alert, Link, Typography } from "@mui/material"
import CodeBlock from "../components/CodeBlock"
import Code from "../components/Code"
import { useRepo } from "../context/RepositoryContext"
import { javascript } from "@codemirror/lang-javascript"
import Image from "../components/Image"
import githubActionSettings from "../assets/github-action-settings.png"

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
    const { value: { parsed } } = useRepo()
    return (
        <Section title="Setting Up Configs">
            <Typography>
                By now, your project directory should look something like this:
            </Typography>
            <CodeBlock disableCopy value={fileStructure}/>
            <Typography>
                In your <Code>vite.config.ts</Code> file, add a new field <Code>base</Code> to tell Vite that your project will be built at this base url <Code>/{parsed}/</Code>. On default, Vite will build your React app to be served from the root URL <Code>https://[YOUR GITHUB USERNAME].github.io/</Code>. However, due to the way how Github Pages work, we want to deploy our app at <Code>https://[YOUR GITHUB USERNAME].github.io/{parsed}/</Code> instead.
            </Typography>
            <CodeBlock value={viteConfig(parsed)} extensions={[javascript({ typescript: true })]}/>
            <Typography>
                In your root project directory, create a new file at <Code>.github/workflows/main.yml</Code>. Your project directory should now look something this:
            </Typography>
            <CodeBlock disableCopy value={fileStructureAfterGithub}/>
            <Typography>
                Next, inside your newly created <Code>main.yml</Code> file, paste in the following script. This is where the magic happens. Everytime you push a commit to the <Code>main</Code> branch, Github will automatically build your project and copy the contents of the built app into the <Code>gh-pages</Code> branch. (The <Code>gh-pages</Code> branch is where Github will serve statically for Github Pages.)
            </Typography>
            <CodeBlock value={githubMainYml}/>
            <Alert severity="info">
                If you are not using Vite, the project build command may not be <Code>npm run build</Code>. You can check by looking at your npm scripts in <Code>package.json</Code>. Additionally, the output directory of your built app may not be <Code>./dist</Code> like Vite. Make the necessary changes to <Code>main.yml</Code> to support your build tool.
            </Alert>
            <Typography>
                Once you have that set up, navigate to the <b>Settings</b> page of your repository on Github and look for the <b>Actions</b> tab in the sidebar. At the very top of the page, you should be able to see the permissions for Actions. For this user guide, you need to select the first option <Code>Allow all actions and reusable workflows</Code>. However, you can also opt for the fourth option if your project will be open-sourced to prevent malicious actions. We need this enabled because our <Code>main.yml</Code> is using a public Github Action (<Code><Link href="https://github.com/peaceiris/actions-gh-pages" target="_blank">peaceiris/actions-gh-pages@v3</Link></Code>) to help us deploy.
            </Typography>
            <Image src={githubActionSettings} alt="github-action-settings"/>
        </Section>
    )
}
