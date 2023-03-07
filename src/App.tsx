import RootLayout from "./layouts/RootLayout"
import Introduction from "./content/Introduction"
import Header from "./content/Header"
import MainLayout from "./layouts/MainLayout"
import CreatingProject from "./content/CreatingProject"
import Footer from "./content/Footer"
import SettingUpConfigs from "./content/SettingUpConfigs"
import Deploying from "./content/Deploying"

export default function App() {
    return (
        <RootLayout>
            <Header/>
            <MainLayout>
                <Introduction/>
                <CreatingProject/>
                <SettingUpConfigs/>
                <Deploying/>
                <Footer/>
            </MainLayout>
        </RootLayout>
    )
}
