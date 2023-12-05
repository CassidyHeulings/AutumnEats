import { BrowserRouter, Routes, Route } from "react-router-dom"
import Careers from "./pages/Careers"
import ContactUs from "./pages/ContactUs"
import Main from "./pages/Main"
import OnlineOrder from "./pages/OnlineOrder"
import Directions from "./pages/Directions"
import Menu from "./pages/Menu"

export default function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<Main />} />
                    <Route path = "/Menu" element = {<Menu/>}/>
                    <Route path = "/Careers" element = {<Careers />} />
                    <Route path = "/ContactUs" element = {<ContactUs />} />
                    <Route path = "/Main" element = {<Main />} />
                    <Route path = "/OnlineOrder" element = {<OnlineOrder />} />
                    <Route path = "/Directions" element = {<Directions />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}