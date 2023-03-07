import { HashRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import { lazy } from "react"

const Home = lazy(() => import("./pages/Home"))
const Second = lazy(() => import("./pages/Second"))
const NotFound = lazy(() => import("./pages/NotFound"))

export default function App() {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<RootLayout/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="second-page" element={<Second/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}
