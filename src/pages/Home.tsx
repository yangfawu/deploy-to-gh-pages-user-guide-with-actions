import Introduction from "../content/Introduction"
import CreatingProject from "../content/CreatingProject"
import SettingUpConfigs from "../content/SettingUpConfigs"
import Deploying from "../content/Deploying"
import Conclusion from "../content/Conclusion"
import ExtraRouting from "../content/ExtraRouting"
import Footer from "../content/Footer"
import RepositoryProvider from "../context/RepositoryProvider"
import { Stack } from "@mui/material"
import GithubProvider from "../context/GithubProvider"

export default function Home() {
    return (
        <GithubProvider>
            <RepositoryProvider>
                <Stack spacing="48px">
                    <Introduction/>
                    <CreatingProject/>
                    <SettingUpConfigs/>
                    <Deploying/>
                    <ExtraRouting/>
                    <Conclusion/>
                    <Footer/>
                </Stack>
            </RepositoryProvider>
        </GithubProvider>
    )
}
